import React, { Component } from 'react';
class MixedCollection extends Component {
    state = {};
    handleBack = () => {
        this.props.history.push("/books");
    };
    render() {
        return (
            <div>
            <h1 classNameName="text-center">Mixed Collection</h1>

            <div className="fluid-container">       
<div className="row">
            <div className="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-1.jpg" className="card-img-top" style={{height:"25rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hands-On Full Stack Development with Go</h5>
    <p className="card-text">  Category: "Full Stack Development"</p>
    <a href="/mycart" className="btn btn-dark">Add to Cart</a>
  </div>
</div>



<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-2.jpg" class="card-img-top" style={{height:"25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">React</h5>
    <p class="card-text">  Category: "ReactJS"</p>
    <a href="/mycart" class="btn btn-dark">Add to Cart</a>
  </div>
</div>
            

<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-3.jpg" class="card-img-top" style={{height:"25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Learning Node-2</h5>
    <p class="card-text"> Category: "NodeJS"</p>
    <a href="/mycart" class="btn btn-dark">Add to Cart</a>
  </div>
</div>


<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-4.jpg" class="card-img-top" style={{height:"25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Up and Going JS</h5>
    <p class="card-text"> Category: "JS"</p>
    <a href="/mycart" class="btn btn-dark">Add to Cart</a>
  </div>
</div>


<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-5.jpg" class="card-img-top" style={{height:"25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Web Design Playground</h5>
    <p class="card-text"> Category: "HTML,CSS & RWD"</p>
    <a href="/mycart" class="btn btn-dark">Add to Cart</a>
  </div>
</div>


<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-6.jpg" class="card-img-top" style={{height:"25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Data Modeling for MongoDB</h5>
    <p class="card-text">Category: "MongoDB"</p>
    <a href="/mycart" class="btn btn-dark">Add to Cart</a>
  </div>
</div>


<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-7.jpg" class="card-img-top" style={{height:"25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">The Road to Learn React</h5>
    <p class="card-text"> Category: "ReactJS"</p>
    <a href="/mycart" class="btn btn-dark">Add to Cart</a>
  </div>
</div>


<div class="card m-5" style={{width: "18rem"}}>
  <img src="/img/product-8.jpg" class="card-img-top" style={{height:"25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">The Full Stack Developer</h5>
    <p class="card-text">Category: "Full Stack Development"</p>
    <a href="/mycart" class="btn btn-dark">Add to Cart</a>
  </div>
</div>

</div>

</div> <button className="btn btn-dark" onClick={this.handleBack}>
                    Back
        </button>
            </div>
           
        );
    }
}

export default MixedCollection;