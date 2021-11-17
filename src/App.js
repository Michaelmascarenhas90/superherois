import React from 'react';
import Provider from './AppContext/provider';
import HeroList from './pages/HeroList';

function App() {
  return (
    <Provider>
      <div className="App">
        <h1>Iniciando a aplicação react</h1>
        <HeroList />
      </div>
    </Provider>
  );
}

export default App;
