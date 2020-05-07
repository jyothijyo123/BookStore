import React, { Component } from 'react';
class AuthorPreference extends Component {
    state = {};
    handleBack = () => {
        this.props.history.push("/books");
    };
    render() {
        return (
            <div>
            <h1 className="text-center">Author Preference</h1>
            <button className="btn btn-dark" onClick={this.handleBack}>
                    Back
        </button>
            </div>
        );
    }
}

export default AuthorPreference;