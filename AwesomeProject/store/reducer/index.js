const INITIALSTATE={
    name:'Mohsin',
    // users:[],
    // current_users:{},
    // Items:[],
      
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
    console.log("action===>" ,action.payload)
    // switch(action.type)
    // {
    //     case "Items":
    //     return({
    //         ...state,
    //         Items:[...state.Items,action.payload]

    //     })
    // }
    return state;
}