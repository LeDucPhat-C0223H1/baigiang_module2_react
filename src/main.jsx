import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import ThemeProvider from './components/secsion4_hooks/context/ThemeProvider.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './components/session9_redux/redux/store.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
        <Provider store={ store}>
            <App/>
        </Provider>
    </BrowserRouter>
)
