import React from "react";
import { Link } from "react-router-dom";

function SearchedBook(props) {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-2">
                <img src={props.image} alt="Book Cover" style={{ height: "100px", width: "60px" }} />
            </div>
            <div className="col-sm-12 col-md-10">
                <h2>{props.title}</h2>
                <h3>{props.authors}</h3>
                <p>{props.description}</p>
                <Link to={{ pathname: props.link }} target="_blank" >
                    {props.link}
                </Link>
            </div>
        </div>
    );
}

export default SearchedBook;