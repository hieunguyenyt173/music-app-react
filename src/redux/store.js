import {configureStore} from '@reduxjs/toolkit'
import playerReducer from './features/PlayerSlice'

export const store = configureStore({
     reducer:  {
        player : playerReducer,
    }
})

