import Header from './components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import OrdersPage from 'pages/OrdersPage/OrdersPage';

import 'styles/styles.scss'
import { Route, Routes, useLocation } from 'react-router-dom';
import MessagesPage from 'pages/MessagesPage/MessagesPage';

function App() {
  return (
    // TODO make here routes (iterate through json)
    <div className='bg-dark' style={{ "minHeight": "100vh" }}>
      <Header />

      {useLocation().pathname === '/profile' ? '' : <Navbar />}

      <Routes>
        <Route path='orders' element={<OrdersPage />} />
        <Route path='messages' element={<MessagesPage />} />
      </Routes>

    </div>
  );
}

export default App;
