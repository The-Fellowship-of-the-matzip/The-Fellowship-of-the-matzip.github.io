import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CAMPUS, { Campus } from "constants/campus";
import { PATHNAME } from "constants/routes";

import { setCampusContext } from "context/CampusContextProvider";

import * as S from "components/pages/CampusSelectPage/CampusSelectPage.style";

function CampusSelectPage() {
  const setCampus = useContext(setCampusContext);
  const navigate = useNavigate();

  const handleCampusSelect: (campus: Campus) => React.MouseEventHandler =
    (campus: Campus) => () => {
      setCampus(campus);
      navigate(PATHNAME.HOME);
    };

  return (
    <S.MainContainer>
      <S.Title>캠퍼스를 선택해주세요</S.Title>
      <S.ButtonWrapper>
        <S.Button onClick={handleCampusSelect(CAMPUS.JAMSIL.name)}>
          잠실
        </S.Button>
        <S.Button onClick={handleCampusSelect(CAMPUS.SEOULLEUNG.name)}>
          선릉
        </S.Button>
      </S.ButtonWrapper>
    </S.MainContainer>
  );
}

export default CampusSelectPage;