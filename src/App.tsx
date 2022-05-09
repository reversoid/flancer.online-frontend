import Header from './components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import OrdersPage from 'pages/OrdersPage/OrdersPage';

import 'styles/styles.scss'

function App() {
  return (
    // TODO make here routes (iterate through json)
    <div className='bg-dark' style={{"minHeight": "100vh"}}>
      <Header/>
      <Navbar/>
      <OrdersPage/>
    </div>

  );
}

export default App;
