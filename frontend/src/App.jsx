import {useState, useContext} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

//import components
import JobSearch from './pages/JobSearch/JobSearch.jsx';
import LandingPage from './pages/LandingPage.jsx';
import NewJobPost from './components/NewJobPost.jsx';
import NewGigPost from './components/NewGigPost';
import Profile from './pages/Profile.jsx';
import EmployerProfile from './pages/EmployerProfile.jsx';
import NavBar from './components/NavBar.jsx';
import GigView from './pages/JobSearch/GigView';
import JobView from './pages/JobSearch/JobView.jsx';
import PortfolioModal from './components/PortfolioModal';
import ApplyModal from './components/JobSearch/ApplyModal';
import NewProjectPost from './components/NewProjectPost.jsx';
import Applications from './pages/Applications.jsx';
import UserApplications from './pages/UserApplications.jsx';
import ApplicationsTest from './pages/TestApplications.jsx';
import {UserContext} from './Providers/userProvider.jsx';

//import css
import './App.scss';

function App() {
  const {currentUser} = useContext(UserContext);
  const [loginView, setLoginView] = useState(false);
  let navigate = useNavigate();

  const handleLoginView = e => {
    if (currentUser.id) {
      setLoginView(false);
    } else {
      navigate('/');
      setLoginView(true);
    }
  };

  return (
    <div className="App">
      <NavBar handleLoginView={handleLoginView} />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              loginView={loginView}
              handleLoginView={handleLoginView}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/employerprofile" element={<EmployerProfile />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/newproject" element={<NewProjectPost />} />
        <Route path="/newjob" element={<NewJobPost />} />
        <Route path="/newgig" element={<NewGigPost />} />
        <Route path="/portfoliomodal" element={<PortfolioModal />} />
        <Route path="/applymodal" element={<ApplyModal />} />
        <Route path="/gig/:gig_id" element={<GigView />} />
        <Route path="/job/:job_id" element={<JobView />} />
        <Route
          path="/employerprofile/:posttype/:postid/applications"
          element={<Applications />}
        />
        <Route path="/profile/applications" element={<UserApplications />} />
        <Route path="/testapps" element={<ApplicationsTest />} />
      </Routes>
    </div>
  );
}

export default App;
