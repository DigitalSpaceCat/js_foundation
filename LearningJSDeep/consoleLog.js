const tag = (...args) => console.log(args);
const a = '정체가';
const b = '뭐니?';

tag`너의 ${a} 도대체 ${b}`;

const tag1 = (strs, ...vars) => console.log(strs, vars, strs.raw);
tag1`너의 ${a} 도대체 ${b}`;


const consoleLog = (strs, ...vars) => {
  const string = strs.reduce((prev, cur, i) => prev + strs[i] + (vars[i] || ''), '');
  console.log(string); // 여기에 똑똑한 문자열이 하면 되는 행동을 넣어줍니다.
  return string;
}

const str = `너의 ${a} 도대체 ${b}`;
console.log(str);
consoleLog`너의 ${a} 도대체 ${b}`;