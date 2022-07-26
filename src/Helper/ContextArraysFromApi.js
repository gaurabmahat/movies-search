import React, { createContext, useState } from 'react';

export const ApiData = createContext();

const ApiDataProvider = (props) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    return (
        <ApiData.Provider value={{movies, series}}>
            {props.children}
        </ApiData.Provider>
      );
}
 
export default ApiDataProvider;
