import * as S from "./styles";
import { useState } from "react";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";
import { Navigate } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

export default function Auth() {
  const [nickname, setNickname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();
  const [createUser, setCreateUser] = useState<boolean>(true);
  const [{ user }] = useFirebaseAuth();
  const inputs = [
    {
      id: 1,
      placeholder: "Nickname",
      value: nickname,
      setter: setNickname,
      type: "text",
    },
    {
      id: 2,
      placeholder: "Email",
      value: email,
      setter: setEmail,
      type: "email",
    },
    {
      id: 3,
      placeholder: "Password",
      value: password,
      setter: setPassword,
      type: "password",
    },
    {
      id: 4,
      placeholder: "Password Confirmation",
      value: passwordConfirmation,
      setter: setPasswordConfirmation,
      type: "password",
    },
  ];

  if (user) return <Navigate to="/" />;
  if (createUser)
    return (
      <S.Container>
        <CreateAccount
          {...{ inputs, password, passwordConfirmation, email, nickname }}
        />
        <S.ChangeForm onClick={() => setCreateUser(!createUser)}>
          Já tem uma conta? Entre!
        </S.ChangeForm>
      </S.Container>
    );
  return (
    <S.Container>
      <Login {...{ email, inputs, password }} />
      <S.ChangeForm onClick={() => setCreateUser(!createUser)}>
        Ainda não tem uma conta? Crie agora!
      </S.ChangeForm>
    </S.Container>
  );
}
