// Polymorphism (다형성)
// call signature
type SuperPrint = {
    (arr: number[]): void
    (arr: boolean[]): void // 함수 오버로딩
    (arr: string[]): void
}

const superPrint: SuperPrint = arr => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true, true])
superPrint(['a', 'b', 'c']) // string 오버로딩 call signatures 가 없어서 error

// => 상단의 arr 정의 type 은 사실 concrete type 이 아님 (string, number, boolean, unknown ... )
// 그럼 만약 superPrint([1, 2, true, false]) 라고 정의하고 싶다면??
// (arr: (number|boolean)[]):void...?!

// => Generic 을 활용하자! (일종의 type placeholder 와 같음)
// 1. Generic 을 사용할 것이라고 알리기
type SuperSuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): void // 이렇게 제네릭에 붙여서 해당 타입으로 구성되는 array 를 인자로 정의함
}

const superSuperPrint: SuperSuperPrint = arr =>
    // {arr.forEach(i => console.log(i))}
    arr[0]

const a = superSuperPrint([1, 2, 3, 4]) // arr: number[]
const b = superSuperPrint([true, false, true, true]) // arr: boolean[]
const c = superSuperPrint(['a', 'b', 'c']) // arr: (number | boolean)[]
// arr 를 확인하여 TS 가 해당 타입이 적용되어 있음을 파악하고 적용해 줌!

// return Type 바꾸기?
// 28 Line 처럼 변경할 경우, 하단의 const 변수에 arr[0] 에 해당하는 타입이 자동으로 적용됨!
