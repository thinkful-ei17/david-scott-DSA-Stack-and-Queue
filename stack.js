class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    const node = this.top;
    this.top = this.top.next;
    return node.data;
  }

  peek() {
    if(this.top === null){
      console.log('stack is empty!');
      return;
    }
    console.log(this.top.data);
  }
}

function main() {
  let StarTrek = new Stack();

  StarTrek.push('Kirk');
  StarTrek.push('Spock');
  StarTrek.push('McCoy');
  StarTrek.push('Scotty');
  console.log(StarTrek);
  StarTrek.peek();
}

main();