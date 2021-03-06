class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(val){
    let newNode = new Node(val);
    // If the linked list is empty then I just insert at the head
   if(this.isEmpty()){
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
    if(!this.isEmpty()){
      if(this.head.data === val){
     let removedNode = this.head;
      // So if the there is only one node in the Linked List and it is being removed than the head and tail are reset to their default state.  
     if(this.size === 1){
       this.head = null;
       this.tail = null;
     }
     else{
       this.head = this.head.next;
     }
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
    else{
      return "Linked list is empty";
    }
  }

 
  isEmpty(){
    return this.size === 0;
  }

  removeTail(){
    // if only one node is in the LL
    if(!this.isEmpty()){
      let current = this.head;
      let previous;
      let removedTail;
      // if there is only one node than the tail is the head
      if(this.size === 1){
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


let ll = new LinkedList();

ll.insert(10);
ll.insert(15);
ll.insert(5);

console.log(ll)


