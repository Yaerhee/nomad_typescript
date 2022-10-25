// type unknown
let a: unknown
// let b = a + 1 // unknown? no! then?

if (typeof a === 'number') {
    let b = a + 1 // 이렇게는 가능! 어떤 타입인지 체크가 완료 되었기 때문
}

if (typeof a === 'string') {
    let b = a.toUpperCase()
}

// type void
const hello = () => { // function hello(): void
   // 타입을 굳이 지정해주지 않아도, return 하는 값이 없으면 void 로 인식됨
}

// const a = hello()
// a.toUpperCase() // not impossible due to void function

// type never
// 오류가 발생할 때의 type, Error 를 타입 정의할 때 or 발생해서는 안 되는 예외 정의
const hi = ():never => { // error가 발생할 때에 정의
    throw new Error('test')
}

const hihi = (name: string|number) => {
    if (typeof name === 'string') {
        name // string?
    } else if (typeof name === 'number') {
        name // number?
    } else {
        name // never! <- 정상적인 경우에서는 실행되지 않아야 하는 타입
    }
}