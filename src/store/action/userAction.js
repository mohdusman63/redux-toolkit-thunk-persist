import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk('users',async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  }
)

// export const getUsers = createAsyncThunk('users', async () => {
// 	// users/pending
// 	// users/fulfilled
// 	// users/rejected
// 	const response = await axios.get(
// 		'https://jsonplaceholder.typicode.com/users'
// 	);
// 	return response.data;
// });