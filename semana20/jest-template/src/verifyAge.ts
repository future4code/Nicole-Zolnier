export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}
  
export enum NATIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}
  
export interface User {
    name: string;
    age: number;
    nationality: NATIONALITY;
}
  
export interface Casino {
    name: string;
    location: LOCATION;
}

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
  
export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

export const verifyAge = (casino:Casino, users:User[]):Result => {
    const allowedBr:string[] = []
    const unallowedBr:string[] = []
    const allowedUs:string[] = []
    const unallowedUs:string[] = []

    if (casino.location === LOCATION.BRAZIL) {
        users.forEach(user => {
            if (user.nationality === NATIONALITY.BRAZILIAN) {
                if(user.age >= 18){
                    allowedBr.push(user.name)
                } else {
                    unallowedBr.push(user.name)
                }
            } else if (user.nationality === NATIONALITY.AMERICAN) {
                if(user.age >= 18){
                    allowedUs.push(user.name)
                } else {
                    unallowedUs.push(user.name)
                }
            }
        })
    }

    if (casino.location === LOCATION.EUA) {
        users.forEach(user => {
            if (user.nationality === NATIONALITY.BRAZILIAN) {
                if(user.age >= 21){
                    allowedBr.push(user.name)
                } else {
                    unallowedBr.push(user.name)
                }
            } else if (user.nationality === NATIONALITY.AMERICAN) {
                if(user.age >= 21){
                    allowedUs.push(user.name)
                } else {
                    unallowedUs.push(user.name)
                }
            }
        })
    }

    return {
        brazilians: {
            allowed: allowedBr,
            unallowed: unallowedBr
        },
        americans: {
            allowed: allowedUs,
            unallowed: unallowedUs
        }
    }
}