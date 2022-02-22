// Objects
// one of the JS's data types.
// a collection of related data and/or functionality.
// Nearly all obj in JS are instances of Obj.
// obj = {key :value} obj는 우리가 접근 할 수 있는 property인 key와 그 값으로 이루어져 있다.

const obj1 = {} // 'obj literal' syntax
const obj2 = new Object() //'ob constructor' syntax

function print(person) {
  console.log(person.name)
  console.log(person.age)
}

const ellie = { name: 'ellie', age: 4 } // class없어도 괄호를 통해 obj 만들 수 있다. key는 name value는 ellie..
print(ellie)

// Runtime으로 데이터 추가
ellie.hasJob = true //runtime (실시간)이라서 이렇게 미친짓을 해도 '추가'가 가능하다! 다른언어에선 흔하지 않은 일이고 유지보수 힘들다
console.log(ellie.hasJob) //true
// Runtime으로 데이터 삭제 (delete)
delete ellie.hasJob
console.log(ellie.hasJob) //undefined

// 2. Computed propertues
// key should be always string!!!
console.log(ellie.name)
console.log(ellie['name']) //obj를 이렇게 name이라는 string으로도 접근 할 수 있다. 이것을 computed properties!
// 만약 새로운 property를 추가 하고 싶다면?
ellie['hasJob'] = true
console.log(ellie.hasJob) //true
// 그렇다면 언제 computed properties를 사용할까?
// 보통은 computed properties를 사용하지 않는다! 다만 value가 정해지지 않았을 때 쓴다! (동적으로 받아올때!)

function printvalue(obj, key) {
  console.log(obj.key) //key는 들어오는 값에 따라 다르므로 이 코드를 짤 때 우리는 key의 값을 모른다..
}
printvalue(ellie, 'name') // undefined가 나온다
//따라서,
function printvalue(obj, key) {
  console.log(obj[key]) // 이때는 스트링 타입으로 쓰지 않아도 된다. key자체이므로
}
printvalue(ellie, 'name') // ellie
printvalue(ellie, 'age') // 4

// 3. Property value shorthand
// 아래 처럼 우리가 obj를 만들게 되면, 일일이 key,value를 정해야 한다. 따라서 그냥 함수를 만들고, 공통 부분을 return하게 만들면 된다.
const person1 = { name: 'bob', age: 2 }
const person2 = { name: 'steve', age: 20 }
const person3 = { name: 'david', age: 5 }

// ********************************************* 이부분부터 자세히 보자 **********
const person4 = makePerson('ellie', 30)

// class에서 본 것 처럼 template처럼 생겼네요? 맞아요! 이전에 class가 없을때는 이렇게 obj를 생성했다!
// 이렇게 '계산'을 하지 않고 순수하게 obj를 생성하는 함수들은 보통 대문자로 시작하는 함수명을 만든다. 아래 67줄을 참고!
function makePerson(name, age) {
  return {
    // name: name,  이렇게 key와 value가 같을 때는 그냥 name이라고만 쓰면 된다!
    name,
    // age: age,
    age,
  }
}
console.log(person4)

// 4. Constructor Function
// 위에처럼 class 를 통해 constructor사용 하여 붕어빵 틀을 만들었던게 기억날 것이다.
// class에서 하듯이 하는 방법으로는 ,

// class형의 차이점은?
// 1) 함수는 무조건 대문자 시작 (계산 안하는 순수하게 obj만 생성하는 함수)
// 2) return 없음
// 3) this. 붙는다
// 4) 호출할때도 그냥 Person이 아니라, new Person으로 호출!
const person4 = new Person('ellie', 30)
function Person(name, age) {
  this.name = name
  this.age = age
}

// 5. in operator: property existence check (key in obj)
const car = { make: 'Honda', model: 'Accord', year: 1998 }
console.log('make' in car) // true

// 6. for ..in vs for ..of (중요!)
// for (key in obj)
const moonsil = { name: 'moonsil', gender: 'woman', age: '22' }
for (key in moonsil) {
  console.log(key) // 'name'  'gender'  'age' 모든 키값이 나옴
}

// for (value of iterable)
const array = [1, 2, 4, 5]
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}
//위에 것을 더 쉽게하는 방법은 for ...of 를 사용하는 것이다!

for (value of array) {
  console.log(value)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = { name: 'ellie', age: '20' }
const user2 = user // user2는 user의 ref를 참고하고 있다.
user2.name = 'coder' // 따라서 user2의 이름의 값을 바꾸면, 참고하고 있는 user의 name이 변경되는 것 ! 결과를 보자!
console.log(user) // { name: 'coder', age: '20' }

// 그렇다면 obj를 그대로 clonning하는 방법이 있나요~?
//바로 Object.assign

const user4 = {}
Object.assign(user4, user)
console.log(user4) //{ name: 'coder', age: '20' }
//혹은
const user5 = Object.assign({}, user)
console.log(user5) //{ name: 'coder', age: '20' }
// another example ! (만약 복사하고자 하는 obj가 && value가 다른 property가 있다면?)
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2)
console.log(mixed.color) // blue   위에 assign한 fruit2가 뒤에 있으므로 fruit1의 color를 덮어쓰고 그 value는 없어진다
console.log(mixed.size) //big
