import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

const ME_FETCH='me/fetch';
const ME_LOGIN='me/login';

interface AppState{
    me?:User;
    groups: Group[];
    isSidebarOpen: boolean;
}
const initialState : AppState={
    me:undefined,
    groups:[],
    isSidebarOpen:true,

}

const reducer=(currentState=initialState, dispatchedAction:AnyAction)=>{
    switch(dispatchedAction.type){
        case ME_FETCH:
        case ME_LOGIN:
            return {...currentState, me:dispatchedAction.payload};
        default:
            return currentState;
    }
}

export const store=createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const meFetchedAction=(u:User)=>({type:ME_FETCH , payload:u})
export const meLoginAction=(u:User)=>({type:ME_LOGIN , payload:u})
export const useAppSelector: TypedUseSelectorHook<AppState>=useSelector;