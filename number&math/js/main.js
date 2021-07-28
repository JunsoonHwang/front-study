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

console.log('abs: ', Math.abs(-12))
// abs = absolute = 절대값을 반환함
console.log('min: ', Math.min(2, 8))
console.log('max: ', Math.max(2, 8))
console.log('ceil: ', Math.ceil(3.14))
// ceil = 올림
console.log('floor: ', Math.floor(3.14))
// floor = 내림
console.log('round: ', Math.round(3.5))
// round = 반올림
console.log('random: ', Math.random())
// random = 무작위 난수 반환

console.log(Math.floor(Math.random() * 10))
// floor를 통해 소수점자리를 내림처리하고
// random을 통해 난수를 출력하는데 * 10과 floor를 통해
// 0 ~ 9 사이의 난수를 출력함