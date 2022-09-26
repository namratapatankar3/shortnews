import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

const News = (props) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)
  document.title = `${capitalize(props.category)}- PocketNews`
  const update = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json()
    setArticles(data.articles)
    setLoading(false)
    setTotalArticles(data.totalResults)
  }
  useEffect(() => {
    update();
  }, [])
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=826ff8ff9b734100842653dd0dc5027d&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let response = await fetch(url);
    let data = await response.json()
    setArticles(articles.concat(data.articles))
  };
  return (
    <>
      <h1 className="text-center" style={{ marginTop: '90px' }}>PocketNews- Top {capitalize(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalArticles}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
News.defaultProp =
{
  country: "in",
  category: "sports",
  pageSize: 8,
}
News.propTypes = {
  country: propTypes.string,
  category: propTypes.string,
  pageSize: propTypes.number,
}
export default News