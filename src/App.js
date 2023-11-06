import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import Upload from './pages/Upload/Upload';

function App() {

  return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
