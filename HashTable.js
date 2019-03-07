class HashTable{
    constructor(val){
      this._storage = [];
        this._size = val;
    }

    insert(key, value){
        let hashIndex = this._hash(key, this._size);
        let duplicateKeyFlag = false;
        if(!this._storage[hashIndex]){
          this._storage[hashIndex] = [];
        }
        for(let i = 0; i < this._storage[hashIndex].length; i++){
          if(this._storage[hashIndex][i][0] === key){
            this._storage[hashIndex][i][1] = value;
            duplicateKeyFlag = true;
          }
        }
        
        if(!duplicateKeyFlag){
          this._storage[hashIndex].push([key,value]);
        }

       
          
    }

    retrieve(key){
        let hashIndex = this._hash(key, this._size);
          if(this._storage[hashIndex]){
              for(let i = 0; i < this._storage[hashIndex].length; i++){
                if(this._storage[hashIndex][i][0] === key){
                  return this._storage[hashIndex][i][1];
                }
              }
          }
            return "Value not found"
          
    }

    remove(key){
      let hashIndex = this._hash(key, this._size);
      if(this._storage[hashIndex]){
        for(let i = 0; i < this._storage[hashIndex].length; i++){
                if(this._storage[hashIndex][i][0] === key){
                  let removedValue = this._storage[hashIndex][i][1];
                  this._storage[hashIndex].splice(i,1);
                  return removedValue;
                }
              }
      }
      return "Value not found";
    }

    _hash(str,n){
        let sum = 0;
        for(let i = 0; i < str.length; i++){
            sum += str.charCodeAt(i) * 3;
        }
        return sum % n;
    }
}