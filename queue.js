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
  //prev first <-prev next <-prev last
  enqueue(data){
    const node = new _Node(data);

    if(this.first === null){
      this.first = node;
    }

    if(this.last){
      this.last.next = node;
      node.prev = this.last;
    }  

    this.last = node;
    return;
  }

  dequeue(){
    if(this.first === null){
      return null;
    }

    const nodeToDequeue = this.first;
    this.first = this.first.next;

    if(nodeToDequeue === this.last){
      this.last = null;
    }

    return nodeToDequeue.data;
  }
}

//=========== ^ End of Class ^ ===============


function peek(q){
  if(!q.first){
    return null;
  }
  return q.first.data;
}

function display(q){
  if(!q.first){
    console.log('no q');
    return null;
  }

  let currNode = q.first;
  console.log('-----------start');
  while(currNode !== null){
    console.log(currNode.data);
    currNode = currNode.next;
  }
  console.log('------------end');
  return;
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
// console.log(peek(starTrekQ));
// display(starTrekQ);
// starTrekQ.dequeue();
// display(starTrekQ);
// starTrekQ.dequeue();
// display(starTrekQ);
// starTrekQ.dequeue();
// display(starTrekQ);
// starTrekQ.dequeue();
// display(starTrekQ);
console.log(starTrekQ.last);
