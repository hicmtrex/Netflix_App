import React, { useReducer } from "react";
import MovieReducer from "./MovieReducer";

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false
};

export const MovieContext = React.createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE)
    
    return (
        <MovieContext.Provider value={
            { movies: state.movies, isFetching: state.isFetching, error: state.error,dispatch }}>
            {children}
        </MovieContext.Provider>
    )
}