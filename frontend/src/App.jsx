import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navigation/Navbar";
import DepartmentDetail from "./components/Department/DepartmentDetail";
import EmployeeDetail from "./components/staff/EmployeeDetail";
import DepartmentList from "./components/department/DepartmentList";
import EmployeeList from "./components/staff/EmployeeList";
import AddEmployee from "./components/staff/AddEmployee";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Router>
            <NavBar />
            <Switch>
                <Route path="/employee" exact component={EmployeeList} />
                <Route path="/department" exact component={DepartmentList} />
                <Route path="/employee/AddEmployee" exact component={AddEmployee} />
                <Route path="/employee/:id" exact component={EmployeeDetail} />
                <Route path="/department/:id" exact component={DepartmentDetail} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
