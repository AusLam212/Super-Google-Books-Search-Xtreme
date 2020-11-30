import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import API from "../utils/API";
import SearchedBook from "../components/SearchedBook"


function Search() {

  const [search, setSearch] = useState("");
  const [book, setBook] = useState({});
  const [books, setBooks] = useState({});

  function handleInputChange(event) {
    const { value } = event.target;
    setSearch(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.getBook(search)
      .then(res => {
        console.log(res.data);
        setBook(res.data);
      })
      .then(setSearch(""))
      .catch(err => console.log(err))
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Jumbotron>
            <h1>Search:</h1>
            <Form onChange={handleInputChange} onClick={handleFormSubmit} />
          </Jumbotron>
        </div>
      </div>
      {book.length ? (
        <SearchedBook
          title={book.title}
          authors={book.authors}
          image={book.image}
          description={book.description}
          link={book.link}
        />
      ) : (
        <h3 style={{ textAlign: "center" }}>No Results to Display</h3>
      )}
    </div>
  );
}

export default Search;
