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

const stack1 = new Stack();

stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.display());

//implement a queue using two stacks

//1 2 3 4 5

//  1  


//  2  =>   1
//     =>  2
//          1
//  1   <=
//  2


//  3       2
//          1
//  