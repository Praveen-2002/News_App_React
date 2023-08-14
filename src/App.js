import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';

function App() {
  // apikey- b10e9e87ad884a6c93caa3c18adfd095 , 54175006e3634f7c850579d5562ea0c0
  // https://newsapi.org/v2/everything?q=trending%20india%20news&apiKey=b10e9e87ad884a6c93caa3c18adfd095
  const [text,setText]  = useState('top%20india%20news')
  const [count,setCount] = useState(0)
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1);
  const [url,setUrl] = useState('https://newsapi.org/v2/top-headlines?country=in&apiKey=54175006e3634f7c850579d5562ea0c0&page=1&pageSize=33')
  // tech
  const tech =()=>{
    setUrl(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=54175006e3634f7c850579d5562ea0c0&page=1&pageSize=33`)
    setCount((count)=>count+1)
  }
  // perv button
  const clickedPrev = ()=>{
    setUrl(`https://newsapi.org/v2/everything?q=${text}&apiKey=54175006e3634f7c850579d5562ea0c0&page=${page-1}&pageSize=33`)
    setPage((page)=>page-1)
    setCount((count)=>count+1)
  }
  const clickedNext = ()=>{
    setUrl(`https://newsapi.org/v2/everything?q=${text}&apiKey=54175006e3634f7c850579d5562ea0c0&page=${page+1}&pageSize=33`)
    setPage((page)=>page+1)
    setCount((count)=>count+1)
  }
  // geting text
  const userText = (e)=>{
    setText(e.target.value);
  }
  const search = ()=>{
    setUrl(`https://newsapi.org/v2/everything?q=${text}&apiKey=54175006e3634f7c850579d5562ea0c0&page=1&pageSize=33`)
    setCount((count)=>count+1)
  }
  useEffect(()=>{
    axios.get(url)
      .then((res)=>setData(res.data))
  },[count])
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
