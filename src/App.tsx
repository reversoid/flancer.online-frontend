import Header from './components/Header/Header';
import Navbar from 'components/Navbar/Navbar';

import 'styles/styles.scss'

function App() {
  return (
    // TODO make here routes
    <div className='bg-dark' style={{"minHeight": "100vh"}}>
      <Header/>
      <Navbar/>
    </div>

  );
}

export default App;
