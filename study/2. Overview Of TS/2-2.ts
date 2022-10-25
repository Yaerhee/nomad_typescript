// 2-2. TS Types
let a : number[] = [1, 2]; // cf) number 같은 경우 자연스러운 추론을 유도하는 것이 좋을 수 있음
let b: string[] = ['i1', '1']
let c: boolean[] = [true]

const playerBefore = {
    name: 'nico' // 추론
}
// 추론이 아닌 직접 타입 선언 ?
const player : {
    name : string;
    age?: number; // age is number or undefined!
} = {
    name: 'nico',
}

//if (player.age < 10) { // error: age could be "undefined"
if (player.age && player.age < 10) {

}

// 2-2-2. Type Alias
type Age = number //!?
type Name = string
type Player = {
    name: Name,
    age?: Age // <- 이렇게도 가능 ㅋㅋㅋ
}

// => Type reference!
const playerNico : Player = {
    name: "nico"
}

const playerYaerhee : Player = {
    name: "yaerhee",
    age: 33
}

// 2-2-3. function with Type
function playerMaker(name : string) : Player { // returning Object with string ? X => returns type 'Player'!
    return {
        name
    }
}

// const playerMaker = (name: string) : Player => ({name}) // 위의 함수와 정확히 같은 역할을 하는 함수 (화살표)

const yaerhee = playerMaker('yaerhee')
yaerhee.age = 10