    import { createStore } from "redux";

    //state
    const initialState = {
        loading: false,
        users: [],
        error: ''
    }

    //action types:
    const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
    const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
    const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

    //rxaction
    //action creators: helper functions:
    const fetchUsersRequested = () => ({
        type: FETCH_USERS_REQUESTED
    })

    const fetchUsersSuccess = (users) => ({
        type: FETCH_USERS_SUCCESS,
        payload: users
    })

    const fetchUsersFailure = (error) => ({
        type: FETCH_USERS_FAILURE,
        payload: error
    })

    //initial state
    //state, action => return new State
    //reducer (_?_)
    const reducer = (state = initialState, action) =>{
        //return new State based on the action type
        switch(action.type){
            case FETCH_USERS_REQUESTED: {
                return {...state, loading: true}
            }
            case FETCH_USERS_SUCCESS: {
                return {error: '', loading: false, users: action.payload }
            }
            case FETCH_USERS_FAILURE: {
                return { error: action.payload, loading: false, users:[] }
            }
            default: {
                return state;
            }
        }
    }


    const store = createStore(reducer);

    /**
 
     *  store.dispatch(fetchUsersRequested())
     *  fetch('http://abcd.com/users').then(res=>res.json()).then(users=>{
     *      store.dispatch(fetchUsersSuccess(users))
     *  }).catch(e=>{
     *      store.dispatch(fetchUsersFailure(e))
     *  })
 
     */