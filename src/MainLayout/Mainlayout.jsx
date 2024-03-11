
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Nav/footer';

const Mainlayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='min-h-[76vh]'>
                
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;