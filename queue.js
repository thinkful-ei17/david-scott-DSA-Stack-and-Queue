'use strict';

class _Node{
  constructor(data){
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    const node = new _Node(data);

    if(this.first === null){
      this.first = node;
    }
 
    if(this.last){
      node.next = this.last;
      this.last.prev = node;
    }  
    this.last = node;
    return;
  }
  dequeue(){
    if(this.first === null){
      return null;
    }
    const node = this.first;
    this.first = this.first.prev;

    if(node === this.last){
      this.last = null;
    }

    return node.data;
  }
}

function peek(q){
  if(!q.first){
    return null;
  }
  return q.first.data;
}

const starTrekQ = new Queue();

function main(){
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
}

main();
console.log(peek(starTrekQ));