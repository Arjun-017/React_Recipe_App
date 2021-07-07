import React, {useState, useEffect, useRef} from 'react'
import Hitslist from './components/Hitslist'
import './components/Hits.css'
import './App.css'

function App() {


    const API_KEY = process.env.REACT_APP_API_KEY  
    
    const queryParameter = useRef()
    const [query, setQuery] = useState('')
    const [hits, setHits] = useState([])
    
    useEffect(() => {
      getData();
    },[query])

    const getData = async () => { 
      const URL =  "https://api.edamam.com/search?q="+query+"&app_id=dd47c336&app_key="+API_KEY
      const response = await fetch(URL)
      const data = await response.json()
      setHits(data.hits)
      console.log(data)
      
    }

    function searchFunction(){
      setQuery(queryParameter.current.value)

    }
  
    return (
      <>
      <header>
      <ul>
        <li><a href='#about'>About</a></li>
        <li><a href='#search'>Search</a></li>
      </ul>
      <h1 className ='banner'>
      Find the recipes of your favourite dishes here ..
      </h1>
     <p>
       There is no love sincerer than the love of food.            
      ― George Bernard Shaw 
      </p>
      <p>
       Search to find the ingredients of the dishes that you love
     </p>
      <input type='text' ref = {queryParameter} />
      <a href='#container' className="search" id = 'search' onClick={searchFunction}>Search</a>
     
     </header>
      
      <div className="container" id='container'>
      <Hitslist hits={hits} />
      </div>
      <div className='about' id='about'>
      <h3>About</h3>
        <p>
           Website created using React.js. Contact me at <a href='https://www.instagram.com/chekhovs_gun_/'>chekhovs_gun_</a> on Insta. The recipes are pulled using a free api provided by <a href='https://www.edamam.com/'>edamam.com</a>.                     
        </p>
      </div>
      </>
    );
}

export default App;
