const initialState ={
    count:0,
}
export const  counterRedaucer = (state=initialState,action) =>{
    switch (action.type){
        case 'increment':
        return{ ... state, count:state.count + 1}
        case "decrement":
            return state.count> 0 ?{...state,count:state.count - 1} :state
        default: return state;
    }

}