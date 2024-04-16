// VacancyDetailsPage.jsx
// Компонент страницы деталей вакансии

import React from 'react';
import { useParams } from 'react-router-dom';
import { vacancies } from '../../components/main';

function VacancyDetailsPage() {
    let { id } = useParams(); // Получаем id из URL
 
    const vacancy = vacancies.find(vacancy => vacancy.id === id); // Находим вакансию по id
    console.log(vacancy,124242);
    if (!vacancy) {
      return <div>Vacancy not found</div>; // Если вакансия не найдена
    }
  
    return (
        
      <div className="md:flex mx-auto container justify-between min-h-[600px] flex-none">
        <div className=" p-4">
          <h1 className="text-2xl font-bold">{vacancy.title}</h1>
          <p>{vacancy.description}</p>
          <div>
            <h2 className="text-xl font-bold">Responsibilities:</h2>
            <p>{vacancy.responsibilities}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Qualifications:</h2>
            <p>{vacancy.qualifications}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">What we offer:</h2>
            <p>{vacancy.offer}</p>
          </div>
        </div>
        <div className="p-4 border-gray-300 border-2 max-w-[300px] max-h-[150px] bg-white">
            <div className=''>
            <h2 className="text-xl font-bold">Vacancy Info:</h2>
            </div>
            <div className='flex flex-col'>
  <ul>
    <li>
      <span className=" font-bold">Location:</span>
      <span> {vacancy.location}</span>
    </li>
    <li>
      <span className="font-bold">Language:</span>
      <span> {vacancy.language}</span>
    </li>
    <li>
      <span className="font-bold">Type:</span>
      <span> {vacancy.type}</span>
    </li>
  </ul>
</div>
          
        </div>
      </div>
    );
  }
  
  export default VacancyDetailsPage;