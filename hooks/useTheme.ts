import { useState, useEffect } from "react";
import { DefaultTheme } from "styled-components";

export default function useTheme(key: string, initialState: DefaultTheme) {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const localTheme = localStorage.getItem(key);

    if (localTheme) {
      return JSON.parse(localTheme);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [{ theme, setTheme }];
}
