// Reference 22-State > 23-Ins-Stripe
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// Client Pages
import Home from './pages/Home';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import Signup from './pages/Signup';
// import Login from './pages/Login';

// ApolloClient Info
// import { InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { StoreProvider } from './utils/GlobalState';
import { Provider } from 'react-redux';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  // cache: new InMemoryCache(),

  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          {/* <StoreProvider> */}
          <Provider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/login" component={Login}/> */}
              <Route exact path="/signup" component={Signup}/>
              <Route component={NoMatch} />
            </Switch>
          </Provider>
          {/* </StoreProvider> */}
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;