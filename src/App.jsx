import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { useState } from "react";
import ColorTest from "./components/ColorTest";
import Select from "./components/Select";

function App() {
  const [themeMode, setThemeMode] = useState(theme.mint);
  const onChange = ({ target: { value } }) => {
    setThemeMode(theme[value]);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Select theme={theme} onChange={onChange} />
      <ColorTest variant={themeMode.variant} />
    </ThemeProvider>
  );
}

export default App;
