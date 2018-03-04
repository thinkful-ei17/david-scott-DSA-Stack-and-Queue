'use strict';

class _Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(data){
    const newNode = new _Node(data);

    if(this.top){
      newNode.next = this.top;
    }
    this.top = newNode;
  }  

  pop(){
    if(!this.top){
      return null;
    }
    const nodeToPop = this.top;
    this.top = this.top.next;
    
    return nodeToPop.data;
  }

  peek(){
    if(!this.top){
      console.log('The stack is empty');
      return null;
    }
    return this.top.data;
  }

  display(){
    if(!this.top){
      console.log('The stack is empty');
      return null;
    }
    let currentNode = this.top;
    const display = [];
    while(currentNode !== null){
      display.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return display;
  }
}


//implement a queue using two stacks

//1 2 3 4 5

// ========= first thought ============================================

//enqueue => stack1 pop & push to stack2 until stack1 is empty
//           add new node to stack1
//          pop & push from stack2 to stack1 until stack1 is empty

//dequeue => stack1 pop;

//==============second thought =====================================

//enqueue => stack1 push;
//dequeue => stack1 pop & push to stack2 until stack1 is empty
//           stack2 pop
//          stack2 pop & push to stack1

// first thought means everytime you add a new node, you have to move the list twice, but when you remove a node, you just take it off the top
// second thought means you can push straight on, but each time you dequeue you have to move the list twice.  
//So, they are basically the same


// =================== Implement Thought Two ================

function enqueue(q, data){
  q.push(data);
}

function dequeue(q){
  const tempStack = new Stack();
  while(q.top !== null){
    tempStack.push(q.pop());
  }
  const dataToDequeue = tempStack.pop();
  while(tempStack.top !== null){
    q.push(tempStack.pop());
  }
  return dataToDequeue;
}

//=============================================================

function initializeQueue(q, arr){
  arr.map(i => enqueue(q, i));
}


const animalQ = new Stack();
const animals = ['giraffe', 'monkey', 'lion'];


initializeQueue(animalQ, animals);

console.log('expect giraffe:', dequeue(animalQ));
console.log('expect monkey:', dequeue(animalQ));

enqueue(animalQ, 'turtle');
enqueue(animalQ, 'hare');

console.log('expect lion:', dequeue(animalQ));
console.log('expect turtle:', dequeue(animalQ));

// const names = ['Scott', 'John', 'Oscar'];
// const test = new Stack();
// initializeQueue(test, names);
// console.log(test.display());
// dequeue(test);
// console.log(test.display());
// enqueue(test, 'George');
// enqueue(test, 'Henry');
// enqueue(test, 'Harriette');
// console.log(test.display());
// dequeue(test);
// console.log(test.display());


