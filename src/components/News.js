
import React from 'react'

export default function News(props) {
  const d = props.des==null?'The discription of this page is not available Plsease check the clink given below'.split(' '):props.des.split(' ');
  const image = 'https://th.bing.com/th/id/R.9d7b29446a6adc7316a4b775dd8754ec?rik=JlaOShB8Otei%2bA&riu=http%3a%2f%2fwww.lowerycommunications.com%2fwp%2fwp-content%2fuploads%2f2013%2f12%2fslider-for-news-m.jpg&ehk=pBuBXaobIcXuoEzAUW8R4653wTMiXjzA58x80zL0UFM%3d&risl=&pid=ImgRaw&r=0';
  return (
    <div className='col-sm-4'>
     <div className="card m-4">
        <img src={props.urlimg?props.urlimg:image} className="card-img-top" alt="Img" style={{height:'10rem'}}/>
         <div className="card-body">
           <h5 className="card-title">{props.title.split(' ').slice(0,17).join(' ')}</h5>
           <hr/>
            <b className='m-1'><span className="badge bg-secondary">{props.source}</span></b>
            <br/>
            <b className='m-1'>{'Date: '+props.time.split('T').join(', Time: ').slice(0,-1)}</b>
           <hr/>
            <p className="card-text">{d[0]==='<ol>' ? d.slice(0,23).join(' '):d.slice(0,27).join(' ')}</p>
            <a href={props.url} className="btn-sm btn btn-dark">Read Full Article</a>
          </div>
        </div>
    </div>
  )
}
