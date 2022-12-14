import axios from "axios";
import { server } from "../store"


export const contactUser = (  name, email, message ) =>  async (dispatch) =>{
    try {
        dispatch({
            type: "contactRequest",
        });
        const { data } = await axios.post(`${server}/contact`, { name, email, message}, {
            header: {
                "content-type": "application/json"
            },
            withCredentials: true,
        });
        dispatch({
            type: "contactSuccess",
            payload: data?.message,
        })

    } catch (error) {
        console.log(error.response?.data?.message);
        dispatch({
            type: "contactFailure",
            payload: error.response?.data?.message,
        });
    }

} 