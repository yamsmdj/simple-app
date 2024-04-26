import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Setting from './Setting';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recette' element={<Recipe />} />
        <Route path='/recette' element={<Setting />} />
      </Routes>
    </div>
  );
};

export default App;