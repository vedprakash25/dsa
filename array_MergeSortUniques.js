const ls1 = [51,52,56]
const ls2 = [52,45,56]

let arr=[]
// merging options
// arr = ls1.concat(ls2)     // 1

arr = [...ls1, ...ls2]       //2

// Array.prototype.push.apply(ls1,ls2)     //3
// arr = ls1

//  ls2.forEach((item)=>{   // 4
//     ls1.push(item)
// })
// arr = ls1

// sorting 
arr.sort()

// remove duplicates using Set(), converting back Array
// const uniquesOnly = new Set(arr)
// console.log( arr, [...uniquesOnly])

// remove duplicates using includes()
// const tempArr = []
// arr.forEach((item,index)=>{
  
//   if(tempArr.includes(item)){
//     console.log("already there")
//   }
//   else{
//     tempArr.push(item)
//     console.log(tempArr)
//   }
// })
// console.log(tempArr)  


//remove duplicates using filter()
const newArr = arr.filter((item,index,self)=>{
  // checks the first matched value === loops index
  console.log(item, arr.indexOf(item),self)
  return arr.indexOf(item) === index
  
})

console.log(newArr)
