import React from "react";
import * as S from '../styles/HeaderStyle'

const HeaderLogin = () => {
  return (
      <S.navBarContainer>
          <S.ulBar>
            <S.liBar>
              <S.aBar  href="user">Criar Usuário</S.aBar>
            </S.liBar>
          </S.ulBar>
      </S.navBarContainer>
  );
};

export default HeaderLogin;
