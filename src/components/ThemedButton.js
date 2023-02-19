import React, {useContext} from "react";
import { ThemeProvider } from "../context/theme";


function ThemedButton({...props }) {

  const theme = useContext(ThemeProvider);

  return <button className={theme} {...props} />;
}

export default ThemedButton;
