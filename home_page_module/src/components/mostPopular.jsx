import React, { Component } from 'react';
class MostPopular extends Component {
    state = {};
    handleBack = () => {
        this.props.history.push("/books");
    };
    render() {
      
        return (
            <div>
            <h1 className="text-center">Most Popular</h1>
            <div className="fluid-container">       
<div className="row">
           
            <div className="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-1.jpg" className="card-img-top"style={{height: "25rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hands-On Full Stack Development with Go</h5>
    <p className="card-text">  Rating: 10/10</p>
    <a href="#" className="btn btn-dark">Add to Cart</a>
  </div>
</div>

<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-4.jpg" class="card-img-top" style={{height: "25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Up and Going JS</h5>
    <p class="card-text"> Rating: 7/10</p>
    <a href="#" class="btn btn-dark">Add to Cart</a>
  </div>
</div>


<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-5.jpg" class="card-img-top" style={{height: "25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Web Design Playground</h5>
    <p class="card-text"> Rating: 10/10</p>
    <a href="#" class="btn btn-dark">Add to Cart</a>
  </div>
</div>


<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-6.jpg" class="card-img-top" style={{height: "25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Data Modeling for MongoDB</h5>
    <p class="card-text">Rating: 6/10</p>
    <a href="#" class="btn btn-dark">Add to Cart</a>
  </div>
</div>


<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-7.jpg" class="card-img-top" style={{height: "25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">The Road to Learn React</h5>
    <p class="card-text"> Rating: 9/10</p>
    <a href="#" class="btn btn-dark">Add to Cart</a>
  </div>
</div>
</div>
            
            <button className="btn btn-dark" onClick={this.handleBack}>
                    Back
        </button>
        </div>
            </div>
            
        );
    }
}

export default MostPopular;