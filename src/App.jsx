import EmployeeAdd from "./Pages/EmployeeAdd"
import  Header  from "./Pages/Header"
import Footer from "./Pages/Footer"
import ListEmployeeComponent from "./Pages/ListEmployeeComponent"
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from "./Pages/LoginPage"


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      //http://localhost:3000
      <Route path='/' element ={<LoginPage />}></Route>
      <Route path='/employee' element ={<ListEmployeeComponent />}></Route>
      <Route path='/add-employee' element={<EmployeeAdd/>}></Route>
      <Route path="/update-employee/:id" element={<EmployeeAdd/>}></Route>
    </Routes>

    <Footer/>
    </BrowserRouter>
    </>
  )
}



export default App;
