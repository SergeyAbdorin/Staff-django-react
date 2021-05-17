import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function DepartmentDetail({ match }) {

    const [department, setDepartment] = useState({})
    const [staff, setStaff] = useState([])
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/department/${id}/`
        }).then(response => {
            setDepartment(response.data)
            setStaff(response.data.staff)
        })
    }, [id])

    return (
        <div className="container">
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>Список сотрудников отдела: <strong>{department.title}</strong></tr>
                        <tr>
                          <th scope="col">Фамилия</th>
                          <th scope="col">Имя</th>
                          <th scope="col">Отчество</th>
                          <th scope="col">Должность</th>
                          <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                            {staff.map(e =>(
                            <tr className="align-bottom">
                                <td>{e.last_name}</td>
                                <td>{e.first_name}</td>
                                <td>{e.middle_name}</td>
                                <td>{e.position}</td>
                                <td>
                                    <Link className="link" to={{ pathname: `/employee/${e.id}/`,
                                          fromDashboard: false}}>Профиль</Link>
                                </td>
                            </tr>
                   ))}
                    </tbody>
                </table>
            </div>
    </div>
    )
}

export default DepartmentDetail;