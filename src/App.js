import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import { AddItem } from "./components/AddItem";
import { ItemList } from "./components/ItemList";


function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: '5px' }}>
      <h3>My Todo List</h3>
      <div>
        <AddItem />
        <ItemList />
      </div>
      </div>

    </ApolloProvider>
  );
}

export default App;
