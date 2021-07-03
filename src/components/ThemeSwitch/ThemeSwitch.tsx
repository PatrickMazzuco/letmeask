import React from "react";

import sunImg from "../../assets/images/sun.svg";
import moonImg from "../../assets/images/moon.svg";

import * as S from "./styles";

interface ThemeSwitchProps {
  isDarkMode: boolean;
  onChange: () => void;
}

export const ThemeSwitch = (props: ThemeSwitchProps): JSX.Element => {
  const handleToggleTheme = () => {
    props.onChange();
  };

  return (
    <S.Container>
      <S.Switch>
        <S.Slider>
          <input
            type="checkbox"
            checked={props.isDarkMode}
            onChange={handleToggleTheme}
          />
          <S.Circle>
            <img src={props.isDarkMode ? sunImg : moonImg} alt="" />
          </S.Circle>
        </S.Slider>
      </S.Switch>
    </S.Container>
  );
};
