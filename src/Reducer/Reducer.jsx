const initialState ={
    count:0,
    open:false,
    card:JSON.parse(localStorage.getItem('card'))||[],
}
export const  counterRedaucer = (state=initialState,action) =>{
    switch (action.type){
        case 'increment':
            return{ ... state, count:state.count + 1}
        case "decrement":
            return state.count> 0 ?{...state,count:state.count - 1} :state
        case 'open_modal':
                return{...state,open:true}
           
        case 'close_modal':
                return{...state,open:false}
        case 'add_cars':
            const saveCars =[...state.card,action.payload]
            localStorage.setItem('card',JSON.stringify(saveCars))
             return {... state,card :saveCars}
        case 'remove_cars':
            const update =state.card.filter(car =>car?.id !== action.payload)
            localStorage.setItem('card',JSON.stringify(update))
             return {...state,card:update}
        default: return state;
    }

}