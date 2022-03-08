import React, { Component } from "react";
import { useNavigate } from "react-router-dom"

class AddAccount extends Component {
    state = {
        newAccount : {
            id : "", name : "", lastname : "", phone : "", email : ""
        }
    }

    changeHandler = (event) => {
        let id = event.target.id;
        let newAccountCopy = {...this.state.newAccount};
        newAccountCopy[id] = event.target.value;
        this.setState({newAccount : newAccountCopy});
    }

    addNewAccount = () => {
        this.props.addNewAccountToState(this.state.newAccount)
        // this.navigateToAccounts()
    }

    // navigateToAccounts = () => {
    //     let navigate = useNavigate();
    //     navigate("/")
    // }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">Add Account</h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" id="id" placeholder="id" className="form-control" 
                                onChange={this.changeHandler}/> <br />
                                <input type="text" id="name" placeholder="name" className="form-control" 
                                onChange={this.changeHandler}/> <br />
                                <input type="text" id="lastname" placeholder="lastname" className="form-control" 
                                onChange={this.changeHandler}/> <br />
                                <input type="text" id="phone" placeholder="phone" className="form-control" 
                                onChange={this.changeHandler}/> <br />
                                <input type="email" id="email" placeholder="email" className="form-control" 
                                onChange={this.changeHandler}/> <br />
                                <button onClick={this.addNewAccount} className="btn btn-primary form-control">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAccount;