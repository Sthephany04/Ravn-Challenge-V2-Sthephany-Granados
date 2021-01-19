import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import client from './client';
import { ApolloProvider } from '@apollo/client';
import PersonCell from './components/PersonCell';
import SectionHeader from './components/SectionHeader';
import DataCell from './components/DataCell';

function App() {
  return (
    <ApolloProvider client={client} >      
      <Router>
        <Switch>
          <Route path="/" exact>
            <SectionHeader titulo="People" />        
            <PersonCell />
          </Route>
          <Route path="/data/:id" exact>           
            <DataCell />
          </Route>
        </Switch>
      </Router>      
    </ApolloProvider>
  );
}

export default App