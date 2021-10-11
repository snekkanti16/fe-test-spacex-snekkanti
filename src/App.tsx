import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Home from './components/home';
import configureStore from './store/store';

const store = configureStore();


const App = () => {
  return (
    <ReduxProvider store={store}>
    <div>
      <Home/>
    </div>
    </ReduxProvider>
  );
}

export default App;
