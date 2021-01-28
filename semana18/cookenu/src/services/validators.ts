export const verifyString = (strObj: any): void => {
    for (let str in strObj) {

        if (typeof strObj[str] !== "string") {
            throw new Error(`${str} is of the wrong type: ${typeof strObj[str]} instead of string.`)
        } else if (strObj[str] === "") {
            throw new Error(`The required field "${str}" is empty.`)
        }
    }
}


export const verifyNumber = (id: any): void => {
    if (isNaN(Number(id))) {
        throw new Error(`ID is invalid: must be a number.`)
    }
}


export const verifyBodyKeys = (reqObj: any, validKeys: string[]): void => {

    if (Object.keys(reqObj).length < validKeys.length) {
        throw new Error(`Missing key(s) in requisition. Valid keys are: ${validKeys.join(", ")}.`)
    } else if (Object.keys(reqObj).length > validKeys.length) {
        throw new Error(`Found extra key(s) in requisition. Valid keys are: ${validKeys.join(", ")}.`)
    }

    for (let key in reqObj) {
        if (!validKeys.includes(key)) {
            throw new Error(`Invalid key in requisition. Valid keys are: ${validKeys.join(", ")}.`)
        }

        if (!reqObj[key]) {
            throw new Error(`Empty value in the required field: "${key}".`)
        }
    }
}


export const verifyLength = (key: string, keyName: string, reqLength: number) => {
    if (key.length < reqLength) {
        throw new Error(`${keyName} has insufficient length. Mininum length is ${reqLength}.`)
    }
}


export const verifyEmail = (email: string) => {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const isEmail = emailRegExp.test(email)
    
    if (!isEmail) {
        throw new Error("Invalid email.")
    }
}