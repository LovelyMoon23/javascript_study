// async & await
// clear style of using promise :)

// 1. async
// js에서 비동기 처리를 안해줄 경우! 동기적으로 처리된다고 가정하고 순서를 살펴보자!

function fetchUser() {
  // 동기적 처리 2번
  // 데이터를 받는데 10초정도 걸린다고 가정하자!
  return 'ellie'
}

const user = fetchUser() // 동기적 처리 1번
console.log(user) // 동기적 처리 3번
// 가장 큰 문제점은 동기적 처리를 하는 동안 만약 웹페이지에서 그려야 할 UI가 있다면, 위의 부분이 끝나기 전까지는 UI가 그려지지 않아서
// user들이 빈페이지를 10초 이상 봐야한다는 것 이다.

// then!
// 부분적으로 비동기적으로 만들어보자.
// 1) Promise
function fetchUser() {
  return new Promise((resolve, reject) => {
    //resolve와 reject라는 각각의 콜백함수를 받는 executor라는 콜백함수를 만든다
    // propmise 안에는 resolve나 reject를 꼭 리턴해줘야 한다.
    // 데이터를 받는데 10초정도 걸린다고 가정하자!
    return 'ellie'
  })
}

const user = fetchUser()
user.then(console.log)
console.log(user)

//하지만! 다소 복잡한 propmise의 방식 말고, function 앞에 async만 하나 붙여주면 코드블록이 자동으로 promise로 바뀌는 것!
// 1. async 사용법

async function fetchUser() {
  // 데이터를 받는데 10초정도 걸린다고 가정하자!
  return 'ellie'
}

const user = fetchUser()
user.then(console.log)
console.log(user)

// 2. await
// await 은 async가 붙은 함수에서만 사용할 수 있다.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
} // ms가 지나면 resolve를 호출하는 promise를 return하게 된다

async function getApple() {
  // 사과를 만드는 promise
  await delay(3000) //이 delay가 끝날때 까지 기다려 준다
  return '🍎'
}

async function getBanana() {
  await delay(3000)
  return '🍌'
}

// 🌟  위에 async와 비교!
function getBanana() {
  return delay(3000).then(() => '🍌')
} // 이렇게 만드는 것 보단 위에 async를 사용하는 편이 '동기적인 코드를 쓰는 것처럼 ' 보여서 훨씬 코드를 이해하기 쉬워진다.

// 🌟  async 와 promise 버전 비교!
// 콜 백 지 옥 을 만들어낸 promise
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${banana} + ${apple}`)
  })
}
pickFruits().then(console.log)

// async 를 사용해보자!
async function pickFruits() {
  const apple = await getApple()
  const banana = await getBanana()
  return `${banana} + ${apple}`
}
pickFruits().then(console.log)

// 만약 error가 발생한다면? error 처리해보기!
async function getApple() {
  // 사과를 만드는 promise
  await delay(3000) //이 delay가 끝날때 까지 기다려 준다
  throw 'error'
  return '🍎'
}
//기존에 error 핸들링 하던 것 처럼, try 와 catch를 써주면 된다!
async function pickFruits() {
  try {
    const apple = await getApple()
    const banana = await getBanana()
    return `${banana} + ${apple}`
  } catch (err) {
    throw err
  }
}
pickFruits().then(console.log)
// 그런데 여기에서 문제점이 있다! 사과를 받아오는 것과 바나나를 받아오는 것은 둘다 1초인데
// 위에 처럼 진행할 경우, 사과 받는것? 1초 기다려! 그리고, 바나나 받는것? 1초 기다려! 해서 비효율 적이다.
// 서로 연관이 되어있지 않으므로 서로 기다릴 필요가 없다!
// 이럴 때 쓸 수 있는 promise.all 이라는 API를 사용하면 된다 :)
// 하단에서 살펴보자!

// 3.useful Promise APIs

async function getPear() {
  // 사과를 만드는 promise
  await delay(1000) //이 delay가 끝날때 까지 기다려 준다
  throw 'error'
  return '🍐'
}

async function getStrawberry() {
  // 사과를 만드는 promise
  await delay(2000) //이 delay가 끝날때 까지 기다려 준다
  throw 'error'
  return '🍓'
}
// 1) Promise.all
function pickAllFruits() {
  return Promise.all([getPear(), getStrawberry()]).then((fruits) =>
    fruits.join('+')
  )
}
pickAllFruits().then(console.log) // 🍐 + 🍓

// 2) Promise.race // 먼저 처리된것만 보여주는 것!
function pickOnlyOne() {
  return Promise.race([getPear(), getStrawberry()])
}

pickOnlyOne().then(console.log) // 🍐   -> 1초 걸리므로!

// 숙제! 하단을 asyn를 사용해보기!
// const userStorage = new userStorage()
// const id = propmt('enter your id')
// const password = propmt('enter your password')
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then((user) => alert(`Hello ${user.name}`))
//     .catch(console.log)

// async function checkUser() {
//     try {
//         const userId = await userStorate.loginUser(id, password)
//         const user = await userStorage.getRoles(userId)
// alert (`Hello ${user.name}`)
//     } catch (error) {
//         console.log(error)
//     }
// }
// checkUser();
