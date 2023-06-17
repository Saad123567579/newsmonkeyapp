import React, { useEffect, useState } from 'react';
import Newssitem from './Newssitem';

function Newss(props) {
  
  const value = props.value;  
  const search= props.search;
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [status,setstatus] = useState("good");
  const [URL, setURL] = useState(
    `https://newsapi.org/v2/everything?apiKey=c8cb0988283346ecbd50e581028f0f3b&pageSize=${value}&page=${page}&q=${search}+pakistan`
  );
  
  const [total, setTotal] = useState(0);
  var response;

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      response = await fetch(URL);
      const art = await response.json();
      setloading(false);
      setArticles(art.articles);
      setTotal(art.totalResults);
      document.title = search;
    };

    fetchData();
  }, [URL]);

  useEffect(() => {
    setURL(
      `https://newsapi.org/v2/everything?apiKey=c8cb0988283346ecbd50e581028f0f3b&page=${page}&pageSize=${value}&q=${search}+pakistan`
    );
  }, [page, value,search]);


  const handlePrev = (event) => {
    if (page <= 1) {
      event.target.setAttribute('disabled', 'true');
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = (event) => {
    if ((page + 1) * value <= total) {
      setPage(page + 1);
    } else {
      event.target.setAttribute('disabled', 'true');
    }
  };

  return (
    <>
  {loading ? (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    total != 0 ? (
      <div className="container my-3">
        <h2 style={{ textAlign: 'center' }}>News Monkey - Top Headlines - {total} Results Found For {search.toUpperCase()}</h2>
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-3 " key={article.url}>
              <Newssitem
                title={article.title}
                author={article.author}
                description={article.description}
                urlToImage={article.urlToImage}
                publishedAt={article.publishedAt}
                url={article.url}
              />
            </div>
          ))}
        </div>
        <br />
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            disabled={page <= 1}
            onClick={handlePrev}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={(page + 1) * value > total}
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    ) : (
      <div className="container">
        <h1 className="my-4" >No results found for your search {search}. Please try something else</h1>
      </div>
    )
  )}
</>

  );
}

export default Newss;
