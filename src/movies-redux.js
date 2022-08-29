//action type:
//מונע שגיאות כתיב בשימוש חוזר
const ADD_MOVIES = "movie/addMovies";
const ADD_FAVORITE = "movie/addFavorite";

//Action creator:
//Action פונקציה שמחזירה
const addMovies = (movies) =>{
  return {
    type: ADD_MOVIES,
    payload: movies
  };
}

//action-creator
function addFavorite(movie) {
  return {
    type: ADD_FAVORITE,
    payload: movie
  };
}

//מצב התחלתי לחנות
const initialState = {
  movies: [],
  favoriteMovies: []
}


//פונקציה שמחזירה את המצב העדכני
//מחזיר את המצב העדכני
//flux pattern
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: action.payload
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload]
      };
    default:
      return state;
  }
};

export default moviesReducer;
export {addFavorite, addMovies}
