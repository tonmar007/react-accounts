import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditAccount = ({ accounts, editAccountToState }) => {

    let { id } = useParams();
    let navigate = useNavigate();

    const [account, setAccount] = useState(accounts.filter(acc => acc.id == id)[0])

    const editAccount = () => {
        editAccountToState(account);
        navigateToAccounts()
    }

    const navigateToAccounts = () => {
        navigate("/")
    }

    return account ? (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Edit Account</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input onChange={e => { setAccount({ ...account, name: e.target.value }) }}
                                type="text" id="name" className="form-control" value={account.name} /><br />
                            <input onChange={e => { setAccount({ ...account, lastname: e.target.value }) }}
                                type="text" id="lastname" className="form-control" value={account.lastname} /><br />
                            <input onChange={e => { setAccount({ ...account, phone: e.target.value }) }}
                                type="text" id="phone" className="form-control" value={account.phone} /><br />
                            <input onChange={e => { setAccount({ ...account, email: e.target.value }) }}
                                type="text" id="email" className="form-control" value={account.email} /><br />
                            <button onClick={editAccount} className="form-control btn btn-info">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

export default EditAccount;