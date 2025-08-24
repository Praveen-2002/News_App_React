import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';

function App() {
  const [text,setText]  = useState('top%20india%20news')
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1);
  console.log(process.env.REACT_APP_API_KEY); // Should output: hello-world
  const API_KEY = process.env.REACT_APP_API_KEY
  const [url,setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&page=1&pageSize=33`)
  // tech
  const tech =()=>{
    setUrl(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}&page=1&pageSize=33`)
  }
  // perv button
  const clickedPrev = ()=>{
    setUrl(`https://newsapi.org/v2/everything?q=${text}&apiKey=${API_KEY}&page=${page-1}&pageSize=33`)
    setPage((page)=>page-1)
  }
  const clickedNext = ()=>{
    setUrl(`https://newsapi.org/v2/everything?q=${text}&apiKey=${API_KEY}&page=${page+1}&pageSize=33`)
    setPage((page)=>page+1)
  }
  // geting text
  const userText = (e)=>{
    setText(e.target.value);
  }
  const search = ()=>{
    setUrl(`https://newsapi.org/v2/everything?q=${text}&apiKey=${API_KEY}&page=1&pageSize=33`)
  }
  useEffect(()=>{
    // axios.get(url)
    //   .then((res)=>setData(res.data))
    console.log(API_KEY)
  },[url])
  console.log(data)
  
  return (
    <>
    <Navbar title='NewsApp' home ="Home" about="About" mode="light" change={userText} search={search} tech={tech}/>

    {data.length!==0 && <NewsContainer data={data}/>}
    {/* Fotter */}
    <div className='container d-flex justify-content-between m-3'>
          <button disabled={page<=1?true:false} className='btn btn-dark' onClick={clickedPrev}>&larr; Previous</button>
          <button disabled={page>=(Math.round(data.totalResults/33)>=3?3:Math.round(data.totalResults/33))?true:false} className='btn btn-dark' onClick={clickedNext}>Next &rarr;</button>
    </div>
    </>
  );
}

export default App;
