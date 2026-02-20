import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext'

const Category = ({ className }) => {

    const {news,setNews,fetchNews}= useNewsContext();


    const categories = ["business","entertainment","general",
         "health", "science", "sports", "technology"]

    const handleClick=async (category)=>{
        const data= await fetchNews(`/everything?q=${category}`)
        setNews(data.articles);
    }


    return (
        <div className={`${className}`}>
            <Wrapper>
                <div className={`flex max-w-full w-fit m-auto overflow-x-auto px-4 scrollbar-none gap-5`}>
                    {
                        categories.map((category, index) => {
                            return (
                                <div key={index}>
                                    <button onClick={()=>handleClick(category)}
                                     className="btn btn-primary">{category}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </Wrapper>
        </div>

    )
}

export default Category

