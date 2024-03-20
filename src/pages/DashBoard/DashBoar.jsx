
import { Link, Outlet } from 'react-router-dom';

const DashBoar = () => {
    return (
        <div className='flex mt-10 gap-5'>
            <div className='w-[35%] bg-gray-300 text-black shadow-md font-bold text-xl'>
                <ul>
                    <li>
                        <Link to={"/dashboard/profile"}>Profile</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/editprofile"}>Edit Profile</Link>
                    </li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoar;