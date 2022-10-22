type ArrayGenerics = <T>(array: T[]) => T

// Generics 두 개, M 은 T 와 맥락을 같이 해야 함
// 이거 푸는데 한참 걸렸네 (...)
type ArrayWithNewItem = <T, M extends T>(arr: T[], item: M) => T[]

const last: ArrayGenerics = arr => arr[arr.length-1]
const prepend: ArrayWithNewItem = (arr, item) => {
    arr.unshift(item)
    return arr
}

// re-try
type ArrayWithItem = <T>(arr: T[], item: T) => T[]
const prepend2: ArrayWithItem = (arr, item) => [item, ...arr] // spread operator!!
const arr = [1, 2, 3, 4]
const newItems = prepend2(arr, 0)
console.log(newItems)