import React, { Component } from 'react'
	import { User } from './components'
	
	class User extends Component {
	  constructor() {
	    super()
	    this.state = {
          username:'',
	      email: '',
          password: '',
          address:'',
          contactNo:'',
	      errors: {}
		}
		
	
	    this.onChange = this.onChange.bind(this)
	    this.onSubmit = this.onSubmit.bind(this)
	  }
	
	  onChange(e) {
	    this.setState({ [e.target.name]: e.target.value })
	  }
	  
	  onSubmit(e) {
	    e.preventDefault()
	
	    const user = {
          username:this.state.username,
	      email: this.state.email,
          password: this.state.password,
          address:this.state.address,
          contactNo:this.state.contactNo,
	    }
	
	    login(user).then(res => {
	      if (res) {
	        this.props.history.push(`/Navbar`)
	      }
	    })
	  }
	
	  render() {
	    return (
	      <div className="container">
	        <div className="row">
	          <div className="col-md-6 mt-5 mx-auto">
	            <form noValidate onSubmit={this.onSubmit}>
	              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

	              <div className="form-group">
	                <label htmlFor="username"> username</label>
	                <input
	                  type="username"
	                  className="form-control"
	                  name="username"
	                  placeholder="Enter Name"
	                  value={this.state.username}
	                  onChange={this.onChange}
	                />
	              </div>

	              <div className="form-group">
	                <label htmlFor="email">Email address</label>
	                <input
	                  type="email"
	                  className="form-control"
	                  name="email"
	                  placeholder="Enter email"
	                  value={this.state.email}
	                  onChange={this.onChange}
	                />
	              </div>
	              <div className="form-group">
	                <label htmlFor="password">Password</label>
	                <input
	                  type="password"
	                  className="form-control"
	                  name="password"
	                  placeholder="Password"
	                  value={this.state.password}
	                  onChange={this.onChange}
	                />
	              </div>
                  <div className="form-group">
	                <label htmlFor="address"> address</label>
	                <input
	                  type="address"
	                  className="form-control"
	                  name="address"
	                  placeholder="Enter Address"
	                  value={this.state.address}
	                  onChange={this.onChange}
	                />
	              </div>
                  <div className="form-group">
	                <label htmlFor="contactNo">contactNo</label>
	                <input
	                  type="contactNo"
	                  className="form-control"
	                  name="contactNo"
	                  placeholder="Enter your phone number"
	                  value={this.state.contactNo}
	                  onChange={this.onChange}
	                />
	              </div>
	              <button
	                type="submit"
	                className="btn btn-lg btn-primary btn-block"
	              >
	                Sign in
	              </button>
	            </form>
	          </div>
	        </div>
	      </div>
	    )
	  }
	}
	
	export default User;