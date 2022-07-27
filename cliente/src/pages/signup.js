import React from 'react';
import Container from '../components/container';
import Card from '../components/card/card';
import InputText from '../components/inputText/inputText';
import RisedButton from '../components/risedButton/risedButton';
import { createUser } from '../api/user.api';
import Modal from '../components/modal/modal';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();
  const [modal, setModal] = React.useState({
    show: false,
    title: '',
    text: '',
    textButton: ''
  });
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [data, setData] = React.useState({
    name: "",
    lastName: "",
    email: "",
    cellphone: "",
    address: "",
    password: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleClick = async (event) => {
    event.preventDefault();

    if (isDataMissing()) {
      console.log("checkform");
      setModal({
        show: true,
        title: "Error",
        text: "Por favor, complete todos los campos",
        textButton: "Aceptar",
      });
    } else if (data.password !== confirmPassword) {
      setModal({
        show: true,
        title: "Error",
        text: "Las contraseñas no coinciden",
        textButton: "Aceptar",
      });
    } else {
      try {
        let response = await createUser(data);
        if (response.status === "success") {
          setModal({
            show: true,
            title: "Usuario creado",
            text: response.message,
            textButton: "Aceptar",
          });
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const isDataMissing = () => {
    if (data.name === '' || data.lastName === '' || data.email === '' || data.cellphone === '' || data.address === '' || data.password === '' || confirmPassword === '') {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container>
      <Modal modal={modal} setModal={setModal} />
      <Card cardTitle="Registro">
        <form>
          <InputText onChange={handleChange} id="name" label="Nombre(s)" type="text" />
          <InputText onChange={handleChange} id="lastName" label="Apellidos" type="text" />
          <InputText onChange={handleChange} id="email" label="Correo electrónico" type="email" />
          <InputText onChange={handleChange} id="cellphone" label="Teléfono" type="number" />
          <InputText onChange={handleChange} id="address" label="Dirección" type="text" />
          <InputText onChange={handleChange} id="password" label="Contraseña" type="password" />
          <InputText onChange={e => setConfirmPassword(e.target.value)} id="confirmPassword" label="Confirmar contraseña" type="password" />
          <RisedButton text='Registrar' onClick={handleClick} />
        </form>
      </Card>
    </Container>
  );
}

export default Signup;