import { createSlice } from "@reduxjs/toolkit"
const bagSlice=createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addToBag:(state,action)=>{
      // console.log('jlkdflsdkf',store,action)
      state.push(action.payload)
      

    } ,
    removeFromBag:(state,action)=>{
      // console.log('jlkdflsdkf',store,action)
      return state.filter(itemId => itemId!= action.payload)
      

    } 
   }
})
export const bagAction=bagSlice.actions
export default bagSlice

