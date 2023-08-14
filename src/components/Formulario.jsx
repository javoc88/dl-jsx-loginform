import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({setAlert}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const validateData = (e) => {
   e.preventDefault()
    if (password != confirmPassword) {
      setAlert({
        msg: "Contraseñas no coinciden",
        color: "danger",
      });
      return;
    }
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setAlert({
        msg: "Completar todos los campos",
        color: "warning",
      });
      return;
    }

    setAlert({
      msg: "Cuenta creada exitosamente",
      color: "success",
    });
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      {/* Formulario con React Bootstrap */}
      <Form onSubmit={validateData}>
        <Form.Group className="mb-2" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Nombre"
            aria-label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formPassword">
          <Form.Control
            type="password"
            aria-label="Password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            aria-label="Confirm Password"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit" variant="success">
            Registrarse
          </Button>
        </div>
      </Form>

      {/* formulario sin React Bootstrap */}
      {/* <form onSubmit={validateData}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="confirm password"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <Button type="submit">Registrarse</Button>
        </div>
      </form> */}
    </>
  );
};

export default Formulario;
