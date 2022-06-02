import axios from "axios"

export const apiFetch = async (userInput) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${userInput}&apikey=592e0b79`)
        console.log(response)
        return response.data.Search
    } catch (error) {
        console.log(error)
    }
}