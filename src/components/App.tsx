import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DesignSystem from '../pages/DesignSystem';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/design-system" element={<DesignSystem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export { App, WrappedApp };
