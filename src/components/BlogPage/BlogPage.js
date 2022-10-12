import React from 'react';




const BlogPage = () => {
    return (
        <div className='mt-40'>
                <div tabIndex={0} className="collapse"> 
                    <div className="collapse-title text-xl font-medium">
                       1. What is the purpose of react router?
                    </div>
                    <div className="collapse-content"> 
                        <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse"> 
                    <div className="collapse-title text-xl font-medium">
                       2. how context api works?
                    </div>
                    <div className="collapse-content"> 
                        <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse"> 
                    <div className="collapse-title text-xl font-medium">
                        3. what is useref?
                    </div>
                    <div className="collapse-content"> 
                        <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                    </div>
                </div>
        </div>
    );

};

export default BlogPage;