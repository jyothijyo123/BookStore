import React from "react";
const Book = props => {
    return (
        
        <div className=" mb-3 row shadow mt-4">
            <div className="col-lg-3 pl-0">
                <img src={props.book.img} alt="Image" width="200px" height="200px" />
            </div>
            <div className="col-lg-9">
                <h3 className="text-dark"> {props.book.title}</h3>
                <p>Author: {props.book.authors}</p>
                <p>Categorie: {props.book.genre}</p>
                <p>Price: Rs:{props.book.price}</p>
                <center> <a href="/mycart" class="btn btn-dark">Add to Cart</a></center>

            </div>
        </div>
    );
};

export default Book;

