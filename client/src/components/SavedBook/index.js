import React from "react";
import { Link } from "react-router-dom";

function SavedBook(props) {
    return (
        <div className="row" style={{ margin: " 10px 10px" }}>
            <div className="col-sm-12 col-md-10">
                <h3>{props.title}</h3>
                <h5>{props.authors}</h5>
                <p>{props.description}</p>
                <Link to={{ pathname: props.link }} target="_blank"  className="btn btn-primary">
                    Read Here
                </Link>
                {props.children}
            </div>
        </div>
    );
}


export default SavedBook;