import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


function AddAccount(props) {

    const [newAccount, setNewAccount] = useState({
        id: "", name: "", lastname: "", phone: "", email: ""
    })

    let navigate = useNavigate();

    const idInput = useRef();

    useEffect(() => {
        idInput.current.focus();
    },[])

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
                            <input type="text" ref={idInput} placeholder="id" className="form-control"
                                onChange={e => { setNewAccount({ ...newAccount, id: e.target.value }) }} /> <br />
                            <input type="text" placeholder="name" className="form-control"
                                onChange={e => { setNewAccount({ ...newAccount, name: e.target.value }) }} /> <br />
                            <input type="text" placeholder="lastname" className="form-control"
                                onChange={e => { setNewAccount({ ...newAccount, lastname: e.target.value }) }} /> <br />
                            <input type="text" placeholder="phone" className="form-control"
                                onChange={e => { setNewAccount({ ...newAccount, phone: e.target.value }) }} /> <br />
                            <input type="email" placeholder="email" className="form-control"
                                onChange={e => { setNewAccount({ ...newAccount, email: e.target.value }) }} /> <br />
                            <button onClick={addNewAccount} className="btn btn-primary form-control">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAccount;