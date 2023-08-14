import Alert from "./Alert";
import Card from "react-bootstrap/Card";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = ({setAlert}) => {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <h1>Crea una cuenta</h1>
          <div className="icons">
            <SocialButton icon="fa-brands fa-2x fa-border fa-facebook" />
            <SocialButton icon="fa-brands fa-2x fa-border fa-github" />
            <SocialButton icon="fa-brands fa-2x fa-border fa-linkedin" />
          </div>
          <p className="registerText">O usa tu email para registrarte</p>
          <Formulario />
          <Alert />
        </Card.Body>
      </Card>
    </>
  );
};

export default Registro;
