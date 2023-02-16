import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

export default function MainLayout() {
  return (
    <>
    <Menu/>
    <Outlet/>
    </>
  )
}