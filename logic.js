import {questions,dimensions,theories} from './data/questions.js';
export {questions,dimensions,theories};
export const BANK_VERSION='theories-20261014-v3';
export const byId=Object.fromEntries(questions.map(q=>[q.id,q]));
export function shuffle(items,rng=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
export function createSession(count=20,rng=Math.random){
 if(![20,40].includes(count))throw Error('题数必须为20或40');
 // 五理论×四维度，每格1/2题，两个方向同时均衡。
 const perCell=count/(theories.length*dimensions.length);
 const picked=dimensions.flatMap(d=>theories.flatMap(t=>shuffle(questions.filter(q=>q.dimension===d.id&&q.theme===t.id),rng).slice(0,perCell).map(q=>q.id)));
 return {version:BANK_VERSION,ids:shuffle(picked,rng),answers:{},index:0,done:false,created:new Date().toISOString()};
}
export function validSession(s){return !!s&&s.version===BANK_VERSION&&[20,40].includes(s.ids?.length)&&new Set(s.ids).size===s.ids.length&&s.ids.every(id=>byId[id])&&Number.isInteger(s.index)&&s.index>=0&&s.index<s.ids.length&&s.answers&&typeof s.answers==='object'&&Object.entries(s.answers).every(([id,v])=>s.ids.includes(id)&&Number.isInteger(v)&&v>=0&&v<4)&&(!s.done||s.ids.every(id=>Number.isInteger(s.answers[id])))}
export function calculate(s){if(!validSession(s)||!s.ids.every(id=>Number.isInteger(s.answers[id])))throw Error('请先完成所有题目');return dimensions.map(d=>{const ids=s.ids.filter(id=>byId[id].dimension===d.id);const total=ids.reduce((sum,id)=>sum+byId[id].options[s.answers[id]].score,0);return {...d,value:Math.round(total/(ids.length*3)*100),count:ids.length}})}
export function getResult(s){const scores=calculate(s),ordered=[...scores].sort((a,b)=>b.value-a.value);const top=ordered[0],bottom=ordered[ordered.length-1];const even=top.value-bottom.value<=12;
const types={choice:['理论可以听，脑子不外包','五套理论轮流拍你肩膀，你还记得问：我自己想干啥？这轮你更常自己做主。好处是少被带跑，代价是最后也得自己拍板，评论区不能替你背锅。'],action:['嘴上薄肌，手上真干','群里还在宣布时代到了，你已经干了一件小事。这轮你更常直接试。效率不错，但该问清的条件也别跳过，开干不等于闭眼冲。'],evidence:['评论区开庭，我要原片','群里都准备宣判了，你还在问原图、前后句和数据。你这轮更常先查材料。少吃假瓜是好事，但别查到饭都凉了还没决定吃啥。'],space:['水桶我能拎，人别榨成渣','大水可以扛，苦不能无限续杯。这轮你更常留时间、留退路，也允许别人说不。该你做的还是得做，边界别变成消息免打扰一万年。']};
let [name,description]=top.value<=45?['五套已安装，自己未启动','你这轮更常照现成标准走、先准备、先信熟悉的说法，或者把要求全接下。理论把硬盘塞满了，下一步还得自己点。可以先挑一件自己的事试试。']:even?['脑内五个群，正在抢麦','这轮四项分数挺接近，没有一项特别突出。名字是个梗，不代表五套理论你都信。谁抢到麦先别急着宣布，下面两道是你真选过的。']:types[top.id];
const picks=[...s.ids].sort((a,b)=>byId[b].options[s.answers[b]].score-byId[a].options[s.answers[a]].score);const discussions=[picks[0],picks[picks.length-1]].map(id=>{const q=byId[id],answer=q.options[s.answers[id]];return {id,prompt:q.prompt,answer:answer.text,chapter:q.chapter,section:q.section,score:answer.score,dimension:dimensions.find(d=>d.id===q.dimension),theme:q.theme,concept:q.concept,connection:q.connection,reference:q.reference,explanation:q.feedback?.[String(answer.score)]||(answer.score===3?q.high:answer.score===0?q.low:'你这题选了：'+answer.text+'。后面会怎么做，这题没有替你决定。')}});
return {name,description,scores,top,bottom,discussions,theoryCounts:theories.map(t=>({...t,count:s.ids.filter(id=>byId[id].theme===t.id).length})),recommendations:[...new Set([top.chapter,bottom.chapter,...discussions.map(d=>d.chapter)])].slice(0,3)}}
