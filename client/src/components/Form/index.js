import React from "react";

function Form(props) {
  return(
    <div className="form-group">
      <input className="form-control"
        {...props}
        onChange={props.onChange}
        placeholder="Search for a book!"
        type="text"
      />
      <button {...props} style={{ textAlign: "center", marginTop: 10 }} className="btn btn-success" onClick={props.onClick} >
        Find Book
      </button>
    </div>
  );
}

export default Form;
