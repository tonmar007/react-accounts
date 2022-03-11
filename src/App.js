import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

class App extends Component {
    state = {
        accounts : [
            {id:1, name:"Marko", lastname:"Toncic", phone:"11-11-11", email:"toki@gmail.com"},
            {id:2,name:"Milan", lastname:"Toncic", phone:"22-22-22", email:"toncic@gmail.com"}
        ]
    }

    addNewAccountToState = (acc) => {
        this.setState({
            accounts : [...this.state.accounts,acc]
        })
    }

    deleteAccount = (id) => {
        const accountsCopy = [...this.state.accounts];
        const newCopyAccounts = accountsCopy.filter(account => account.id !== id);
        this.setState({accounts : newCopyAccounts})
    }

    editAccountToState = (acc) => {
        const copyAccounts = [ ...this.state.accounts];
        let accountPossition = copyAccounts.map(account => account.id).indexOf(acc.id);
        copyAccounts[accountPossition] = acc;
        this.setState({accounts : copyAccounts})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    }

    render() {
        return (
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<AccountsTable accounts={this.state.accounts} />} />
                    <Route path="/add" element={<AddAccount addNewAccountToState={this.addNewAccountToState}/>} />
                    <Route path="/edit" element={<EditTable deleteAccount={this.deleteAccount} accounts={this.state.accounts}/>} />
                    <Route path="/edit/:id" element={<EditAccount accounts={this.state.accounts}
                    editAccountToState={this.editAccountToState}/>} />
                </Routes>
            </Router>
        )
    }
}

export default App;