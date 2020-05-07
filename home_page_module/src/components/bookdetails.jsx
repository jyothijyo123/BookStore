import React, { Component } from 'react';
class BookDetails extends Component {
    state = {};
    handleBack = () => {
        this.props.history.push("/books");
    };
    render() {
        return (
            <div>
            <h1 className="text-center">Book Details Page</h1>
                <h1>Selected Book #{this.props.match.params.id}</h1>
            <div className=" mb-3 row shadow mt-4">
            <div className="col-lg-3 pl-0">
                <img src={this.props.location.state.book.img} alt="Image" width="300px" height="300px" />
            </div>
            <div className="col-lg-9">
            <h1 className="text-center text-primary">
                    {this.props.location.state.book.title}
                </h1>
            <h3 className=" text-success">
                  Author:  {this.props.location.state.book.authors}</h3>
                    
                   
                <h3 className=" text-success">
                Category   :  {this.props.location.state.book.genre}</h3>
                    <h3 className=" text-success">
                 Publish   :   {this.props.location.state.book.publishedDate}</h3>
                <h3 className=" text-success">
                  Rating   :  {this.props.location.state.book.rating}/10</h3>
                 <h3 className=" text-success">
                  Price    :  Rs.{this.props.location.state.book.price}</h3>
                <center> <a href="/mycart" class="btn btn-dark">Add to Cart</a></center>

            </div>
        </div>



                <button className="btn btn-dark" onClick={this.handleBack}>
                    Back
        </button>
            </div>
            );    }
}
        


export default BookDetails;