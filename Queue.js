class Queue{
    constructor(){
      this.data = {};
      this.bottomIndex = 0;
      this.currentIndex = 0;
      this.length = 0;
    }
    enqueue(val){
      this.data[this.currentIndex] = val;
      this.currentIndex++;
      this.length++;
    }
  
   
  
    dequeue(){
      if(!this.isEmpty()){
        let removedVal = this.data[this.bottomIndex];
        delete this.data[this.bottomIndex];
        this.bottomIndex++;
        this.length--;
        return removedVal;
      }
      else{
        return new Error("Operation not permitted, the queue is empty");
      } 
    }
  
    isEmpty(){
      return this.length === 0;
    }
  
    peek(){
      return this.data[this.bottomIndex];
    }
  }
  
  let dmv = new Queue();
  
  dmv.enqueue(5);
  console.log(dmv.length);
  
  dmv.dequeue();
  console.log(dmv.length);
  
  dmv.dequeue();
  console.log(dmv.length);