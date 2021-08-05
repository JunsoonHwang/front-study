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


// 3. Array(배열)


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

// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

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

// const a = fruits.forEach((fruit, i) => {
//   // 인수가 하나면 ()도 생략가능
//   console.log(`${fruit}-${i}`)
// })

// const b = fruits.map((fruit, i) => ({
//   id: i,
//   name: fruit
// }))
// // {}데이터 화살표함수로 사용하려면 ({}) 이럴게 
// // 소괄호로 감싸줘야함
//   console.log(b)


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => number < 3)

// console.log(a)

// const b = numbers.filter(number => number < 3)
//   // 인자로 사용한 콜백함수의 조건이 true인 데이터만
//   // 반환함

// console.log(b)


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.find(fruit => /^B/.test(fruit))
// // find /^B/.test = B로 시작하는 아이템을 찾아서 반환
// console.log(a)

// const b = fruits.findIndex(fruit => /^B/.test(fruit))
// // findIndex /^B/.test = B로 시작하는 아이템의 인덱스값
// // 반환
// console.log(b)


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.includes(3)
// // includes = 인수가 배열안에 들어있는지 없는지 확인
// console.log(a)

// const b = numbers.includes('junear')
// console.log(b)


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.push(5)
// // 배열의 마지막에 입력한 인수 추가
// console.log(numbers)

// numbers.unshift(0)
// // 배열의 맨 앞에 입력한 인수 추가
// console.log(numbers)


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.reverse()
// fruits.reverse()
// // 해당 배열 순서를 뒤집음

// console.log(numbers)
// console.log(fruits)


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.splice(2, 1)
// // splice = (인덱스 값 기준, 몇개를 지우고, 
// // 새로운 것을 추가한다)
// console.log(numbers)

// fruits.splice(2, 0, 'Orange')
// console.log(fruits)


// 4. Object(객체)


// const userAge = {
//   name: 'Junear',
//   age: 29
// }
// const userEmail = {
//   name: 'Junear',
//   email: 'wnstns13@naver.com'
// }

// const target = Object.assign({}, userAge)
// // Object는 정적데이터(static)임으로 
// // 반드시 Object.assign(타겟, 복사할 소스)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const a = { k: 123 }
// const b = { k: 123 }
// console.log(a === b)
// 내용만 같다고 같은게 아니라 데이터가 할당되는 방향이
// 같아야 같은 것


// const user = {
//   name: 'Junear',
//   age: 29,
//   email: 'wnstns13@naver.com'
//   // key: value
// }

// const keys = Object.keys(user)
// // keys = 인수로 받은 데이터의 key를 배열 데이터로 반환
// console.log(keys)

// console.log(user['email'])
// // 객체 데이터는 ['이름'] 인덱싱을 사용하여 원하는 값을
// // 확인 할 수 있음

// const values = keys.map(key => user[key])
// // keys는 배열 데이터임으로 map을 통해 콜백함수를
// // 반복적으로 실행 할 수 있고 콜백 함수의 리턴 값으로
// // user[key]를 사용해 위에 예시처럼 인덱싱을 통해
// // 객체데이터의 값을 불러올수 있음
// console.log(values)


// 5. 구조 분해 할당(비구조화 할당)

// const user = {
//   name: 'Junear',
//   age: 29,
//   email: 'wnstns13@naver.com'
// }

// const { name, age, email, address } = user
// // user 라는 객체 데이터에서 구조 분해 할당을 통해 
// // 내가 원하는 속성들만 꺼내서 사용할 수 있는 개념

// console.log(`사용자의 이름은 ${name} 입니다.`)
// console.log(`${name}의 나이는 ${age}세 입니다.`)
// console.log(`${name}의 이메일 주소는 ${email}입니다.`)
// console.log(address)
// // 데이터 보관처리를 통해 데이터를 사용

// const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
// // 객체는 객체, 배열은 배열로 할당해야함
// // 4번째 아이템은 없기 때문에 d = undefined
// console.log(a, b, c, d)


// 6. 전개 연산자


// const friuts = ['Apple', 'Banana', 'Cherry']
// console.log(friuts)
// console.log(...friuts)
// // 배열 데이터를 쉼표로 구분하는 하나의 아이템으로 
// // 전개해줌

// function toOb(a, b, c) {
//   return {
//     a,
//     // a(속성): a(매개변수)가 같으면 a 하나로 축약가능
//     // a: a 는 a와 같다
//     b: b,
//     c: c
//   }
// }
// console.log(toOb(...friuts))
// 만약 전개연산자를 사용하지 않고 같은 값을 내려면
// console.log(toOb(friuts[0], friuts[1], friuts[2]))
// 쉼표로 하나씩 인덱싱 해주어야함
// 화살표 함수로 변경시
// const toObject = (a, b, c) => ({a, b, c})
// console.log(toObject(...friuts))


// 7. 데이터 불변성

// 원시 데이터: String, Number, Boolean, undefined, Null
// -----------------------------------------------
// | 1.    1     | 2.    4     | 3.   7     | 4.
// -----------------------------------------------

// let a = 1
// let b = 4
// // a = 1번 메모리에 데이터를 저장하고 바라봄
// // b = 2번 메모리에 데이터를 저장하고 바라봄
// console.log(a, b, a === b)
// // 값이 달라서 false인 것도 맞는데
// // 바라보는 메모리 주소가 다르기 때문
// b = a
// console.log(a, b, a === b)
// // 2번 메모리의 값이 1로 바뀐게 아니라
// // b가 바라보는 방향이 a로 바뀐 것
// a = 7
// console.log(a, b, a === b)
// // 이것도 역시 1번 메모리 값이 7로 바뀐게 아니라
// // 1번 메모리 값은 그대로 있고 
// // 3번 메모리에 7이라는 값이 할당되고
// // 3번 메모리를 바라봄
// let c = 1
// console.log(b, c, b === c)
// 이 경우도 4번 메모리에 1이 지정되는 것이 아니라
// 1이라는 데이터를 가지고 있는 1번 메모리를 찾아서
// 바라보는 방식

// 원시 데이터의 경우 데이터 불변성때문에 간단하게 
// 생긴게 다르면 다른 데이터라고 봐도 무방


// 참조형 데이터: Object, Array, Function
// -----------------------------------------------
// | 1. {      } | 2. {      } | 3. {      } | 4.
// -----------------------------------------------

let a = { k: 1 }
let b = { k: 1 }

console.log(a, b, a === b)
// 원시 데이터와 달리 값이 같아도 바라보는 메모리가
// 다르게 때문에 flase
a.k = 7
// 원시 데이터와 달리 3번 메모리에 7을 할당 하는게 아니라
// 1번 메모리의 값을 k: 7로 변경함
b = a
// 2번 메모리에서 1번 메모리로 바라보는 방향이 바뀜
console.log(a, b, a === b)
a.k = 2
console.log(a, b, a === b)
// 이 부분이 조심해야 할 부분인데
// a의 값만 k: 2로 바꾸려 했는데
// 결과를 보면 같은 주소값을 바라보고 있던 b의 값도
// 의도치 않게 변해버린다
let c = b
console.log(a, b, c, a === c)
// c라는 변수에 b를 할당함으로 c도 b와 같은 메모리를
// 바라보게됌
a.k = 9
console.log(a, b, c, a === c)
