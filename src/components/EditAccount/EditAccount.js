import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditAccount = ({ accounts }) => {

    const [account, setAccount] = useState({
        id: "", name: "", lastname: "", phone: "", email: ""
    })

    let { id } = useParams();

    useEffect(() => {
        const accountForEdit = accounts.filter(acc => acc.id == id)[0];
        setAccount(accountForEdit);
        console.log(accountForEdit);
    }, [id, accounts]);

    return account?(
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Edit Account</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input type="text" id="name" className="form-control" defaultValue={account.name}/><br />
                            <input type="text" id="lastname" className="form-control" /><br />
                            <input type="text" id="phone" className="form-control" /><br />
                            <input type="text" id="email" className="form-control" /><br />
                            <button className="form-control btn btn-info">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ): null;
}

export default EditAccount;