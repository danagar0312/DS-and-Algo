# implement hashtable 

class Hashtable{
  constructor(size){
    this.data = new Array(size)
  }
  
  _hash(key){
    hash = 0
    for(let i=0;i < key.length;i++){
      hash = (hash + key.charCodeAt(i) * i)% this.data.length
    }
    return hash;
  }

  set(key,value){
    let address = this.hash(key)
    if (!this.data[address]){
      this.data[address] = []
      this.data[address].push(key,value)
    }
    this.data[address].push(key,value)
    return this.data
  }

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address]
    console.log(currentBucket)
    if (currentBucket):
      for(let j = 0; j < currentBucket.length ; j++){
        if (currentBucket[i][0] === key){
          return currentBucket[i][1]
        }
      }
  }
}

const myHashTable = new HashTable(50)
myHashTable.set("1","One")
myHashTable.set("2","Two")
myHashTable.get("1")

