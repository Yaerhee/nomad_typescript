// Generic 으로 type & function 다시 작성해 보기
type SuperPrint = <T>(array: T[]) => T

const superPrint: SuperPrint = a => a[0]

const a = superPrint([1, 2, 3, 4]) // number
const b = superPrint([true, false, true, true]) // boolean
const c = superPrint(['a', 'b', 'c']) // string
const d = superPrint([1, 2, true, false, 'hi']) // !!?
// d.toUpperCase() <- error! Type 불일치 오류를 방지해줌
// => 제네릭을 통해 유연하게, 요구하는 대로의 call signature 가 만들어 지도록 할 수 있음 :)

// DOUBLE GENERICS?
type GreatPrint = <T,M>(a: T[], b:M) => T

const greatPrint: GreatPrint = a => a[0]

const e = greatPrint([1, 2, 3, 4], 'test')
const f = greatPrint([1, 2, true, false, 'hi'], [])