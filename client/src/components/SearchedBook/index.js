import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

function SearchedBook(props) {

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        API.savedBooks()
            .then(savedBooks => setSavedBooks({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }, {})

    return (
        <div className="row" style={{ margin: " 10px 10px" }}>
            <div className="col-12">
                <h3>{props.title}</h3>
                <h5>{props.authors}</h5>
                <p>{props.description}</p>
                <Link to={{ pathname: props.link }} target="_blank" >
                    Read Here
                </Link>
                <button onClick={() => handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                    {savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                </button>
            </div>
        </div>
    );
}

export default SearchedBook;