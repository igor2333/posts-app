import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Posts from './components/Posts'
import Users from './components/Users'
import Home from './components/Home'
import MainLayout from './layouts/MainLayout'
import SinglePost from './components/SinglePostPage'
import NotFound from './components/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="posts" element={<Posts />}></Route>
            <Route path="posts/:postId" element={<SinglePost />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
