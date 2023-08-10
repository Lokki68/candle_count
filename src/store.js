import {configureStore} from "@reduxjs/toolkit";
import candles from './features/candles.js'

export const store = configureStore({
  reducer: {
    candles
  }
})