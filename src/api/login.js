import axios from "axios";
import { backServer } from "../env";


export async function LoginApi(data){
    const url=backServer+'/login';
    const reponse = await axios.post(url, data)
    console.log(reponse.data);
    return reponse.data;
}
