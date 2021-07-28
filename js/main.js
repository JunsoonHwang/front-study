// 1.string


// const result = 'Hello world!'.indexOf('world')
// console.log(result)

// const { indexOf } = require("lodash")

// const str = '0123'
// console.log(str.length) // str을 '0123'으로 대체가능

// const str = 'Hello world!'
// console.log(str.indexOf('world') !== -1)

// const str = 'Hello world!'
// console.log(str.slice(6, 11)) 
// // slice(시작 지점, 11번째 문장의 직전까지) 잘라서 출력

// const str = 'Hello world!'
// console.log(str.replace(' world!', ''))
// // replace(문장 선택, 대체할 문장)

// const str = 'wnstns13@naver.com'
// console.log(str.match(/.+(?=@)/) [0])
// // (/.+(?=@)/) = 정규표현식 @ 앞에 0번째로 시작하는
// // 문장을 최대한 많이 사용하겠다

// const str = '    Hello world!  '
// console.log(str.trim())
// trim = 해당 부분에 공백문자를 제거하고 출력하겠다
// 사용자 로그인시 실수로 띄어쓰기를 한 부분을 
//  제거하고 입력 받겠다



// 2.Number&Math


// const pi = 3.141592653
// console.log(pi)

// const str = pi.toFixed(2) 
// // toFixed = 소수점의 몇번째 자리까지 유지 할 것인지
// console.log(str)
// console.log(typeof str)

// const integer = parseInt(str)
// // parseInt = 문자데이터에 들어있는 숫자를 분석해서
// // 정수로 반환해줌
// const float = parseFloat(str)
// // parseFloat = 문자데이터에 들어있는 숫자를 분석해서
// // 실수로 반환해줌
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)

// console.log('abs: ', Math.abs(-12))
// // abs = absolute = 절대값을 반환함
// console.log('min: ', Math.min(2, 8))
// console.log('max: ', Math.max(2, 8))
// console.log('ceil: ', Math.ceil(3.14))
// // ceil = 올림
// console.log('floor: ', Math.floor(3.14))
// // floor = 내림
// console.log('round: ', Math.round(3.5))
// // round = 반올림
// console.log('random: ', Math.random())
// // random = 무작위 난수 반환

// console.log(Math.floor(Math.random() * 10))
// floor를 통해 소수점자리를 내림처리하고
// random을 통해 난수를 출력하는데 * 10과 floor를 통해
// 0 ~ 9 사이의 난수를 출력함


// 3. 배열


// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(number[1])
// console.log(fruits[2])
// 배열 데이터는 기본적으로 제로 베이스트 넘버
// [n] = index = n번째 위치를 나타내는 숫자
// [1, 2, 3] = 1,2,3 각각을 엘리먼트 or 아이템이라고 지칭

// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']


// console.log(number.length)
// console.log(fruits.length)
// console.log([1, 2].length)
// console.log([].length)


// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(number.concat(fruits))
// // concat = 배열 number에 fruits를 원본 손상없이 병합
// console.log(number)
// console.log(fruits)


// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// fruits.forEach(function (element, index, array) {
//   console.log(element, index, array)
// })
// forEach = fruits 라는 배열데이터의 개수 만큼
// 인수로 사용된 콜백함수가 순서대로 반복적으로 사용됌
// 인수 element = item = fruit(단수) 다 사용 가능
// 인수 index = i로 사용가능
// 인수 array = 보통 잘 사용하지 않음


// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.forEach(function (fruit, i) {
//   console.log(`${fruit}-${i}`)
//   // `${}` = 보관
// })

// console.log(a)
// forEach = 반환되는 값이 없음 = undefined

const number = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// const b = fruits.map(function (fruit, i) {
//   return `${fruit}-${i}`
// })

// console.log(b)
// map = forEach와 다르게 인수로 사용된 콜백의 내부에서
// 반환하는 하나의 데이터를 가지고 그 데이터들을 모아놓은
// 새로운 하나의 배열을 반환함

// const b = fruits.map(function (fruit, i) {
//     return {
//       id: i,
//       name: fruit
//     }
//   })
// // 객체데이터로 return 가능
//   console.log(b)

// 위 함수 화살표 함수로 변경

const a = fruits.forEach((fruit, i) => {
  // 인수가 하나면 ()도 생략가능
  console.log(`${fruit}-${i}`)
})

const b = fruits.map((fruit, i) => ({
  id: i,
  name: fruit
}))
// {}데이터 화살표함수로 사용하려면 ({}) 이럴게 
// 소괄호로 감싸줘야함
  console.log(b)