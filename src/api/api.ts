import axios, {AxiosResponse} from "axios";

interface ICounterResponse {
    value: number;
    maxValue: number;
    delta: number;
}

const instance = axios.create({
    baseURL: "http://localhost:3000"
});

const api = {
    counter: {
        async getValue(): Promise<number> {
            let res = await instance.get<ICounterResponse>("/counter")
                return res.data.value;
        },
        changeValue(newValue: number): Promise<number> {
            return instance.patch("/counter", {value: newValue})
                .then((res: AxiosResponse<ICounterResponse>) => res.data.value);
        }
    }
};

export default api;