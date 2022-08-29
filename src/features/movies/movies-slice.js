import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=b3b1492d3e91e9f9403a2989f3031b0c&language=he-il&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

const imageUrl = (image_path) => `https://image.tmdb.org/t/p/original${image_path}`
const initialState = {
    movies: [],
    error: '',
    loading: false
}

//REDUX works with reducers, async func can't change the state
//createAsyncThunk is a helper for writing async in the slice, then we use it in 'extra-redcuers'
export const fetchMovies = createAsyncThunk('movie/fetch', () => {
    //return fetch url
    return fetch(movieUrl)
        .then((response) => response.json())
        .then((json) => json.results)
        .then(movies => movies.map(m => ({
            ...m,
            poster_path: imageUrl(m.poster_path),
            backdrop_path: imageUrl(m.backdrop_path)
        })))
})
const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
        addFavorite: (state, { payload }) => {
            state.favoriteMovies.push(payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true;
            state.movies = [];
            state.error = ''
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
            state.error = ''
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.movies = [];
            state.error = action.error ?? 'Something went wrong'
        })
    }
});

export default moviesSlice.reducer;
export const { addFavorite, addMovies } = moviesSlice.actions;



