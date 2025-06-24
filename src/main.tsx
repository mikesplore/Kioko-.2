import './styles/index.css'
import App from './App'
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom'


const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );

  // Or, if you want to use the other import:
  // createRoot(rootElement).render(
  //   <StrictMode>
  //     <App />
  //   </StrictMode>,
  // );
} else {
  console.error("Root element not found");
}
