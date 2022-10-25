// normal function
function add(a: number, b: number): number {
    return a + b
}

// arrow function
const addNumber = (a:number, b:number) => a + b

// call signature?
// ex. const add: (a:number, b:number) => number
// 화살표 함수의 결과물을 고려했을 때, 해당 함수를 어떻게 호출해야 할지 알려줌
type Add = (a:number, b:number) => number // 함수의 signature type 을 직접 만들었음!

const addWithCallSignature:Add = (a, b) => a + b // 오, 바로 function 위에 hint 를 얹어줌!
// 함수의 타입 (call signature)을 정의 해주었기 때문에, return 타입을 함부로 재정의 할 수 없음 (오류 출력에 이상적인 코드 설계)