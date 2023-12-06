import Card from "../Components/Card";
import { useState, useEffect } from "react";
const API_KEY = "a6d8a331fe19429e99e8453aaa0d14b3";
const API_URL = `https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=${API_KEY}`;

function Business() 
{
    const [val, setVal] = useState([]);

    async function getData() 
    {
        let res = await fetch(API_URL);
        let ans = await res.json();
        // console.log(ans.articles);
        setVal(ans.articles);
    }

    useEffect(() => {
        getData();
    },[])


    return (
        <>
            <div className="allNews">
            {
            val.map((e) => {
                return (
                    <Card 
                    title={e.title} 
                    description={e.description} 
                    source={e.source.name}
                    date={e.publishedAt}
                    url={e.url}
                    image={e.urlToImage}
                    key={e.url} 
                    />
                );
            })
            }
            </div>
        </>
    );
}

export default Business;