import ResponsiveAppBar from './components/AppBar';
import Login from './containers/Login';
import MovieList from './containers/MovieList';
import MovieDetail from './containers/MovieDetail';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'; 
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from './containers/Video';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
          <Route path="login" element={ <Login />} />
          <Route path="register" element={<Box sx={{ mt: 10 }}>REGISTER </Box>} />
          <Route path="home" element={ <MovieList /> } />
          <Route path="details/:id" element={ <MovieDetail /> } />
          <Route path="videos/:id" element={ <Video />} />
          <Route path="movies" element={<Box sx={{ mt: 10 }}>Halaman movies </Box>} />
          <Route path="series" element={<Box sx={{ mt: 10 }}>Halaman series </Box>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
