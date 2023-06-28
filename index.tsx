import React from "react";
import ReactDOM from "react-dom";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import { sageTheme } from "carbon-react/lib/style/themes";
import GlobalStyle from "carbon-react/lib/style/global-style";
import "carbon-react/lib/style/fonts.css";
import CvAnonymisationPage from "./globalComponents/CvAnonymisationPage";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <CarbonProvider theme={sageTheme} validationRedesignOptIn>
      <CvAnonymisationPage />
    </CarbonProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
