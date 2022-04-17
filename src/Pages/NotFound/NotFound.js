import React from 'react';
import notFound from "../../images/NotFound/notfound.jpg"

const NotFound = () => {
    return (
        <div>
            <img style={{height:"700px"}} className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;