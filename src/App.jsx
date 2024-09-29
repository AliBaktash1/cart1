
import './App.css'
import Layout from './components/layout'
import Home from './pages/home'
import Detail from './pages/detail'
import {HashRouter as Router,Routes,Route  } from "react-router-dom";
function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/:slug' element={<Detail/>} />
        </Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
