import React from 'react'


const NewsCard = ({details}) => {
    return (
        <div className="card bg-base-200 shadow-sm">
            <figure>
                <img className='aspect-video object-contain w-full'
                    src={details.urlToImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-2">
                    {details?.title}
                </h2>
                <p className='line-clamp-3'>{details?.description}</p>
                <div className="card-actions justify-end mt-4">
                    <button onClick={()=>window.open(details.url)}
                    className='badge-outline btn'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
