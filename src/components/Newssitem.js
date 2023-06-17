import React from 'react';

function Newssitem(props) {
  return (
    <div className="card my-3" style={{ width: '18rem', height: '30rem' }}>
      <div className="position-relative">
        <span className="position-absolute top-0 end-0 badge bg-primary mx-1 my-1">
          <a href={props.url} target="_blank" className="text-white text-decoration-none">source</a>
        </span>

        <img
          src={props.urlToImage ? props.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7F8JVygXkkLoA9Pf1V6ycEiDLys9bzv1yA&usqp=CAU"}
          className="card-img-top"
          alt="Image Not Available"
          style={{ objectFit: 'cover', width: '100%', height: '200px' }}
        />
      </div>

      <div className="card-body">
        <h6 className="card-title" style={{ height: '5rem', overflow: 'hidden' }}>
          {props.title}
        </h6>
        <p className="card-title" style={{ height: '3rem', overflow: 'hidden' }}>
          By: {props.author ? props.author : 'Unknown'} on {props.publishedAt.slice(0, 10)}
        </p>
        <p className="card-text" style={{ height: '3rem', overflow: 'hidden' }}>
          {props.description}
        </p>
        <a href={props.url} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Newssitem;
