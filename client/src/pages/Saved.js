import React, { useState, useEffect} from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedBook from "../components/SavedBook";

function Saved() {

    const [saved, setSaved] = useState([]);

    useEffect(() => {
        loadBooks();
    }, [])

    function loadBooks() {
        API.savedBooks()
            .then(res => {
                console.log();
                setSaved(res.data);
            })
            .catch(err => console.log(err))
    }

    function deleteBook(id) {
        API.deleteBook(id)
          .then(console.log(typeof id))
          .then(console.log(id))
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Jumbotron>
                        <h2>Saved Books</h2>
                        <p>Take a look at the books you have saved</p>
                    </Jumbotron>
                </div>
            </div>
            {saved.length ? (
                saved.map(book => (
                    <SavedBook
                        key={book._id}
                        title={book.title}
                        authors={book.author}
                        description={book.description}
                        link={book.link}
                    >
                        <button  className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => deleteBook(book._id)} >
                            Delete
                        </button>
                    </SavedBook>
                ))
            ) : (
                <h3 style={{ textAlign: "center" }}>No Results to Display</h3>
            )}
        </div>
    );
}

export default Saved;