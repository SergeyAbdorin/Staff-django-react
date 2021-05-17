import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import axios from 'axios';



function AddEmployee() {

    const [ image, setImage ] = useState(null)
    const [ last_name, setLast_name ] = useState("")
    const [ first_name, setFirst_name ] = useState("")
    const [ middle_name, setMiddle_name ] = useState("")
    const [ birthday, setBirthday ] = useState("")
    const [ position, setPosition ] = useState("")
    const [ department, setDepartment ] = useState("")
    const [ phone_number, setPhone_number ] = useState("")
    const [ email, setEmail ] = useState("")

    const history = useHistory();

    const AddEmployeeInfo = async () => {
        let formfield = new FormData()

        formfield.append('last_name', last_name)
        formfield.append('first_name', first_name)
        if(middle_name != "") {
            formfield.append('middle_name', middle_name)
        }
        formfield.append('birthday', birthday)
        if(position != "") {
            formfield.append('position', position)
        }
        formfield.append('department', department)
        formfield.append('phone_number', phone_number)
        formfield.append('email', email)
        if(image != null) {
            formfield.append('image', image)
        }

        await axios({
            method: "post",
            url: 'http://127.0.0.1:8000/api/employee/',
            data: formfield
        }).then((response) => {
            console.log(response.data)
            history.push('/employee/')
        })
        }

    return (
        <div className="container">
            <form className="row g-3">
              <div className="col-md-4">
                <label for="validationServer01" className="form-label">Фамилия</label>
                <input type="text" className="form-control is-valid" id="validationServer01"
                    name="last_name" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
              </div>
              <div className="col-md-4">
                <label for="validationServer02" className="form-label">Имя</label>
                <input type="text" className="form-control is-valid" id="validationServer02"
                    name="first_name" value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
              </div>
              <div className="col-md-4">
                <label for="validationServer02" className="form-label">Отчество</label>
                <input type="text" className="form-control is-valid" id="validationServer02"
                    name="middle_name" value={middle_name} onChange={(e) => setMiddle_name(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label for="validationServer03" className="form-label">Дата рождения</label>
                <input type="date" className="form-control is-invalid" id="validationServer03"
                    name="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
              </div>
              <div className="col-md-4">
                <label for="validationServer02" className="form-label">Должность</label>
                <input type="text" className="form-control is-valid" id="validationServer02"
                    name="position" value={position} onChange={(e) => setPosition(e.target.value)} />
              </div>
              <div className="mb-3">
                 <label for="validationServer02" className="form-label">Отдел</label>
                 <select className="form-control is-valid" id="validationServer02"
                    name="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="">Выберите отдел</option>
                        <option value="Администрация">Администрация</option>
                        <option value="Дизайнеры">Дизайнеры</option>
                        <option value="Разработчики">Разработчики</option>
                 </select>
              </div>
              <div className="col-md-4">
                <label for="validationServer02" className="form-label">Номер телефона</label>
                <input type="tel" className="form-control is-valid" id="validationServer02"
                    name="phone_number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
              </div>
              <div className="col-md-4">
                <label for="validationServer02" className="form-label">Электронная почта</label>
                <input type="email" className="form-control is-valid" id="validationServer02"
                    name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="file" className="form-control" aria-label="file example"
                    name="image" onChange={(e) => setImage(e.target.file[0])} />
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit" onClick={AddEmployeeInfo}>Добавить</button>
              </div>
            </form>
        </div>
    );
};

export default AddEmployee;