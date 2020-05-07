import React, { Component } from 'react';
class NewReleases extends Component {
    state = {};
    handleBack = () => {
        this.props.history.push("/books");
    };
    render() {
        return (
            <div>
            <h1 className="text-center">New Releases</h1>
            <div className="fluid-container">       
<div className="row">
            <div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-6.jpg" class="card-img-top" style={{height: "25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Data Modeling for MongoDB</h5>
    <p class="card-text">Publish: 2020</p>
    <a href="#" class="btn btn-dark">Add to Cart</a>
  </div>
</div>


<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-7.jpg" class="card-img-top" style={{height: "25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">The Road to Learn React</h5>
    <p class="card-text"> Publish: 2020</p>
    <a href="#" class="btn btn-dark">Add to Cart</a>
  </div>
</div>
</div>

</div>


            <button className="btn btn-dark" onClick={this.handleBack}>
                    Back
        </button>
            </div>
        );
    }
}

export default NewReleases;