import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './routes/Layout';
import Home from './routes/Home';
import CalculatorPage from './routes/CalculatorPage';
import Quote from './routes/QuotePage';
import NotMatch from './routes/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
