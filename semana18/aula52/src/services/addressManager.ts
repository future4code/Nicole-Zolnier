import axios from "axios";
import { Address } from "../types";

const URL = "https://viacep.com.br/ws";

export async function getAddressByCep(cep: string): Promise<Address> {
    try {

        const result = await axios.get(`${URL}/${cep}/json`);
        console.log(result);
        const myAddress: Address = {
            street: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return myAddress;
    } catch (error) {
        throw new Error(error.message);
    }
}