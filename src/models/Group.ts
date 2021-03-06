import { State } from "./State";

export interface Group{
    id:number;
    name:string;
    is_private:boolean;
    description:string;
    group_image_url:string;
    join_code:string;
    created_at:Date;
    updated_at:Date;
    state:State;
}