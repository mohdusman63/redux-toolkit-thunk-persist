import { createSlice } from '@reduxjs/toolkit'
import {getUsers} from '../action/userAction'

const initialState = {
  value: 0,
  loader:false,
  user:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers:{
    [getUsers.pending]:(state,action)=>{
      state.loader=true

    },
     [getUsers.fulfilled]:(state,action)=>{
      state.loader=false
      state.user=action.payload

    },
     [getUsers.rejected]:(state,action)=>{
      state.loader=false
      state.error=action.payload

    }

  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer