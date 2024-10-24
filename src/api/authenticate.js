import axios from "axios";
import { backServer } from "../env";


export async function Authenticate(token){
    const url=backServer+'/protected';
    const reponse = await axios.get(url, {
        headers: {
            Authorization:'Bearer '+token
        }
    })
    console.log(reponse.data);
    return reponse.data;
}
