import { createSlice } from "@reduxjs/toolkit"


 const magicBricks=createSlice({
    name:"MagicHome",
    initialState:{
        api:'',
        budget:{minPrice:"0",maxPrice:"100000000"},
        resident:[{checker:true,resident:'Flat'},{checker:true,resident:'House'},{checker:true,resident:'Plot'}],
        flatBHK:[{checker:true,BHK:'1'},{checker:true,BHK:'2'},{checker:true,BHK:'3'},{checker:false,BHK:''},{checker:false,BHK:''},{checker:false,BHK:''}],
        curentPage:'/',
    },
    reducers:{
        setApi:(State,action)=>{
            State.api=action.payload
        },
        setminmax:(State,action)=>{
            // console.log(action,action.payload.key,action.payload.value)
            State.budget[action.payload.key]=action.payload.value
        },
        setResident:((state,action)=>{
            var key=action.payload.key;
            // console.log(key,action.payload.value)
            state.resident[key].checker=action.payload.value;
            state.resident[key].resident= action.payload.value ? action.payload.residentValue==='House/Villa' ? 'House': action.payload.residentValue : '';

        }),
        setflatBHK:((state,action)=>{
            var key=action.payload.key;
            // var index=action.payload.BHKValue;
            //console.log(key,index,action.payload.value)
            state.flatBHK[key].checker=action.payload.value;
            state.flatBHK[key]['BHK']= action.payload.value ? action.payload.BHKValue : '';
        }),
        setCurentPage:((state,action)=>{
            state.curentPage=action.payload
        })
        
    }
}) 

export default magicBricks.reducer
export const {setApi,setminmax,setResident,setflatBHK,setflatBHKvalue,setresidentValue,setCurentPage}=magicBricks.actions



