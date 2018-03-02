const Stack = require('./stack.js');

let stack = new Stack();

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let newStr = '';
  //loop over string and push characters into stack;
  for(let i=0; i<s.length; i++) {
    stack.push(s[i]);
  }
  //Stack.pop until stack is empty;
  let i = 0;
  while((stack.top !== null)) {
    if(s[i] !== stack.pop()) {
      return false;
    }
    i++;
  }
  return true;
}

console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('David'));