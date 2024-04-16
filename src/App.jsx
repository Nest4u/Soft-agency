import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Provider } from './components/provider';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Main } from './components/main';
import { Footer } from './components/footer';
import VacancyDetailsPage from './components/details'; // Импортируем компонент с детальной информацией о вакансии

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider>
      <Router>
       
       
        <Routes>
          <Route path="/" element={
            <>
             <Header/>
             <Hero/>
             <Main/>
             <Footer/>
            </>
         
          } />  
          <Route path="/vacancy/:id" element={
            <>
            <Header/>
             <VacancyDetailsPage />
             <Footer/>
            </>
         
          } /> 
        </Routes>
       
      </Router>
    </Provider>
  );
}

export default App;

