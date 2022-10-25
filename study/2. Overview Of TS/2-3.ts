// apply read-only types
// JS => read only (XXXX)
type Age = number
type Name = string
type Player = {
    readonly name: Name
    age?: Age // number | undefined
}

const playerMaker = (name:string): Player => ({name})
const yaerhee = playerMaker('yaerhee')
yaerhee.age = 10
// yaerhee.name = 'asdjfadf' // not impossible (name is read-only)

// Array Type 에도 역시 가능!
const numbers : readonly number[] = [1, 2, 3, 4]
// numbers.push(3) // also read-only
const names : readonly string[] = ['1', '2']
// names.push('yaerhee') // X

// Tuple - array (minimum length & specific space & specific type)
// todo: important!!
// const test: [string, number, boolean] = [] // 우측이 공백일 경우, 타입 세 개에 해당하는 데이터가 없다는 오류 출력
const yaerheeProfile: readonly [string, number, boolean] = ['yaerhee', 20, false]
// yaerheeProfile[0] = 1 // impossible (not number)
// yaerheeProfile[0] = 'hi' // read-only (JS -> X!!!!)

// other types? - undefined / null
let a: undefined = undefined
let b: null = null

// "any" ?
let c = [] // let c: any[]  <- 사용을 권장하지 않음 (되도록이면!)

// "any" 를 권장하지 않는 이유 ?
const newArray: any[] = [1, 2, 3, 4]
const other: any = true
newArray + other // 이게 왜 괜찮은거지....?! => any 가 없으면 당연히 안 되는게 맞음! (단, 경우에 따라 any 가 필요할 수는 있음)
