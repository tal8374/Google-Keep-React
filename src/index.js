import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider as UrqlProvider, createClient, defaultExchanges, subscriptionExchange } from 'urql';
const gqlclient = createClient({
  url: "http://localhost:5000",
  exchanges: [
    ...defaultExchanges,
  ]
})

ReactDOM.render(
  <UrqlProvider value={gqlclient}>
    <App />
  </UrqlProvider>,
  document.getElementById("root")
);