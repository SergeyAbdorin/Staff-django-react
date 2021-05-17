import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function DepartmentList() {

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/department/'
        }).then(response => {
            setDepartments(response.data)
        })
    }, [])

  return (
    <div className="container">
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                          <th scope="col">Наименование отдела</th>
                        </tr>
                    </thead>
                    <tbody>
                            {departments.map(d =>(
                            <tr className="align-bottom">
                                <Link className="link" to={{ pathname: `/department/${d.id}/`, fromDashboard: false}}>{d.title}</Link>
                            </tr>
                   ))}
                    </tbody>
                </table>
            </div>
    </div>
  );
}

export default DepartmentList;
