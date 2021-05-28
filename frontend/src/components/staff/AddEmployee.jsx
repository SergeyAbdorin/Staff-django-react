import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;


function AddEmployee() {

    const [ last_name, setLast_name ] = useState("")
    const [ first_name, setFirst_name ] = useState("")
    const [ middle_name, setMiddle_name ] = useState("")
    const [ position, setPosition ] = useState("")
    const [ birthday, setBirthday ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ phone_number, setPhone_number ] = useState("")
    const [ image, setImage ] = useState(null)
    const [ department, setDepartment ] = useState(null)

    const history = useHistory();

    const [ departments, setDepartments ] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/department/'
        }).then(response => {
            setDepartments(response.data)
        })
    }, [])

    const AddEmployeeInfo = async () => {
        let formField = new FormData()

        formField.append('last_name', last_name)
        formField.append('first_name', first_name)
        formField.append('middle_name', middle_name)
        formField.append('position', position)
        formField.append('birthday', birthday)
        formField.append('email', email)
        formField.append('department', department)
        formField.append('phone_number', phone_number)
        if(image !== null) {
            formField.append('image', image)
        }

        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/employee/',
            data: formField
            //headers: {'Content-Type': 'application/json; charset=UTF-8'},
        }).then((response) => {
            console.log(response.data);
            history.push('/employee')
            .catch(error => {
                console.log(error)
            })
        })
    }

    return (
        <div className="container">
            <div className="form-group">
              <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Фамилия"
                    name="last_name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)} />
              </div>
              <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Имя"
                    name="first_name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)} />
              </div>
              <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Отчество"
                    name="middle_name"
                    value={middle_name}
                    onChange={(e) => setMiddle_name(e.target.value)} />
              </div>
              <div className="form-group">
                <input
                    type="date"
                    className="form-control form-control-lg"
                    placeholder="Дата рождения"
                    name="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)} />
              </div>
              <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Должность"
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)} />
              </div>
              <div className="form-group">
                <select
                    className="form-control form-control-lg"
                    placeholder="Отдел"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                    >
                        <option selected>Выберите отдел</option>
                        {departments.map(d =>(
                            <option value={d.id} name={d.id}>
                                {d.title}
                            </option>
                        ))}
                </select>
              </div>
              <div className="form-group">
                <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="Номер телефона"
                    name="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)} />
              </div>
              <div className="form-group">
                <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <input
                    type="file"
                    className="form-control form-control-lg"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])} />
              </div>
              <div className="form-group">
                <button
                    className="btn btn-success"
                    onClick={AddEmployeeInfo}>Добавить</button>
              </div>
            </div>
        </div>
    );
};

export default AddEmployee;