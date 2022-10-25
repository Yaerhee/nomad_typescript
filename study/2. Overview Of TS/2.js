// 2-1. Implicit Types vs. Explicit Types (함축 !== 명시)


//2-1-1. Variable Types
let a = "hello"
// let b: boolean = false // type 명시적 정의

let c = [1, 2, 3]
// let c: number[] = [] (TS)
c.push('1') // JS -> possible vs. TS (X)

const player = { // TS 에서는 name 을 통해 string 타입인 것을 추론함
    name : "nico" // 기존에 정의해 봤던 Object
}
player.hello() // TS -> impossible!