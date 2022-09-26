import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  const apikey = process.env.REACT_APP_KEY
  const [progress, setProgress] = useState(0)
  return (
    <BrowserRouter>
      <NavBar />
      <LoadingBar
        height='4'
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} api={apikey} key="general" pageSize={6} country="in" category="general" />} />
        <Route path="/business" element={<News setProgress={setProgress} api={apikey} key="business" pageSize={6} country="in" category="business" />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} api={apikey} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
        <Route path="/health" element={<News setProgress={setProgress} api={apikey} key="health" pageSize={6} country="in" category="health" />} />
        <Route path="/science" element={<News setProgress={setProgress} api={apikey} key="science" pageSize={6} country="in" category="science" />} />
        <Route path="/sports" element={<News setProgress={setProgress} api={apikey} key="sports" pageSize={6} country="in" category="sports" />} />
        <Route path="/technology" element={<News setProgress={setProgress} api={apikey} key="technology" pageSize={6} country="in" category="technology" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
