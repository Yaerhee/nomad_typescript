// Words Dictionary (HashMap)
type Words = { // Object type 설정 시 유용
    [key: string]: string // key 및 value 로 정의하는 form 을 지정함. property 이름은 모르나, 타입만 알 때 썬언
}

class Dictionary {
    private words: Words
    constructor() {
        this.words = {} // 생성자 기본 틀만 직접 정의 (필요할 때 Word 를 정의해서 추가해줄 목적)
    }
    add(word: Word) { // 클래스를 타입으로 쓰는 방식!
        if (this.words[word.term] === undefined) { // 아래의 Word 클래스에 정의되지 않은 단어일 때
            this.words[word.term] = word.def
        }
    }
    def(term: string) { // 단어에 대한 정의를 볼 수 있게 하는 메소드
        return this.words[term]
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {
    }
}

const kimchi = new Word("kimchi", "한국 대표 음식")

const dict = new Dictionary() // 사전으로 쓸 클래스를 호출하고, 위에서 정의한 단어를 아래에 담음
dict.add(kimchi)

// dictionary 에서만 단어를 보게끔 하기
dict.def("kimchi")