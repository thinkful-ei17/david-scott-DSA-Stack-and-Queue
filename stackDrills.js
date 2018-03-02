const Stack = require('./stack.js');


function is_palindrome(s) {
  let stack = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
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


// (1+4) - (8-4)
// ((2+2) + (1+1)
// declare a var, replacing all non parens
// s = s.replace(/[^()])/g, '')

function hi(s) {
  s = s.replace(/[^()]/g, '');
}
