import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <>
      <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
      </Layout>
    </>

  );
}

export default App;



