import React from 'react';
import News from './News';

// articles: 
// : 
// author
// "Andy Maxwell"
// content
// "According to the International Federation of the Phonographic Industry (IFPI), the availability of unlicensed music “remains an issue for thewhole music ecosystem.”\r\nIn its 2022 ‘Engaging With Music’… [+6514 chars]"
// description
// "With many pirate sites pulling in 10, 20, 50 or even 90 million visits per month, debate over popularity seems pointless. However, when compared to some platforms already declared illegal by rightsholders, even 200 million visits per month is nothing. Last mo…"
// publishedAt
// "2023-05-13T16:53:57Z"
// source
// {id: null, name: 'Torrentfreak.com'}
// title
// "One YouTube-Ripping Site Will Get 4 Billion Visits in 2023; Time to Blame"
// url
// "https://torrentfreak.com/one-youtube-ripping-site-will-get-4-billion-visits-in-2023-230513/"
// urlToImage
// "https:

export default function NewsContainer(props){
    return (
        <div className='container'>
        <h1 className='mb-3'>Trending topics</h1>
        <div className='container row'>
        {props.data.articles.map((ele)=>{
            return (<News title={ele.title} time={ele.publishedAt} des={ele.description} url={ele.url} source = {ele.source.name} urlimg={ele.urlToImage}/>)
         })
        }
        </div>
        </div>
    )
}