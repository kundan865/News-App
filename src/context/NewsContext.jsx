import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const api_key = import.meta.env.VITE_NEWS_API_KEY


    const fetchNews = async (url = "/everything?q=india") => {
        setLoading(true);

        try {
            const response = await api.get(`${url}&apiKey=${api_key}`)
            setLoading(false);

            return response.data
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const value = {
        news, setNews, fetchNews,loading
    }

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const useNewsContext = () => {
    return useContext(
        NewsContext
    )
}

export { NewsContextProvider, useNewsContext }