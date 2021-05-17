import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function EmployeeList() {

    const [employee, setEmployee] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/employee/'
        }).then(response => {
            setEmployee(response.data)
        })
    }, [])

  return (
    <div className="container">
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                          <th scope="col">Фамилия</th>
                          <th scope="col">Имя</th>
                          <th scope="col">Отчество</th>
                          <th scope="col">Должность</th>
                          <th scope="col">Отдел</th>
                          <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                            {employee.map(e =>(
                            <tr className="align-bottom">
                                <td>{e.last_name}</td>
                                <td>{e.first_name}</td>
                                <td>{e.middle_name}</td>
                                <td>{e.position}</td>
                                <td>{e.department}</td>
                                <td>
                                    <Link className="link" to={{ pathname: `/employee/${e.id}/`,
                                          fromDashboard: false}}>Профиль</Link>
                                </td>
                            </tr>
                   ))}
                    </tbody>
                </table>
            </div>
            <Link className="nav-link" to={{ pathname: `/employee/AddEmployee/`, fromDashboard: false}}>Добавить сотрудника</Link>
    </div>
  );
}

export default EmployeeList;
