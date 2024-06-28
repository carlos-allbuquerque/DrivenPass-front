import * as S from "./styles";
import lockIcon from "../../assets/lockerIcon.svg"
import returnIcon from "../../assets/return.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ text, route}) {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Box>
        <S.Icon src={lockIcon}></S.Icon>
        <S.TextIcon>DrivenPass</S.TextIcon>
        <S.Return src={returnIcon} onClick={() => navigate(route)}></S.Return>
      </S.Box>
      <S.Bar>
        <S.Text>{text}</S.Text>
      </S.Bar>
    </S.Header>
  );
}
