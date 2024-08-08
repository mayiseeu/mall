import { createSlice } from "@reduxjs/toolkit"
const itemsSlice=createSlice({
  name:'items',
  initialState:[],
  reducers:{
    addInitialItems:(store,action)=>{
      console.log('jlkdflsdkf',store,action)
      return action.payload

    }  }
})
export const itemAction=itemsSlice.actions
export default itemsSlice

