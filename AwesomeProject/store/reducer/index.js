const INITIALSTATE={
    // name:'Mohsin',

    // current_users:{},
    // Items:[],
   Donors:[],
   
      
    // searchTerm:'',
    //     {
    //         item_name:"mobile",
    //         img:mobile1,
    //         brand:"Samsung",
    //         price:13000,
    //     },
    //     {
    //         item_name:"car",
    //         img:car1,
    //         brand:"Honda",
    //         price:1300000,
    //     },
    //     {
    //         item_name:"laptop",
    //         img:laptop1,
    //         brand:"Dell",
    //         price:100000,
    //     },
    //     {
    //         item_name:"car",
    //         img:car1,
    //         brand:"Honda",
    //         price:1300000,
    //     },
    //     {
    //         item_name:"bike",
    //         img:bike1,
    //         brand:"Honda",
    //         price:145000,
    //     },
    //     {
    //         Category:"",
    //         Brand:"",
    //         conditon:"",
    //         title:"",
    //         des:"",
    //         price:"",
    //         location:"",

        
    // }]
}


export default (state=INITIALSTATE,action)=>{
    //console.log("action===>" ,action.payload)
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