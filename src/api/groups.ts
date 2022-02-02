import axios from "axios";
import { Group } from "../models/Group";
import { BASE_URL } from "./base";

interface GroupRequest{
    limit?:number;
    offset?:number;
    query?:string;
    status: "all-groups" | "xyz";
}
export interface  GroupResponse{
    data:Group[]
}

export const fetchGroups=async (data : GroupRequest)=>{
    const url=BASE_URL +"/groups";
    try {
        const response = await axios.get(url, { params: data });
        console.log(response.data);
        return response.data;
    } catch (e) {
        return console.log(e);
    }
}