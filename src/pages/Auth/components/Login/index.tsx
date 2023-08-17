import { Form, Spinner } from "react-bootstrap";
import { Input } from "../../../../types";
import * as S from "../../styles";
import useFirebaseAuth from "../../../../../hooks/useFirebaseAuth";

interface LoginProps {
  inputs: Input[];
  password: string | undefined;
  email: string | undefined;
}

export default function Login({ inputs, password, email }: LoginProps) {
  const [{ login, isLogginIn }] = useFirebaseAuth();
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    } else {
      alert("Insira o email e a senha!");
    }
  }
  return (
    <>
      <S.TitleDiv>
        <h3>Crie sua conta!</h3>
      </S.TitleDiv>
      <S.ContainerForm style={{ height: "30vh" }}>
        {inputs.map((input) => {
          if (
            input.placeholder === "Email" ||
            input.placeholder === "Password"
          ) {
            return (
              <S.FloatingLabel label={input.placeholder} key={input.id}>
                <Form.Control
                  type={input.type}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(e) => input.setter(e.target.value)}
                  required
                />
              </S.FloatingLabel>
            );
          }
        })}
        <S.ButtonContainer>
          <S.SubmitButton type="submit" onClick={(e) => handleClick(e)}>
            {isLogginIn ? <Spinner animation="border" /> : "Entrar"}
          </S.SubmitButton>
        </S.ButtonContainer>
      </S.ContainerForm>
    </>
  );
}
