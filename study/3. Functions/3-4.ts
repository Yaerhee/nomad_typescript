// 다른 방식으로 Generic 이 들어간 function 선언해 보기
function superPrint<V>(a: V[]) {
    return a[0]
} // ok!

// const a = superPrint<boolean>([1, 2, 3, 4]) // overwriting type(s) ? NO!!!
const b = superPrint([true, false, true, true])
const c = superPrint(['a', 'b', 'c'])

// 다른 제네릭 활용 방식
type Player<E> = {
    name: string
    extraInfo: E // 1. 와일드 카드(라고 생각하고) 제네릭 선언
}

type YaerheePlayer = Player<{favFood: string}> // 2. 이렇게 타입을 선언해 준 후...

// 3. 원래 Player<> 내부에 제네릭을 직접 적었던 부분을....
// const yaerhee: Player<{favFood: string}> = {
const yaerhee: YaerheePlayer = { // 4. 이런 식으로 그대로 대체할 수 있음!
    name: 'yaerhee',
    extraInfo: {
        favFood: 'kimchi'
    }
}

// 5. 이렇게 바꿔넣어도 되지
type YaerheeOther = {
    favFood: string
}
// 6. 이렇게 Object 도 넣어서 타입을 선언해도 좋음
type YaerheeOtherPlayer = Player<YaerheeOther>

// + extraInfo 가 없을 경우? 이렇게 Null 을 Generic 에 채워 넣으면 됨 :)
const NoInfo: Player<null> = {
    name: 'jeongyun',
    extraInfo: null
}

// 이렇게도 제네릭이고
type A = Array<number>
let a:A = [1, 2]

// 이렇게도 제네릭임
function printAllNumbers(arr: Array<number>) {}

// useState<number>(() => 1) <- 헐 이것도 제네릭이였음 ㅎㅎ