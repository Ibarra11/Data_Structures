class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(val){
    let newNode = new Node(val);
    // If the head is null then we insert the node at the head
   if(!this.head){
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
        this.size--;
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
            this.size--;
            return removedTail;
          }
          previous = current;
          current = current.next;
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
