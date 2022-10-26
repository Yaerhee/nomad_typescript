// Polymorphism
interface SStorage<T> { // 아래의 class 에서 온 generic
    [key: string]: T
}

// 로컬 스토리지 구현해보기~
class LocalStorage<T> { // class 의 generic 을 interface로 보낼 수 있음!
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        // API design
        this.storage[key] = value
        // todo: 이미 존재하는 키를 확인한 후 에러 띄우기?
    }
    remove(key: string) {
        delete this.storage[key]
    }
    get(key: string): T {
        return this.storage[key]
    }
    clear() {
        this.storage = {} // making this storage empty
    }
}

const stringsStorage = new LocalStorage<string>() // string 타입의 로컬 스토리지!!
stringsStorage.get('test') // <- 이렇게 하면, 'test' key 를 입력홰서 string 을 받게 되어 있음
stringsStorage.set("hello", "hi")

const booleansStorage = new LocalStorage<boolean>()
booleansStorage.get('string') // <- result type "boolean" !
booleansStorage.set('string2', true) // 오호!
// booleansStorage.set('string3', 'false') // 'false' <- string 이라서 불가능