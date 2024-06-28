import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoIcon from "../../assets/Vector.svg";
import logoName from "../../assets/DrivenPass.svg";
import handleSignUp from "../../utils/handleSignUp";

export default function SignUp() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: ""
  })
  return (
    <S.Page>
      <S.Content>
        <S.Logo>
          <S.Icon src={logoIcon}></S.Icon>
          <S.Text src={logoName}></S.Text>
        </S.Logo>
        <S.Form onSubmit={(e) => handleSignUp(e, newUser)}>
          <S.Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <S.Input
            name="password"
            placeholder="Senha"
            type="password"
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
          <S.Button type="submit" color="#9BFBB0">
            Cadastrar
          </S.Button>
        </S.Form>
        <S.Button color="#FB9B9B" onClick={() => {navigate("/")}}>
          Voltar
        </S.Button>
      </S.Content>
    </S.Page>
  );
}
