import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import API from "../utils/API";
import SearchedBook from "../components/SearchedBook"


function Search() {

  const [search, setSearch] = useState("");
  const [books, setBooks] = useState({});

  function handleInputChange(event) {
    event.preventDefault();
    const { value } = event.target;
    setSearch({ value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (search !== "") {
      API.getBook(search.value)
      .then(res => {
        setBooks(res.data.items);
      })
      .catch(err => console.log(err))
    }
  }

  function handleSave(result) {
    console.log(result)
    API.saveBook({
      bookid: result.id,
      title: result.volumeInfo.title,
      authors: result.volumeInfo.authors,
      description: result.volumeInfo.description,
      link: result.volumeInfo.infoLink
    })
      .then(
        res => {
          console.log(res)
        }
      )
      .catch(err => console.error(err));
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Jumbotron>
            <h2>Search:</h2>
            <Form onChange={handleInputChange} onClick={handleFormSubmit} />
          </Jumbotron>
        </div>
      </div>
      {books.length ? (
        books.map(book => (
          <SearchedBook
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
          >
            <button  className="btn btn-success" style={{ marginLeft: "10px" }} onClick={() => handleSave(book)}>
              Save
            </button>
          </SearchedBook>
        ))
      ) : (
        <h3 style={{ textAlign: "center" }}>No Results to Display</h3>
      )}
    </div>
  );
}

export default Search;
