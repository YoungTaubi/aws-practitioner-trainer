import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Layout from './components/Layout';
import Signup from './pages/Signup'
import Login from './pages/Login'
import './App.css';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { RequireAuth } from './RequireAuth';

Amplify.configure(awsconfig);

// >>New - Configuring Auth Module
Auth.configure(awsconfig);

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={
            <RequireAuth>
              <Quiz />
            </RequireAuth>
          } />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </>

  );
}

export default App;



