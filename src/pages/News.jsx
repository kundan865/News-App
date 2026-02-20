import React, { useEffect } from 'react'
import Wrapper from '../componenets/Wrapper';
import NewsCard from '../componenets/NewsCard';
import { useNewsContext } from '../context/NewsContext';
import Loader from '../componenets/Loader';


function News({ className }) {

    const api_key = import.meta.env.VITE_NEWS_API_KEY

    const { news, setNews, fetchNews ,loading} = useNewsContext();



    useEffect(() => {
        (async () => {
            const data =await fetchNews()
            setNews(data)
        })()

    }, [])

    
    return (

        (loading==true) ? <div className='flex justify-center items-center p-8'><Loader/></div> : 

        <Wrapper>
            <div className={`grid grid-cols-1 sm:grid-cols-2
                 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 ${className}`}>

                {
                    news.map((details, index) => {
                        if (!details.urlToImage) return null;
                        return <NewsCard key={index} details={details} />
                    })
                }
            </div>
        </Wrapper>
    )
}

export default News
