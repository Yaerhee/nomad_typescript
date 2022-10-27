// @ts-check // <- 자바스크립트를 사용할 경우, TS 분석을 하도록 적용할 수 있음
// && JSDoc 을 통해 커스터마이징 할 함수에 대한 주석을 적어줄 수 있음

/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 * */
export function init(config) {
    return true
}

/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 * */
export function exit(code) {
    return code + 1
}

// -> @ts-check && JSDoc 으로 JS 를 TS & comment 처럼 쓸 수 있게 되었음 :)