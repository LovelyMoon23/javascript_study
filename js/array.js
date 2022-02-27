'use strict'
// 첫번째 자료구조인 array!
// 비슷한것들을 묶어서 바구니에 담아놓는것을 자료구조라고 한다.
// obj와 자료구조의 차이점은?
// 비슷한 특징을 가진 obj를 모아놓는것을 자료구조라고 한다

// 1. declaration
const arr1 = new Array()
const arr2 = [1, 2]

// 2.Index position
const fruits = ['사과', '바나나']
console.log(fruits)
console.log(fruits.length) //2

// obj에서는 원하는 데이터에 접근하기 위해서 console.log(fruits['name']) 로 키값을 주면 됐다
// 배열에서는 index를 사용하여 접근한다
console.log(fruits[0]) //사과

// a. for
for (let i = 0; i < array.length; i++) {
  const element = array[i]
  console.log(element)
}

// b. for of

for (let fruit of fruits) {
  console.log(fruit)
}

// c. forEach

// 함수 첫번째 parameter에는 value가 그리고 두번째는 Index를 넣을 수 있다.
// fruits.forEach(function (value, index) {
//   console.log(fruit, index)  // 사과 0 바나나 1
// })

fruits.forEach((fruit) => {
  console.log(fruit, index)
})

// 4. Addition, eletion, copy
// push: add an item to the end

// pop: remove an item from the end
fruits.pop() // 사과
fruits.pop() // 빈배열

// unshift : add an item to the beginning
fruits.unshift('딸기', '사과') // ["딸기", "사과"]

// shift : remove an item from the beginning
fruits.shift() // ["사과"]

// splice: remove an item by index positiom (also can add an items)

fruits.push('딸기', '복숭아', '배') // ["사과","딸기","복숭아","배"]
fruits.splice(1) //만약 없애려는 숫자의 개수를 적지 않을 경우엔?
console.log(fruits) // ["사과"] index1번째부터 다 삭제되버림
fruits.splice(1, 1, '사과', '배', '딸기', '수박', '키위')
console.log(fruits) //["사과", "배", "딸기", "수박", "키위"]

// concat: combine two arrays
const fruits2 = ['딸기', '복숭아']
const newFruits = fruits.concat(fruits2)
console.log(newFruits) //["사과", "배", "딸기", "수박", "키위", "딸기", "복숭아"]
// fruits 뒤에 fruits2가 합해지는 배열이 나온다!

// 5. Searching
// indexOf: find the index , 만약 찾으려는 value가 존재하지 않으면 '-1' 나옴
// includes: 찾으려는 value가 배열안에 있는지 없는지 boolean으로 알려줌

console.log(fruits) // ["사과", "배", "딸기", "수박", "키위"]
console.log(fruits.indexOf('배')) // 1
console.log(fruits.indexOf('원숭이')) //-1

console.log(fruits.includes('딸기')) // true
console.log(fruits.includes('사자')) // false

//lastIndexOf : 만약 해당 배열에 똑같은 value가 두개 이상있을떈?
// indexOf는 늘 첫번째 나오는 값의 index를 알려준다.
// 만약 lasftIndexOf를 쓰면 해당 배열의 뒤에서부터 값을 찾을 수 있게 된다.

console.log(fruits) // ["사과", "배", "딸기", "수박", "키위"]
fruits.push('배')
console.log(fruits) // ["사과", "배", "딸기", "수박", "키위", "배"]

console.log(fruits.indexOf('배')) // 1
console.log(fruits.lastIndexOf('배')) // 5
