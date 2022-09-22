import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './components/App';

// 리덕스를 위한 코드
import { createStore } from 'redux';
import rootReducer from '../src/components/store';
import { Provider } from 'react-redux';

// devTool ?
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTool);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<h2>Loading...</h2>}>
    {/*<React.StrictMode>*/}
      <Provider store={store}>
        <App />
      </Provider>
    {/*</React.StrictMode>*/}
  </Suspense>,
);
reportWebVitals();