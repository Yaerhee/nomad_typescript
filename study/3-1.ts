// overloading
// 직접 사용하기보다는, 라이브러리 등에서 오버로딩 방법을 많이 쓰고 있음 (오버로딩 구경하기)
// 함수가 여러개의 call signatures 를 가지고 있을 때 => 오버로딩 발생!

type Add = {
    (a: number, b: number) : number
    (a: number, b: string) : number
} // ?!

// 아래와 같이, 오버로딩 되어 있는 argument 에서는 type 이 여러개가 가능한 것으로 표시됨 :)
const add: Add = (a, b) => a + b // 이렇게 하면 'number' + 'string|number' 가 되므로 오류가 발생!!

const addTwo: Add = (a, b) => {
    if (typeof b === 'string') return a // 아래와 같은 함수를 적어줘야 오류가 발생하지 않음
    return a + b
}

// 또 다른 예시?
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push:Push = (config) => {
    if (typeof config === 'string') console.log(config) // string path 만 존재
    else {
        console.log(config.path) // Config type 째로 받기 때문에 config.path
    }
}

// 매우 매니 파라미터..?
type AddMany = { // arg. 개수도 다르고, arg Type 도 다르고 !?!?!
    (a:number, b:number): number
    (a:number, b:number, c:number): number
}

const addMany:AddMany = (a, b, c?:number) => {
    // 오버로딩에서는, 인자를 사용하지 않을 경우 해당 타입과 인자를 정의하는 부분에서 optional 하다고 표시해주어야 함 (특이한 부분!)
    if (c) return a + b + c
    return a + b
}

// 이렇게 하면 아래와 같이 함수를 활용할 수 있음
addMany(1, 2)
addMany(1, 2, 3)