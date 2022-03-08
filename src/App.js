import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";

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

    render() {
        return (
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<AccountsTable accounts={this.state.accounts} />} />
                    <Route path="/add" element={<AddAccount addNewAccountToState={this.addNewAccountToState}/>} />
                </Routes>
            </Router>
        )
    }
}

export default App;