import axios from "axios";

interface LoginData{
    email:string;
    password:string;
}
 axios.interceptors.request.use((config)=>{
     const token=localStorage.getItem(LS_LOGIN_TOKEN);
     if(!token){
         return config;
     }
     return {...config , headers:{...config.headers,Authorization :token}};
 });

 axios.interceptors.response.use(undefined,(error)=>{

    if(error.response.data.code===9101){
        localStorage.removeItem(LS_LOGIN_TOKEN);
        window.location.href="/login";
    }
     console.log(error);
     return Promise.reject(error);
 })



const BASE_URL= "https://api-dev.domecompass.com";
export const LS_LOGIN_TOKEN="login_token";

export const logout=()=>{
    localStorage.removeItem(LS_LOGIN_TOKEN);


}

export const login=(data:LoginData)=>{
    const url= BASE_URL+"/login";
    console.log(data);
    return axios.post(url,data).then((response)=>{
    console.log("token:  "+response.data.token);
    console.log(response.data.data)
    localStorage.setItem(LS_LOGIN_TOKEN,response.data.token);
    return response.data.user;
});
}

interface GroupRequest{
    limit?:number;
    offset?:number;
    query?:string;
    status: "all-groups" | "xyz";
}

export const fetchGroups=(data : GroupRequest)=>{
    const url=BASE_URL +"/groups";
    axios.get(url, {params:data })
    .then((response)=>console.log(response.data))
    .catch((e)=>console.log(e));
}