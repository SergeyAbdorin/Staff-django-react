import React, { useEffect, useState } from 'react';
import { useHistory  } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';


function EmployeeDetail({ match }) {

    const [employee, setEmployee] = useState({})
    const history = useHistory()
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/employee/${id}/`
        }).then(response => {
            setEmployee(response.data)
        })
    }, [id])

    const deleteEmployee = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/employee/${id}/`)
        history.push('/employee/')
    }

    return (
        <div className="container">
            <div className="table-responsive">
                <div>
                    <img src={employee.image} height="200" width="200"/>
                </div>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                          <th scope="col">Профиль сотрудника</th>
                          <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                                <tr>
                                    <td>Фамилия</td>
                                    <td>{employee.last_name}</td>
                                </tr>
                                <tr>
                                    <td>Имя</td>
                                    <td>{employee.first_name}</td>
                                </tr>
                                <tr>
                                    <td>Отчество</td>
                                    <td>{employee.middle_name}</td>
                                </tr>
                                <tr>
                                    <td>Дата рождения</td>
                                    <td>{employee.birthday}</td>
                                </tr>
                                <tr>
                                    <td>Должность</td>
                                    <td>{employee.position}</td>
                                </tr>
                                <tr>
                                    <td>Отдел</td>
                                    <td>{employee.department}</td>
                                </tr>
                                <tr>
                                    <td>Номер телефона</td>
                                    <td>{employee.phone_number}</td>
                                </tr>
                                <tr>
                                    <td>Электронная почта</td>
                                    <td>{employee.email}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><Link className="link" onClick={() => deleteEmployee(employee.id)}>Удалить профиль сотрудника</Link></td>
                                </tr>
                    </tbody>
                </table>
            </div>
    </div>
    )
}

export default EmployeeDetail;