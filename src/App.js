import  store from './store'
import {persistor} from './store'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
       <Home/>
     </PersistGate>
    </Provider>

  );
}

export default App;
