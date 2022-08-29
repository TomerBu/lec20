import {configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movies/movies-slice'
import themeReducer from '../features/theme/theme-slice'
//import newsReducer from '../features/news'

//const rootReducer = combineReducers(movieReducer, newsReducer)

//RTK also adds the developer tools a middleware
const store = configureStore({
    reducer: {
        movie: movieReducer, 
        theme: themeReducer
        //news: newsReducer
    }
})
export default store;
