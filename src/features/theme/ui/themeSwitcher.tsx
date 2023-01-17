import React from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
import { useTheme } from "../lib/useTheme";
import { Theme } from "../themeSlice";
import { Switcher } from "shared/components/Switcher";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
`;

function ThemeSwitcher() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher>
      {theme === Theme.LIGHT ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{" "}
      <Switcher onToggle={toggleTheme} />
    </ModeSwitcher>
  );
}

export default ThemeSwitcher;
