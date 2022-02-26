//'use strict';
console.log('hello world!')
let a
a = 6

// additional part
// var, let, const의 차이
// 앞에서 발견한 var 키워드의 문제점은 크게 세 가지가 존재한다.

// 변수 중복 선언 가능하여, 예기치 못한 값을 반환할 수 있다.
// 함수 레벨 스코프로 인해 함수 외부에서 선언한 변수는 모두 전역 변수로 된다.
// 변수 선언문 이전에 변수를 참조하면 언제나 undefined를 반환한다.

// ES6에서 나온 let과 const 키워드는 위의 세 가지 문제점을 해결했다.

// 1. 변수 중복 선언 불가
// (1) let

// let 키워드로는 변수 중복 선언이 불가하지만, 재할당은 가능하다.

// let name = 'kmj'
// console.log(name) // output: kmj

// let name = 'howdy' // output: Uncaught SyntaxError: Identifier 'name' has already been declared

// name = 'howdy'
// console.log(name) // output: howdy
// (2) const

// const가 let과 다른 점이 있다면, 반드시 선언과 초기화를 동시에 진행되어야 한다.

// const name; // output: Uncaught SyntaxError: Missing initializer in const declaration
// const name = 'kmj'
// const도 let과 마찬가지로 재선언이 불가하며, 더 나아가 재할당도 불가하다. 재할당의 경우, 원시 값은 불가능하지만, 객체는 가능하다. const 키워드는 재할당을 금지할 뿐, ‘불변’을 의미하지 않는다.

// // 원시값의 재할당
// const name = 'kmj'
// name = 'howdy' // output: Uncaught TypeError: Assignment to constant variable.

// // 객체의 재할당
// const name = {
//   eng: 'kmj',
// }
// name.eng = 'howdy'

// console.log(name) // output: { eng: "howdy" }
// 2. 블록 레벨 스코프
// let, const 키워드로 선언한 변수는 모두 코드 블록(ex. 함수, if, for, while, try/catch 문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

// 위 var 키워드로 예를 들었던 것을 그대로 가져와 바꾸면 아래와 같은 결과가 나온다.

// let a = 1

// if (true) {
//   let a = 5
// }

// console.log(a) // output: 1
// var 키워드로 선언한 경우 5가 나왔지만, let 키워드로 선언한 경우 if 문 안에 있는 것은 지역 스코프를 가져 전역에서 console을 찍었을 경우, 전역에 있는 a가 결과 값으로 출력된다. (const 키워드도 let 키워드와 동일하게 동작한다)

// 3. 변수 호이스팅
// (1) let

// let 키워드로 선언한 변수는 선언 단계와 초기화 단계가 분리되어 진행된다. 즉, 런타임 이전에 자바스크립트 엔진에 의해 선언 단계가 먼저 실행되지만, 초기화 단계가 실행되지 않았을 때 해당 변수에 접근하려고 하면 참조 에러가 뜬다.

// console.log(name) // output: Uncaught ReferenceError: name is not defined

// let name = 'kmj'
// 따라서 let 키워드로 선언한 변수는 스코프의 시작 지점부터 초기화 단계 시작 지점까지 변수를 참조할 수 없는 일시적 사각지대(Temporal Dead Zone: TDZ) 구간에 존재한다.

// (2) const

// const 키워드는 선언 단계와 초기화 단계가 동시에 진행된다.

// console.log(name) // output: Uncaught ReferenceError: Cannot access 'name' before initialization

// const name = 'kmj'
// let 키워드로 선언한 경우, 런타임 이전에 선언이 되어 자바스크립트 엔진에 이미 존재하지만 초기화가 되지 않았기 때문에 name is not defined라는 문구가 떴다. 하지만 const 키워드로 선언한 경우, 선언과 초기화가 동시에 이루어져야 하지만 런타임 이전에는 실행될 수 없다. 따라서 초기화가 진행되지 않은 상태이기 때문에 Cannot access 'name' before initialization 에러 문구가 뜬다.
