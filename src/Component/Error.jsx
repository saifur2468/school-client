import React from 'react';
import { Link} from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <h1 className='text-6xl font-bold text-center mt-4'>page Not Found </h1>
            <Link to="/">
            <button className="btn btn-primary mx-auto flex items-center mt-2">Back To Home </button>
            </Link>
        </div>
    );
};

export default Error;