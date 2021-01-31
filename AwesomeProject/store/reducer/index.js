const INITIALSTATE={
   Donors:[],
}


export default (state=INITIALSTATE,action)=>{
    switch(action.type)
    {
        case "Donors":
        return({
            ...state,
            Donors:[...state.Donors,action.payload],

        })
    }
    return state;
}