'use strict'

// Object-oriented programming
// class : template
// 클래스가 도입되기전에는 오브젝트를 바로 만들었고 function을 통해 template을 만들었다.

// 1. Class declarations

class Person {
  //constuctor
  constructor(name, age) {
    //fields
    this.name = name
    this.age = age
  }

  //methods
  speak() {
    console.log(`${this.name}:hello`)
  }
}

const ellie = new Person('ellie', 20)
console.log(ellie.name) // ellie
console.log(ellie.age) //20
ellie.speak() // ellie:hello

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
}

const user1 = new User('Steve', 'Job', -1) // age는 -1이 되어서는 안된다.
console.log(user1.age)

// 이를 방지하기 위해서 && 방어적으로 대처하기 위해 ! 우리는 getter와 setter를 사용한다.

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  // get을 통해서 값을 return하고
  get age() {
    return this.age
  }

  //set을 통해서 값을 설정할 수 있다
  //설정하기 위해 value를 받아와야 한다
  //새로운 value를 받으면 아래와 같이 value를 설정!
  set age(value) {
    this.age = value
  }
}

const user1 = new User('Steve', 'Job', -1)
// 그리고 이렇게 함수에 age를 호출하는 순간! constructor안에 this.age는 getter에서 this.age를 받아오고
// this.age " = age "  <- = age 라는 부분에서 값을 할당하기 위해서 메모리에 있는 값을 바로 할당하는게 아니라, setter를 호출하게 된다.
// 그리고 setter안에서도 계속 그 안에서 호출하게 되므로 maximum call stack size exceeded 라는 경고창이 콘솔에 뜨게 되는 것이다.
// 이를 방지하게 위해서 getter와 setter안에 변수를 조금 다르게 해야한다. (아래 참조!)
console.log(user1.age)
constructor

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  get age() {
    return this._age
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative!')
    // }
    // 위에처럼 할 수 있지만, 유연하게 대처하고자 한다면 하단과 같이 하면 된다.
    this._age = value < 0 ? 0 : value
  }
}

const user1 = new User('Steve', 'Job', -1)
console.log(user1.age) // 0으로 나오게 된다! (70번째 줄 참조!)

// 3. Fields
// 최근 나왔기 때문에 사파리에서도 지원되지 않음. but! good to know, of course :)

class Experiment {
  publicField = 2
  #privateField = 0 // 안에서는 보이지만 밖에서는 보이지 않음
}

const experiment = new Experiment()
console.log(experiment.publicField) // 2
console.log(experiment.privateRield) //undefined

// 4. Static propoerties and methods
//Too soon

class Article {
  static publisher = 'dream coding'
  constructor(articleNumber) {
    this.articleNumber = articleNumber
  }
  static printPublisher() {
    console.log(Article.publisher)
  }
}

const article1 = new Article(1)
const article2 = new Article(2)
console.log(article1.publisher) // undefined :
// 왜냐하면 static은 obj마다 할당된것이 아니라, class 자체인 Article 자체에 연결되어있으므로!
console.log(Article.publisher)
Article.printPublisher()

// 5. Inheritance
// a way for one class to extend another class

class Shape {
  constructor(width, height, color) {
    this.width = width
    this.height = height
    this.color = color
  }
  // 메소드
  draw() {
    console.log(`drawing ${this.color} color of`)
  }
  getArea() {
    return this.width * this.height
  }
}

class Rectangle extends Shape {} // 이렇게 함으로써 shape에 있는 모든 것들이 Rectangle에서 쓸 수 있게 된다

const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw() // drawing blue color of
console.log(rectangle.getArea()) // 400

// 그리고 만약 여기에서 triangle의 넓이 (height * width * 1/2)를 Shape을 활용하는 방안에서 재사용 하려면,
// 하단과 같이 그 내용을 overwrite 하면 된다.

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2
  }
}

const triangle = new Triangle(20, 20, 'red')
triangle.draw()
console.log(triangle.getArea()) // 20 (Shapedml getArea를 overwrite 함)

//만약 overwrite하고, 동시에 원래 내용도 보여주고 싶다면?
// 그럴땐 super.getArea를 써주면 된다

class Triangle extends Shape {
  getArea() {
    super.getArea()(this.width * this.height) / 2
  }
}

// 6. class checking : instanceOf
// 왼쪽에 obj 가 오른쪽의 class에 의해 만들어 졌는지 확인

console.log(rectangle instanceof Rectangle) // t
console.log(triangle instanceof Rectangle) // f
console.log(triangle instanceof Triangle) // t
console.log(triangle instanceof Shape) // t
console.log(triangle instanceof Object) // t -> js의 모든 obj는 Object에서 상속한 것!
