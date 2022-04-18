import React from 'react';

const Blogs = () => {
    return (
        <div id="question-answer" className="container mx-auto p-3">
            <h3 className="text-center"><u>Question and Answer:</u></h3>
            <div className="card m-4">
                <div className="card-header">
                    <h6>
                        <span className="fw-bold">1.Question: </span>" Difference between authorization and authentication "
                    </h6>
                </div>
                <div className="card-body">
                    <div className="fw-bold"><u>Answer:</u></div> <br />
                    <p>
                        <span className="fw-bold">Authorization:</span>
                    </p> 
                    <br />
                    <p>
                        <span className="fw-bold">Authentication:</span> 
                    </p>
                </div>
            </div>
            <div className="card m-4">
                <div className="card-header">
                    <h6>
                        <span className="fw-bold">2.Question: </span>" Why are you using firebase? What other options do you have to implement authentication? "
                    </h6>
                </div>
                <div className="card-body">
                    <p><span className="fw-bold"><u>Answer:</u></span> " " </p>
                </div>
            </div>
            <div className="card m-4">
                <div className="card-header">
                    <h6>
                        <span className="fw-bold">3.Question: </span>" What other services does firebase provide other than authentication? "
                    </h6>
                </div>
                <div className="card-body">

                    <div className="fw-bold"><u>Answer:</u></div> <br />
                   
                </div>
            </div>
        </div>

    );
};

export default Blogs;