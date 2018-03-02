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
    // console.log('i:', i);
    if(s[i] === '('){
        stack.push(i);
    }
    else if(s[i] === ')' && stack.top !== null){
        stack.pop();
    }
    else if(s[i] === ')' && stack.top === null){
        console.log(`Not a match: ) charAt: `, i);
        return false;
    }
  }
  if(stack.top !== null){
      console.log(`Not a match: ( ${stack.pop()}`);
      return false;
  }
  else{
    console.log("It's a match!");
    return true;
  }
}

// console.log(matchParens('(1 + 1) - 3((2+4))')); //false
// matchParens('(1+3) - 5'); //true
// matchParens('1 +) = 75');//false
// matchParens('(1 +1) = 2');//true
matchParens('1((');//true

//loop over s
//if our char is ( we push to a stack.  If character is ) && is stack is not empty we pop
// if we can't pop || if our stack is not empty at the end of the loop, we return false;