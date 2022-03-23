import React, { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

function App() {
    const [accounts, setAccounts] = useState([
            { id: 1, name: "Marko", lastname: "Toncic", phone: "11-11-11", email: "toki@gmail.com" },
            { id: 2, name: "Milan", lastname: "Toncic", phone: "22-22-22", email: "toncic@gmail.com" }
        ])

    const addNewAccountToState = (acc) => {
        setAccounts([...accounts, acc])
    }

    const deleteAccount = (id) => {
        const newCopyAccounts = accounts.filter(account => account.id !== id);
        setAccounts(newCopyAccounts)
    }

    const editAccountToState = (acc) => {
        let accountPossition = accounts.map(account => account.id).indexOf(acc.id);
        accounts[accountPossition] = acc;
        setAccounts(accounts)
    }

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<AccountsTable accounts={accounts} />} />
                <Route path="/add" element={<AddAccount addNewAccountToState={addNewAccountToState} />} />
                <Route path="/edit" element={<EditTable deleteAccount={deleteAccount} accounts={accounts} />} />
                <Route path="/edit/:id" element={<EditAccount accounts={accounts}
                editAccountToState={editAccountToState} />} />
            </Routes>
        </Router>
    )
}

export default App;