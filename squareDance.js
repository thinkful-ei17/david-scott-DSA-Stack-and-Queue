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
    const newNode = new _Node(data);
    if(!this.first){
      this.first = newNode;
    }
    if(this.last){
      this.last.next = newNode;
      newNode.prev = this.last;
    }
    this.last = newNode;
  }

  dequeue(){
    if(!this.first){
      console.log('This list is empty');
      return null;
    }

    const nodeToPop = this.first;
    this.first = this.first.next;

    if(this.last === nodeToPop){
      this.last = null;
    }

    return nodeToPop.data;
  }

  peek(){
    return this.first.data;
  }
}

function seedQueue(q, arr){
  arr.map(i => q.enqueue(i));
}

const dancerQ = new Queue;
const dancers = [
  {sex: 'F', name: 'Jane'},
  {sex: 'M', name: 'Frank'},
  {sex: 'M', name: 'John'},
  {sex: 'M', name: 'Sherlock'},
  {sex: 'F', name: 'Madonna'},
  {sex: 'M', name: 'David'},
  {sex: 'M', name: 'Christopher'},
  {sex: 'F', name: 'Beyonce'}
];

seedQueue(dancerQ, dancers);
console.log(dancerQ.peek());
