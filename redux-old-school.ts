import { createStore, Action } from "redux";

export type ActionTypes = "counter/increment" | "counter/dicrement" | "counter/incrementAmount";
export interface StateProps{
   counter: {
      value: number;
   }
}

interface PayloadProps{
   payload: number;
}

type ActionProps = Action<ActionTypes> & PayloadProps;

const initialState: StateProps = {
   counter: {
      value: 0,
   }
}

function reducer(state = initialState, action: ActionProps){
   switch(action.type){
      case "counter/increment":
         return {
            ...state,
            counter: {
               value: state.counter.value + 1,
            }
         }
      case "counter/incrementAmount":
         return {
            ...state,
            counter: {
               value: state.counter.value + action.payload
            },
         };
      case "counter/dicrement":
         return {
            ...state,
            counter: {
               value: state.counter.value - 1,
            }
         }
      default:
         return state;
   };
}

export const store = createStore(reducer);