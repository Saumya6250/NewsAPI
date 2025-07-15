
import Card from './Card'
import React, { useState, useEffect } from 'react';


const Newsapp = () => {
  const[searchTitle,setSearchTitle]=useState("india")
  const[newsData,setnewsData]=useState([]);
  const API_KEY="4c99bd9bace044cb9525405a2329fb93"

  //Getting data when clicked on search button(calling API)
  const getData=async(query)=>
  {
      const searchQuery = query || searchTitle;
      const  response=await fetch(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=${API_KEY}`)
      //jo data ayega use readable format me convert kar lenge->convert in json format
      const jsonData=await response.json();
      console.log(jsonData.articles);
      setnewsData(jsonData.articles);
  }

      // This runs only once when Newsapp is first rendered
      useEffect(()=>
      {
        getData()
      },[])
      
    //function handleInput
    const handleInput=(e)=>
    {
      console.log(e.target.value);
      setSearchTitle(e.target.value);
    }

    //userInput for each button 
    const userInput=(event)=>{
      setSearchTitle(event.target.value)

      // Fetch news after setting new category
      setTimeout(() => {
        getData();
      }, 0);

   }
  return (
    <div>
      <nav>
        <div className='content'>
            <h1>
              TrendyNews
            </h1>

            <ul>
              <a href="">All News</a>
              <a href="">Trending</a>
            </ul>

            <div className='searchBar'>
              <input type="text" placeholder ='Search News' value={searchTitle} onChange={handleInput}/>
              <button onClick={() => getData(searchTitle)}>Search</button>
            </div>

           
          </div>
   </nav>
     <div>
              <p className='head'>Stay Updated with TrendyNews</p>
            </div>

         <div className='categoryBtn'>
              <button onClick={userInput} value="politics">Politics</button>
              <button onClick={userInput} value="sports">Sports</button>
              <button onClick={userInput} value="entertainment">Entertainment</button>
              <button onClick={userInput} value="health">Health</button>
              <button onClick={userInput} value="fitness">Fitness</button>
          </div> 
          <div>
            <Card data={newsData}/>
          </div>
        </div>
  )
}

export default Newsapp
