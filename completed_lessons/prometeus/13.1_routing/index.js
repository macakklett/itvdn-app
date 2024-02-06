import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './components/routes/MyRoutes';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </StrictMode>
);

export default root;
