import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection'; 
import EmployeePage from './components/EmployeePage/EmployeePage';
import ManagerPage from './components/ManagerPage/ManagerPage';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = { <MainSection />} />
        <Route path='/emp' element = { <EmployeePage />} />
        <Route path='/mang' element = { <ManagerPage />} />
      </Routes>
    </div>
  );
}

export default App;
