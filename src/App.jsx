import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import * as routes from './constants/routes';

/* Don't fear the wrappers! Start editing your home page in the Main component. */
import Main from './components/Main';

WebFont.load({
  google: {
    families: ['Manjari:100,400'],
  },
});

const App = function AppContent() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Router>
          <Switch>
            <Route path={routes.ROOT} component={Main} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
