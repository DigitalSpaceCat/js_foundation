const tag = (...args) => console.log(args);
const a = '정체가';
const b = '뭐니?';

tag`너의 ${a} 도대체 ${b}`;

const tag1 = (strs, ...vars) => console.log(strs, vars, strs.raw);
tag1`너의 ${a} 도대체 ${b}`;