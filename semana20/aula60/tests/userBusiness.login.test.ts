import { IdGenerator } from "../src/services/idGenerator";
import { HashGenerator } from "../src/services/hashGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";
import { UserBusiness } from "../src/business/UserBusiness";
import { User, UserRole } from "../src/model/User";

describe("Testing login Business", () => {

    const idGenerator = { generate: jest.fn(() => "bananinha") } as IdGenerator;

    let hashGenerator = {hash: jest.fn(), compareHash: jest.fn()} as HashGenerator;

    let userDatabase = { getUserByEmail: jest.fn((email: string) => undefined) } as any;
    const tokenGenerator = { generate: jest.fn(() => "token"), verify: jest.fn() } as TokenGenerator;

    const userBusiness: UserBusiness =
        new UserBusiness(idGenerator, hashGenerator, userDatabase, tokenGenerator);

    test("Should return Missing input Error when email is empty", async () => {
        expect.assertions(2);
        try {
            await userBusiness.login("", "password");

        } catch (error) {
            expect(error.statusCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Should return Missing input Error when password is empty", async () => {
        expect.assertions(2);
        try {
            await userBusiness.login("joao@email.com", "");

        } catch (error) {
            expect(error.statusCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Should return Invalid Credentials Error when email is invalid", async () => {
        expect.assertions(4);
        try {
            await userBusiness.login("joao@email.com", "password");

        } catch (error) {
            expect(error.statusCode).toBe(401);
            expect(error.message).toEqual("Invalid credentials");
            expect(userDatabase.getUserByEmail).toHaveBeenCalled();
            expect(userDatabase.getUserByEmail).toHaveBeenCalledWith("joao@email.com");
        }

    });

    test("Should return invalid credentials Error when password is incorrect", async () => {
        expect.assertions(4);

        hashGenerator = {
            hash: jest.fn(async () => "senha cripto"),
            compareHash: jest.fn((s:string, hash: string) => false)
        } as any;

        userDatabase = {
            getUserByEmail: jest.fn(async () => new User("123",
                "João", "joao@email.com", "password", UserRole.ADMIN))
        } as any;

        const ub = new UserBusiness(idGenerator, hashGenerator, userDatabase, tokenGenerator);

        try {
            await ub.login("joao@email.com", "password");

        } catch (error) {
            expect(error.statusCode).toBe(401);
            expect(error.message).toEqual("Invalid credentials");
            expect(userDatabase.getUserByEmail).toHaveBeenCalled();
            expect(hashGenerator.compareHash).toHaveReturnedWith(false);
        }

    });

    test("Should return token", async ()=>{
        expect.assertions(5);
        
        userDatabase = {
            getUserByEmail: jest.fn(async () => new User("123",
            "João", "joao@email.com", "password", UserRole.ADMIN))
        } as any;
        
        hashGenerator = {
            hash: jest.fn(async () => "password"),
            compareHash: jest.fn((s:string, hash: string)=>true)
        } as any;

        const ub = new UserBusiness(idGenerator, hashGenerator, userDatabase, tokenGenerator);

        const token = await ub.login("joao@email.com", "password");

        expect(hashGenerator.compareHash).toHaveBeenCalled();
        expect(hashGenerator.compareHash).toHaveReturnedWith(true);
        expect(tokenGenerator.generate).toHaveBeenCalled();
        expect(tokenGenerator.generate).toHaveReturnedWith("token");
        expect(token).toEqual({accessToken: "token"});


    });

});