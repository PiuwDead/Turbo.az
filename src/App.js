import './App.css';
import Club from './components/club/Club.jsx';
import Home from './pages/Home/Home';
import Contacts from './pages/Avtosalons/Avtosalons';
import NoPage from './pages/NoPage/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Avtosalonlar from './pages/Avtosalons/Avtosalons';
import Avtosalons from './pages/Avtosalons/Avtosalons';
import CarPage from './pages/CarPage/CarPage';
import AvtosalonData from './components/avtosalon/AvtosalonData';
import Header from './components/header/Header';
import NewCarAd from './pages/NewCarAd/NewCarAd';
function App() {
  const clubs = [
    {
      name: 'Bayern München',
      coach: 'Tomas Tuchel',
      logo: 'https://i.pinimg.com/236x/54/95/19/549519eb7c9d0dd59d1e118a5564c5f8.jpg'
    },
    {
      name: 'Beşiktaş',
      coach: 'Yagizer Ulug',
      logo: 'https://i.pinimg.com/236x/45/a8/ce/45a8ce5897656f3d3d584eaa590271f9.jpg'
    },
    {
      name: 'Real Madrid',
      coach: 'Carlo Ancelotti',
      logo: 'https://i.pinimg.com/236x/72/2e/47/722e474cca38653d70a989f86c28eaa4.jpg'
    },
  ]

  return (
    // <div className='clubs'>
    //   {clubs.map((club, index) => {
    //     return (
    //       <Club key={index} name={club.name} coach={club.coach} logo={club.logo} />
    //     )
    //   })}

    // </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}  >
            <Route index element={<Home />} />
            <Route path='/avtosalons' element={<Avtosalons />} />
            <Route path='*' element={<NoPage />} />
            <Route path='/car' element={<CarPage />} />
            <Route path='/avtosalon' element={<AvtosalonData />} />
            <Route path='/newcarad' element={<NewCarAd/>} />
          </Route >
        </Routes>
      </BrowserRouter>

  )
}

export default App;
