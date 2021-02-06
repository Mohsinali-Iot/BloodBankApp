const INITIALSTATE={
   Donors:[],
   current_user:''
}


export default (state=INITIALSTATE,action)=>{
    console.log("current_user",action.current_users)
    switch(action.type)
    {
        case "Donors":
        return({
            ...state,
            Donors:[...state.Donors,action.payload],

        })
        case "current_user":
            return({
                ...state,
                current_user:action.current_users,
    
            })
    }
    return state;
}