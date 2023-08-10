import { useState } from "react";

export default function useChangeTheme() {
  const [theme, setTheme] = useState("ligth");

  return [{ theme, setTheme }];
}
