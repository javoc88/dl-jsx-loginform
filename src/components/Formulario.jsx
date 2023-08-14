import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const validateData = () => {
    if (password != confirmPassword) {
      //componente Alert - "Contraseñas no coinciden"
      // test
      alert("Contraseñas no coinciden");
      return;
    }
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      //componente Alert - "Completar todos los campos"
      // test
      alert("Completar todos los campos");
      return;
    }

    // componente Alert - "Cuenta creada exitosamente"
    // test
    alert("Cuenta creada exitosamente");
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
        <Button type="submit">Registrarse</Button>
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
