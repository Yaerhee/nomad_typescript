// js => ok vs. ts => error
// js 는 오류가 발생하더라도 함수를 먼저 실행해보지만, ts 는 컴파일 과정에서 논리적인 오류를 확인하는 과정을 거침
const nico = {
    nickname: 'nick'
}

nico.hello() // TS2339: Property 'hello' does not exist on type '{ nickname: string; }'.

const testArray = [1, 2, 3, 4] + false // TS2365: Operator '+' cannot be applied to types 'number[]' and 'boolean'.


function divide(a, b) {
    return a / b
}

divide("hello")
// Expected 2 arguments, but got 1.
// An argument for 'b' was not provided.


const player = {
    age: 12
}

player.age = false //TS2322: Type 'boolean' is not assignable to type 'number'.