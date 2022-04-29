import './App.css';
import CountryList from './components/CountryList';
import Header from './components/layout/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Header />
      <div className='app-container'>
        <CountryList />
      </div>
    </div>
  );
}

export default App;
