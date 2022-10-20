type ArrayGenerics = <T>(array: T[]) => T

// Generics 두 개, M 은 T 와 맥락을 같이 해야 함
// 이거 푸는데 한참 걸렸네 (...)
type ArrayWithNewItem = <T, M extends T>(arr: T[], item: M) => T[]

const last: ArrayGenerics = arr => arr[arr.length-1]
const pretend: ArrayWithNewItem = (arr, item) => {
    arr.unshift(item)
    return arr
}