class Stack{
    constructor(){
        this.data = {};
        this.topIndex = -1;
    }

    push(val){
        this.topIndex++;
        this.data[this.topIndex] = val;
    }

    pop(){
        if(!this.isEmpty()){
          let removedData = this.data[this.topIndex];
         delete this.data[this.topIndex];
         this.topIndex--;
         return removedData;
        }
        else{
          return "Stack is empty";
        }
        
    }
    peek(){
      if(!this.isEmpty()){
        return this.data[this.topIndex];
      }
      else{
        return "Stack is empty";
      }
      
    }
    isEmpty(){
      return this.topIndex === -1;
    }
}

let s = new Stack();

s.push(5);
s.peek()



console.log(s);

