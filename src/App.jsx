// style={{ borderRadius:'5px', background:'#4ABBB7', color:'white'}}
import HealthJourney  from './pages/HealthJourney.jsx'
import WelcomeScreen from './pages/WelcomeScreen.jsx';
import TopicPage from './pages/TopicPage.jsx'
import ClinicFinder from './pages/ClinicFinder.jsx'
import { GiSextant } from 'react-icons/gi';
import {BrowserRouter as Router, Route, Routes,Link,useLocation} from 'react-router-dom';



  const Navbar = () => (
  <div className="bg-white shadow-md px-4 py-3 flex justify-center items-center gap-6 text-sm font-semibold text-[#4ABBB7]">
    <Link to="/">Welcome</Link>
    <Link to="/healthy-journey">Health Journey</Link>
    <Link to="/topic">Topics</Link>
    <Link to="/clinics">Clinic Finder</Link>
  </div>
);

  const AppRoutes = () => {
  const location = useLocation();

  return (
    <>

    {/* <Router> */}

      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/healthy-journey" element={<HealthJourney  />} />
        <Route path="/topic" element={<TopicPage />} />
        <Route path="/clinics" element={<ClinicFinder />} />
      </Routes>
    {/* </Router> */}
     

    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen ">
        {/* style={{background:'#4ABBB7'}} */}
        
        <div className="text-center text-2xl flex font-bold mt-5 ml-4">< GiSextant className='text-7xl' style={{color:'#4ABBB7'}} />HerCompass</div>
        
        <Navbar   /> {/* ✅ Navbar added here */}

        <AppRoutes />
      </div>
    </Router>
  );
};
export default App;

