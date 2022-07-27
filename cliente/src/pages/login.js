import React from 'react'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../api/user.api';
import Card from '../components/card/card';
import Container from '../components/container';
import InputText from '../components/inputText/inputText';
import Modal from '../components/modal/modal';
import RisedButton from '../components/risedButton/risedButton';

function Login() {

  const navigate = useNavigate();
  const [modal, setModal] = React.useState({
    show: false,
    title: '',
    text: '',
    textButton: ''
  });
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  const handleClick = async (event) => {
    event.preventDefault();

    if (isDataMissing()) {
      setModal({
        show: true,
        title: "Error",
        text: "Por favor, complete todos los campos",
        textButton: "Aceptar",
      });
    } else {
      try {
        let response = await userLogin(data);
        if (response.status === "success") {
          setModal({
            show: true,
            title: "Bienvenido",
            text: response.message,
            textButton: "Aceptar",
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        setModal({
          show: true,
          title: "Error",
          text: error.response.data.message,
          textButton: "Aceptar",
        });
      }
    }
  }

  const isDataMissing = () => {
    return data.email === "" || data.password === "";
  }

  return (
    <Container>
      <Modal modal={modal} setModal={setModal} />
      <Card cardTitle="LogIn">
        <form>
          <InputText onChange={handleChange} id="email" label="Correo electrónico" type="email" />
          <InputText onChange={handleChange} id="password" label="Contraseña" type="password" />
          <RisedButton text='Ingresar' onClick={handleClick} />
        </form>
      </Card>
    </Container>
  )
}

export default Login;