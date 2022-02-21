'use strict'
// 1. string concatenation

console.log('my' + 'cat')
//my cat
console.log('1' + 2)
//12
console.log(`string literals: 1 + 2 = ${1 + 2}`)
//string literals: 1 + 2 = 3

// 모두 결과값은 moon's book 이 나온다.
console.log("moon's book")
// single quote 사용시!
console.log("moon's book")

console.log("moon's \nbook")
//moon's
//book

// 2. numeric operator

console.log(1 / 1) // 나누기
console.log(5 % 2) // 나머지 값 remainder
console.log(2 ** 3) // 2의 3승 exponentiation

// 3. increment and decrement operators

let counter = 2
const preIncrement = ++counter
// 해당 값은 아래와 같다.
counter = counter + 1
preIncrement = counter

console.log(counter) //3
console.log(preIncrement) //3

const postIncrement = counter++
//먼저 변수에게 값을 할당한 다음, counter의 값을 1증가!(업데이트)
postIncrement = counter
counter = counter + 1

console.log(counter) // 4
console.log(postIncrement) //3

// 4. assignment operators

let x = 3
let y = 6

x += y // x = x + y
x -= y // x = x - y
x /= y // x = x / y
x *= y // x = x * y

// 6. logical operators : || (or), && (and), ! (not)
// 여기에서 오해하는게 있는데! 이것은 무조건 true값이 하나 나오게 되면 바로 뒤에 boolean값을 생각하지 않고 true 처리해 버림

const value1 = false //false
const value2 = 4 < 2 //false

// 1) || (or)
console.log(`or: ${value1 || value2 || check()}`)
// 그리고 꼭! 헤비한 함수는 꼭 제일 뒤에 배치해야 함! 그래야 효율적인 코드임

// 해당 check라는 함수는 시간을 낭비하다가 결국엔 true를 리턴하는 함수
function check() {
  for (let i = 0; i < 10; i++) {
    console.log('하하')
  }
  return true
}

// 2) && (and), finds the first falsy value
// 모든값이 true여야만 함!
// 만약에
console.log(`or: ${value1 && value2 && check()}`)
// 첫번째가 false일 경우 뒤에 있는 value2나 함수가 실행되지 않음!

// 6. !
// 값을 반대로 해준다
console.log(!value1) // 원래 false값을 '!' 를 붙여줌에 따라 true로 바꿔준다

// 7. equality
const stringFive = '5'
const numberFive = 5

// == loose equality ,type을 변경한다! ,with type conversion
console.log(stringFive == numberFive) // true
console.log(stringFive != numberFive) // false

// ===strict equality , no type conversion
// 실제 코딩할 때는 strict equality 사용하는 것이 좋다.
// 또한 그러기 위해서는 obj에 대해 잘 알고 있어야 한다.
console.log(stringFive === numberFive) // false
console.log(stringFive !== numberFive) // true
// obj equality by reference

const ellie1 = { name: 'ellie' } // ellie1과 ellie2는 같은 name을 갖고 있지만, 각각 다른 ref에 저장되므로 다르다.
const ellie2 = { name: 'ellie' }
const ellie3 = ellie1 // 중요! ellie1의 ref를 갖는다!
console.log(ellie1 == ellie2) // 각각 다른 ref가 저장되어 있기 때문에 false
console.log(ellie1 === ellie2) // 타입이 갖던 아니든 ref값이 다르기 때문에 false
console.log(ellie1 === ellie3) // ellie1이 갇고있는 ref를 공유했기 때문에 true

// equality - PUZZlER !!!!!!!!!!!!!!!

console.log(0 == false) // t
console.log(0 === false) //f boolean type이 아니니까
console.log('' == false) //t
console.log('' === false) //f boolean type이 아니니까
console.log(null == undefined) // 신기하게도 t !
console.log(null === undefined) //f 다른 타입이므로!

// 8. if
const name = 'df'
if (name === 'ellie') {
  console.log('엘리 맞아요')
} else if (name === 'coder') {
  console.log('이거 답이에요')
} else {
  console.log('답이 없다면?')
}

//9. ternary operator :
// condition  ? value1 : value2
console.log(condition ? value1 : value2)
// t 이면 앞에 값이 나오고 f이면 뒤에 value2
// 간단할때만 이렇게 하는 것이고! 만약 복잡해진다면 switch를 사용하는 것이 옳다!

// 10.switch statement
// use for multiple if checks

const browser = 'IE'
switch (browser) {
  case 'IE':
    console.log('go away!')
    break
  case 'Chrome':
  case 'FireFox':
    console.log('love you!')
    break
  default:
    console.log('same all')
    break
}

// 11. do while

const i = 3
do {
  console.log(`dowhile: ${i}`)
  i--
} while (i > 0)
// 해당값은 loop를 돌고 그다음에 while문 컨디션을 체크한다. 따라서 i = 값일때도 값이 나온다.

//12. nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`)
  }
}
// CPU에 좋지 않으므로 사용하는것을 지양한다 (x의 몇승 정도..)

// break, continue !
// Q1.iterate from 0 to 10 and print only even numb(use continue!)
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue
  }
  console.log(`q1: ${i}`)
}
//하지만 보통 아래 방법 사용!

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(`q1: ${i}`)
  }
}
// Q2. iterate from 0 to 10 and print till reaching 8(use break!)

for (let i = 0; i <= 10; i++) {
  if (i > 8) {
    break
  }
  console.log(`q2: ${i}`)
}
