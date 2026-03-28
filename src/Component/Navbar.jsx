import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Component/AuthProvider'; 

const Navbar = () => {
    // Tomar AuthProvider-e 'logout' (small letters) dewa ache, tai ekhanei seta nite hobe
    const { user, logout } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleLogout = () => {
        // Ekhane 'logout' call korte hobe (logOut noy)
        if (logout) {
            logout()
                .then(() => {
                    console.log("Logged out successfully");
                    navigate('/login');
                })
                .catch(error => console.error("Logout Error:", error));
        }
    };

    const navLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AdmissionPage">Admissions</Link></li>
            <li><Link to="/AcademicSection">Academics</Link></li>
             <li><Link to="seenotice">Notice</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-[100]">
            <div className="navbar-start">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-primary text-primary-content p-2 rounded-lg font-black text-xl">SMS</div>
                    <span className="font-bold text-xl hidden sm:block uppercase text-xs tracking-tight">School Management</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1 font-medium">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-3">
                {
                    user ? (
                        <div className="flex items-center gap-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-primary/20">
                                    <div className="w-10 rounded-full">
                                        <img 
                                            referrerPolicy="no-referrer"
                                            alt="User" 
                                            src={user?.photoURL || "https://i.ibb.co/mX7XF6r/user.png"} 
                                        />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-gray-100">
                                    <li className="px-4 py-2 font-bold text-primary">{user?.displayName || "User Name"}</li>
                                    <li><Link to="/profile">View Profile</Link></li>
                                    {/* Mobile Logout Button Fix */}
                                    <li className="md:hidden">
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Desktop Logout Button */}
                            <button 
                                onClick={handleLogout}
                                className="hidden md:flex btn btn-outline btn-primary btn-sm rounded-xl font-bold px-5"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="btn btn-primary btn-md px-6 rounded-xl font-bold shadow-lg shadow-primary/20">
                            Sign In
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;