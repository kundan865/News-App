import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const api_key = import.meta.env.VITE_NEWS_API_KEY;

    const fetchNews = async (url = "/everything?q=india") => {
        setLoading(true);
        try {
            const response = await api.get(`${url}&apiKey=${api_key}`); // call your backend
            if (response.data && response.data.articles) {
                setNews(response.data.articles); // update state
            } else {
                setNews([]);
            }
        } catch (error) {
            console.error("Failed to fetch news:", error.message);
            setNews([]);
        } finally {
            setLoading(false);
        }
    }

    const value = {
        news, setNews, fetchNews, loading
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