  import React,{Component}  from "react";
  class Sidebar extends Component{
      render(){

  return(
  
  
  <div style={{width:"100%",color:"blue"}}>
      <div className="jumbotron jumbotron-fluid bg-info" style={{paddingBottom:"45%"}}>
  <div className="container" >
    <h1 className="display-6" >Dashboard</h1><br></br>
    
  </div>
  <div>
    <ul>
      
      <div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Product Management
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/proadd">Add</a>
    <a className="dropdown-item" href="/prodel">Delete</a>
    
  </div>

</div>
<br></br>

<div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Category Management
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/catadd">Add</a>
    <a className="dropdown-item" href="/catdel">Delete</a>
    
  </div>

</div>
      <br></br>
      
      <div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  User Management
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
    <a className="dropdown-item" href="/User">User Details</a>
    
  </div>
</div>
      <br></br>
      
      <div className="button">
  <button className="btn btn-outline-secondary bg-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Review and Rating
  </button>
  </div>
      <br></br>
    
      <div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Author Details Update
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
    <a className="dropdown-item" href="/AuthorDetailsAdd">Author Details Insert</a>
    <a className="dropdown-item" href="/AuthorDetailsDel">Author Details Delete</a>
    
  </div>
</div>
      
    </ul>
  </div>
</div>
      </div>
      )
}
  }

export default Sidebar;