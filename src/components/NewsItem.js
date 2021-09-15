// import React,{Component} from 'react'
import React from 'react'
import img1 from './/img1.png'


// export class NewsItem extends Component { 
    const NewsItem=(props)=>{
    // render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                            <div style={
                                {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    position: "absolute",
                                    right:'-325 px',
                                    left: "340px"
                                }
                            }>
                                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" >
                                    {source}
                                </span>
                            </div>

                    <img src ={imageUrl == null?img1:imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                            </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author == null ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    // }

}
export default NewsItem
