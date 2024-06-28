import * as S from "./styles";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import handleSignIn from "../../utils/handleSignIn";
import logoIcon from "../../assets/Vector.svg";
import logoName from "../../assets/DrivenPass.svg";
import userContext from "../../hooks/userContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  return(
    <S.Page>
      <S.Content>
        <S.Logo>
          <S.Icon src={logoIcon}></S.Icon>
          <S.Text src={logoName}></S.Text>
        </S.Logo>
        <S.Form onSubmit={
          async (e) => {
            const token = await handleSignIn(e, userData);
            await setUser(token);
            if (token) {
              navigate("/home");
            }
          }
        }>
          <S.Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <S.Input
            name="password"
            placeholder="Senha"
            type="password"
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
          <S.Button type="submit" color="#9BFBB0">
            Acessar
          </S.Button>
        </S.Form>
        <S.Link onClick={() => navigate("/signup")}>
          Primeiro acesso? Crie sua conta!
        </S.Link>
      </S.Content>
    </S.Page>
  );
}