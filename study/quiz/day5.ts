// mission1: Hash Map 타입 설계
// mission2: Hash Map Word Dictionary 설계 & 사전 CRUD 메소드 설계
// mission3: Dictionary 출력, Dictionary length 출력
type Words = { // Hash Map structure
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            // searching for defined word -> if there is not
            this.words[word.term] = word.def
        }
    }
    get(term: string) {
        return this.words[term]
    }
    delete(term: string) {
        if (this.words[term] !== undefined) {
            // if there is a defined word
            delete this.words[term]
        }
    }
    update(term: string, def: string) {
        if (this.words[term] !== undefined) {
            this.words[term] = def
        }
    }
    showAll() {
        return this.words;
    }
    count() {
        return Object.values(this.words).length
    }
}

class Word {
    constructor(
        public readonly term: string, // 10/23 refactor - 읽기만 가능
        public def: string
    ) {}
    static test() { // static method (JS 로도 표시됨)
        return 'test'
    }
}

const dict = new Dict()
const kimchi = new Word('kimchi', 'JMT')
const rice = new Word('rice', '고시히카리 짱')
const donkatsu = new Word('donkatsu', '콜레스테롤 짱')
dict.add(kimchi)
dict.add(rice)
dict.add(donkatsu)
dict.update('kimchi', '볶음밥 짱')
console.log(dict.get('rice'))
console.log(dict.showAll())
console.log(dict.count())
dict.delete('rice')
console.log(dict.showAll())
console.log(dict.count())