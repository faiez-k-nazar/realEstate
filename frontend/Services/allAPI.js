import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl"

export const registerAPI = async(reqbody)=>{
    await commonAPI('post',`${serverUrl}/api/register`,reqbody,"")
}