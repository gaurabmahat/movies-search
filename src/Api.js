import axios from "axios"

export const apiFetchMovies = async (userInput) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${userInput}&type=movie&apikey=592e0b79`)
        console.log(response)
        return response.data.Search
    } catch (error) {
        console.log(error)
        return error
    }
}

export const apiFetchSeries = async (userInput) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${userInput}&type=series&apikey=592e0b79`)
        console.log(response)
        return response.data.Search
    } catch (error) {
        console.log(error)
    }
}