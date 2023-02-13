import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Posts from './components/Posts'
import Users from './components/Users'
import MainLayout from './layouts/MainLayout'
import Comments from './components/Comments'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Posts />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/comments" element={<Comments />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
