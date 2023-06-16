import React,{ useEffect } from 'react'
import { useState } from 'react';
import Newssitem from './Newssitem'
function Newss() {
const [articles,setarticles] = useState([]);
var art = {};

  useEffect(()=>{
    const fetchData = async() => {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8cb0988283346ecbd50e581028f0f3b";
        let response = await fetch(url);
        art = await response.json();
        setarticles(art.articles);
        console.log(art.articles.length);
        

    }
    fetchData();
},[])


  return (
    <div className="container my-3">
        <h2 style={{textAlign:'center'}} >News Monkey - Top Headlines</h2>
        <div className="row" >
        {articles.map((article) => ( 
            article.urlToImage !== null?(<div className="col-md-3" key={article.url}> <Newssitem title={article.title} author={article.author} description={article.description} urlToImage={article.urlToImage}  />  </div>
            ):(<></>)
        
      ))}


        </div>

    </div>
  )
}

export default Newss

// "author": "Ryan Hogg",
//       "title": "You can now fix those embarrassing mistakes by editing your WhatsApp messages and iMessages – here's how",
//       "description": "Here's how to fix your text messages. WhatsApp now lets users edit their messages, but you may not guess how. iMessage doesn't make it obvious either.",
//       "url": "https://www.businessinsider.com/how-to-fix-whatsapp-imessage-mistakes-2023-6",
//       "urlToImage": "https://i.insider.com/646c7460a739dc001808fba3?width=1200&format=jpeg",
//       "publishedAt": "2023-06-16T09:44:21Z",
//       "content": "You've only got 15 minutes to edit your WhatsApp messages.Getty Images\r\n<ul>\n<li>WhatsApp finally rolled out a long-awaited edit button to help you fix those embarrassing mistakes.</li>\n<li>You only … [+2566 chars]"
//     },




