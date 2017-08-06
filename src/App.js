/* eslint no-unused-expressions: 0 */

import React from 'react';
import { Provider } from 'rebass';
import { injectGlobal } from 'styled-components'
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`
const App = props =>
  <Provider>
    <AppContainer>
      <Header />
      <ProductList />
    </AppContainer>
    <Footer />
  </Provider>;

export default App;
