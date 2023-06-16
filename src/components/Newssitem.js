import React from 'react'

function Newssitem(props) {
    
  return (
    
      <div className="card my-3" style={{width:'18rem',height:'30rem'}}>
  <img src={props.urlToImage} className="card-img-top" alt="Image Not Available" style={{ objectFit: 'cover', width: '100%', height: '200px' }}  />
  <div className="card-body">
    <h6 className="card-title" style={{ height: '5rem', overflow: 'hidden' }} >{props.title}</h6>
    <p className="card-title" style={{ height: '3rem', overflow: 'hidden' }} >Author: {props.author ? props.author : 'Unknown'}
</p>
    <p className="card-text"  style={{ height: '3rem', overflow: 'hidden' }}>{props.description} </p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>
    
  )
}

export default Newssitem


