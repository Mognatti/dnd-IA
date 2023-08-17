import useFirebaseAuth from "../../../../../hooks/useFirebaseAuth";
import { Input } from "../../../../types";
import * as S from "../../styles";
import { Form, Spinner } from "react-bootstrap";
interface CreateAccountProps {
  inputs: Input[];
  password: string | undefined;
  passwordConfirmation: string | undefined;
  email: string | undefined;
  nickname: string | undefined;
}

export default function CreateAccount({
  inputs,
  password,
  passwordConfirmation,
  email,
  nickname,
}: CreateAccountProps) {
  const [{ createUser, isCreating }] = useFirebaseAuth();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const btn: HTMLButtonElement = e.target as HTMLButtonElement;
    console.log(btn.parentElement);
    if (password === passwordConfirmation && email && password && nickname) {
      createUser({ nickname, email, password });
    } else if (!password || !email) {
      alert("Todos os campos são obrigatórios");
    } else if (password !== passwordConfirmation) {
      alert("As senhas precisam ser iguais");
    }
  }

  return (
    <>
      <S.TitleDiv>
        <h3>Crie sua conta!</h3>
      </S.TitleDiv>
      <S.ContainerForm>
        {inputs.map((input: Input) => (
          <S.FloatingLabel label={input.placeholder} key={input.id}>
            <Form.Control
              type={input.type}
              placeholder={input.placeholder}
              value={input.value}
              onChange={(e) => input.setter(e.target.value)}
              required
            ></Form.Control>
          </S.FloatingLabel>
        ))}
        <S.ButtonContainer>
          <S.SubmitButton
            type="submit"
            onClick={(e) => handleClick(e)}
            disabled={password !== passwordConfirmation}
          >
            {isCreating ? <Spinner animation="border" /> : "Cadastrar"}
          </S.SubmitButton>
        </S.ButtonContainer>
      </S.ContainerForm>
    </>
  );
}
