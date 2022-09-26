import React from 'react'
const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className=" badge rounded-pill bg-danger" >
            {source}</span>
        </div>
        <img src={!imageurl ? "https://images.news18.com/ibnlive/uploads/2022/06/untitled-design-121-165615544416x9.png"
          : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}.</small></p>
          <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )

}
export default NewsItem