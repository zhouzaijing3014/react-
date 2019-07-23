import { Action } from "rxjs/internal/scheduler/Action";

// export default function count (state=0,action){
//     switch(action.type){
//         case'INCREMENT':
//         return state + action.number
//         case'DECRMENT':
//         return state - action.number    
//         default:
//         return state
//     }

// }


export default function count (state=1,aciton){
    switch(action.type){
        case INCREMENT:
            return state + action.number ;
        case DECRMENT:
            return state - action.number;
        default:
            return state
     }
}