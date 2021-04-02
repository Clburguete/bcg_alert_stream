import { ThemeProvider, css, createGlobalStyle } from "styled-components";

const BasicAlert = css`
  display: grid;
  grid-template-areas: "warning title close";
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  height: 60px;
  margin: 6px 0;
  padding: 16px;
  font-size: 24px;
  text-align: left;
  border-radius: 8px;
  background: linear-gradient(-45deg, rgba(0,0,0,0.1), rgba(255,255,255,0.25));
  box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.15),
   -8px -8px 8px 0 rgba(255, 255, 255, 0.3);
  background-color: white;
  h6 {
    margin: 0;
    grid-area: title;
  }


`

const THEME = {
  colors: {
    main: '#004a51',
    secondary: "#add8e666"
  },
  breakpoints: {
    landscape: `@media only screen 
      and (min-device-width: 1024px) 
      and (orientation: landscape) 
      and (-webkit-min-device-pixel-ratio: 2)
    `
  },
  shared: {
    alert: BasicAlert
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export {
  ThemeProvider,
  THEME,
  GlobalStyle
}