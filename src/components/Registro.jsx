import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = () => {
  return (
    <>
      <SocialButton icon="fa-brands fa-facebook" />
      <SocialButton icon="fa-brands fa-github" />
      <SocialButton icon="fa-brands fa-linkedin" />
      <Formulario />
      <Alert/>
    </>
  );
};

export default Registro;
