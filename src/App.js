import React from 'react';
import { Provider } from 'react-redux';
import Calendar from './component/calendar/Calendar';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
}

export default App;
