import {useDispatch, useSelector} from "react-redux";
import {setTheme, Theme } from "../themeSlice";
import {useEffect} from "react";
import {themeSelector} from "../themeSelectors";

export const  useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);
  const toggleTheme = () => {
    dispatch(setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);

  }, [theme]);

  return [theme, toggleTheme];
}
