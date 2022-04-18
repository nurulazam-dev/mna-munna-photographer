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
                        <span className="fw-bold">Authorization:</span> Authorization is the process of allowing someone to do something or use a resource. Giving someone permission to providing individual users with administrative access to an application.
                    </p>
                    <br />
                    <p>
                        <span className="fw-bold">Authentication:</span> Authentication is the process by which a user claims that his information is correct. Then authentication process of determining whether it is actually true.
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
                    <p><span className="fw-bold"><u>Answer:</u></span> Google Firebase is a platform for building iOS, Android, and Web apps that use the Google Play services package. It's quite easy to connect and utilize built-in third-party authentication providers, such as Google, Facebook, Twitter, and others with Firebase. </p>
                    <p>Some other options have to implement authentication.For example: Hasura, Nhost, Deployd, Game Sparks, Playfab, Firehost etc.</p>
                </div>
            </div>
            <div className="card m-4">
                <div className="card-header">
                    <h6>
                        <span className="fw-bold">3.Question: </span>" What other services does firebase provide other than authentication? "
                    </h6>
                </div>
                <div className="card-body">

                    <p><span className="fw-bold"><u>Answer:</u></span> Firebase provide other services than authentication.For example: Web hosting, Google analysis, Cloud firestore, Cloud functions, Cloud Storage, Dynamic Links, Cloud Messaging, Remote Config etc.</p>
                    

                </div>
            </div>
        </div>

    );
};

export default Blogs;