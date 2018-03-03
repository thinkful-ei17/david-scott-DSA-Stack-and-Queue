'use strict';
const Stack = require('./stack.js');

// =================== Palindrome =====================
// function is_palindrome(s) {
//   let stack = new Stack();
//   s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//   //loop over string and push characters into stack;
//   for(let i=0; i<s.length; i++) {
//     stack.push(s[i]);
//   }
//   //Stack.pop until stack is empty;
//   let i = 0;
//   while((stack.top !== null)) {
//     if(s[i] !== stack.pop()) {
//       return false;
//     }
//     i++;
//   }
//   return true;
// }

// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('David'));


// =========================== Matching Parentheses ==============================

// (1+4) - (8-4)
// ((2+2) + (1+1)
// declare a var, replacing all non parens
// s = s.replace(/[^()])/g, '')

function matchParens(s) {
  const stack = new Stack();

  //loop over s
  for(let i=0; i < s.length; i++){

    if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
      stack.push({item: s[i], location: i});
    }
    else if(s[i] === ')'){ 
      const popped = stack.pop();
      console.log('popped', popped);
      if(popped.item !== '('){
        console.log(`Not matched at: s[${i}]`);
        return false;
      }  
    }
    else if(s[i] === ']'){ 
      const popped = stack.pop();
      console.log('popped', popped);
      if(popped.item !== '['){
        console.log(`Not matched at: s[${i}]`);
        return false;
      } 
    }
    else if(s[i] === '}'){ 
      const popped = stack.pop();
      console.log('popped', popped);
      if(popped.item !== '{'){
        console.log(`Not matched at: s[${i}]`);
        return false;
      } 
    }          
  }
  if(stack.top !== null){
    console.log(`Unclosed: ${stack.peek().item}, at: s[${stack.peek().location}]`);
    return false;
  }
  else{
    console.log('It\'s a match!');
    return true;
  }
}

// console.log(matchParens('(1 + 1) - 3((2+4))')); //true
// console.log(matchParens('(1+3) - 5')); //true
// console.log(matchParens('1 +) = 75'));//false
// console.log(matchParens('(1 +1) = 2'));//true
console.log(matchParens('{[]}'));//false

//loop over s
//if our char is ( we push to a stack.  If character is ) && is stack is not empty we pop
// if we can't pop || if our stack is not empty at the end of the loop, we return false;

// =========================== Sort Stack ==============================

function sortStack(stack) {
  if(stack.top === null) {
    console.log('empty  stack');
    return;
  }
  let temp;
  const newStack = new Stack();
  while(stack.top !== null) {
    temp = stack.pop();
    if(newStack.top === null) {
      newStack.push(temp);
    } 
    else if(newStack.peek() >= temp) {
      newStack.push(temp);
    }
    else {
      while((newStack.peek() < temp) && (newStack.top !== null)) {
        stack.push(newStack.pop());
      }
      newStack.push(temp);
    }
  }
  return newStack;
}

let s = new Stack();
s.push(3);
s.push(2);
s.push(4);
s.push(1);
s.push(6);
s.push(5);

// console.log(sortStack(s));