import React,{Component}  from "react";
import NavBar from './Navbar';
import Sidebar from './Sidebar';
class Admin extends Component{
    render(){
        return(
            <div>
                <div>
                    <NavBar/>
                </div>
            <div>
            <div className="row p-4">
                <div className="col-3 boder bordersecondary">
                    <Sidebar/>
                </div>
                <div className="col-9">
                <div className="jumbotron jumbotron-fluid bg-info">
  <div className="container" >
    <h1 className="display-5" >Welcome To Admin DashBoard</h1>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                    )
    }
}
export default Admin;