import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';



export function Layout ( ){
    return (
        <>
        <div>
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </>
    )
}