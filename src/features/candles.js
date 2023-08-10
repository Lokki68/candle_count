import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  candles_count: [],
}

const candles = createSlice({
  name: 'candles',
  initialState,
  reducers: {
    addCount: (state, action) => {
      state.candles_count.push(action.payload)
    }
  }
})

export const {addCount} = candles.actions
export default candles.reducer