import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddAccount = (props) => {

    const [newAccount, setNewAccount] = useState({
        id: "", name: "", lastname: "", phone: "", email: ""
    })

    let navigate = useNavigate();

    const changeHandler = (event) => {
        let id = event.target.id;
        let newAccountCopy = { ...newAccount };
        newAccountCopy[id] = event.target.value;
        setNewAccount(newAccountCopy)
    }

    const addNewAccount = () => {
        props.addNewAccountToState(newAccount)
        navigateToAccounts()
    }

    const navigateToAccounts = () => {
        navigate("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Add Account</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input type="text" id="id" placeholder="id" className="form-control"
                                onChange={changeHandler} /> <br />
                            <input type="text" id="name" placeholder="name" className="form-control"
                                onChange={changeHandler} /> <br />
                            <input type="text" id="lastname" placeholder="lastname" className="form-control"
                                onChange={changeHandler} /> <br />
                            <input type="text" id="phone" placeholder="phone" className="form-control"
                                onChange={changeHandler} /> <br />
                            <input type="email" id="email" placeholder="email" className="form-control"
                                onChange={changeHandler} /> <br />
                            <button onClick={addNewAccount} className="btn btn-primary form-control">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAccount;