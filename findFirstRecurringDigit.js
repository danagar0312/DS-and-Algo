# first recurring digit in the Array

def findFirstRecurringDigit1(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if arr[i] ===arr[j]:
        return arr[i]
      }
    }
  }
}
    
def findFirstRecurringDigit2(arr){
  let map={}
  for (let i=0; i < arr.length; i++){
    if(map(arr[i]) !== undefined){
      return arr[i]
    }
    else{
      map[arr[i]] = i
    }
  }
  return undefined
}

findFirstRecurringDigit2(1,2,2,3,4,5,5)
