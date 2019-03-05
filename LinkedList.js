class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(val){
    let newNode = new Node(val);
   if(!this.head.data){
     this.head = newNode;
     this.tail = this.head;
   }
   else{
     this.tail.next = newNode;
     this.tail = newNode;
   }
   this.size++;
  }

  remove(val){
    if(this.head.data === val){
     let removedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removedNode;
    }
    else{
      let currentNode = this.head.next;
      let previousNode = this.head;
      while(currentNode){
        if(currentNode.next === null && currentNode.data === val){
          this.tail = previousNode;
          this.tail.next = null;
          this.size--;
          return currentNode;
        }
        else if(currentNode.data === val){
          previousNode.next = currentNode.next;
          this.size--;
          return currentNode;
        }
        else{
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
      return "Value not found";
    }
  }

  isEmpty(){
    return this.size === 0;
  }

  removeTail(){
    let current = this.head;
    let previous;
    let removedTail;
    // if only one node is in the LL
    if(!this.isEmpty()){
      // if there is only one node than the tail is the head
      if(current.next === null){
        removedTail = this.head;
        this.head = null;
        this.tail = null;
        return removedTail;
      }
      else{
        previous = current;
        current = current.next;
        while(current){
          // if the condition is true than I know the current node is the tail 
          if(current.next === null){
            removedTail = current;
            previous.next = null;
            this.tail = previous;
            return removedTail;
          }
        }

      }
    }
    else{
      return "Linked List is empty";
    }
  }

  contains(val){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.data === val){
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return "value not found";
  }

  isTail(val){
    return this.tail.data === val;
  }

  isHead(val){
    return this.head.data === val;
  }

}

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

/* 
  add(5);
  {
    head: {data:5, next: null}
    tail: {data:5, next: null}
  }
*/

let ll = new LinkedList(5);
ll.insert(5);
console.log(ll);

/* 
  add(10);
  {
    head: {data:5, next: {data:5, next: null}}
    tail: {data:10, next: null}
  }
*/
ll.insert(10);
console.log(ll);

/* 
  add(15);
  {
    head: {data:5, next: {data:10, next: {data:15, next: null}}}
    tail: {data:15, next: null}
  }
*/
ll.insert(15);
console.log(ll);

ll.isTail(6);



// /* 
//   remove(5);
//   {
//     head: {data:10, next: {data:15, next: null}}
//     tail: {data:15, next: null}
//   }
// */
// ll.remove(5);
// console.log(ll);

// /* 
//   remove(15);
//   {
//     head: {data:10, next: null}
//     tail: {data:10, next: null}
//   }
// */
// ll.remove(15);
// console.log(ll);


/* 
  remove(10);
  {
    head: {data:5, next: {data:15, next: null}}
    tail: {data:15, next: null}
  }
*/
// ll.remove(12);
// console.log(ll);

