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

fruits.forEach(function () {
  console.log('first')
})
