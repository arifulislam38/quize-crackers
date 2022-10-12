import React from 'react';

const Blog = () => {
    return (
        <div className='m-4'>
            <div className='border border-x-slate-400 rounded mb-4 text-justify p-2'>
                <h1 className='text-3xl font-semibold text-center mb-3'>Purpose of react router</h1>
                <p className='text-gray-600'>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
            </div>
            <div className='border border-x-slate-400 rounded mb-4 text-justify p-2'>
                <h1 className='text-3xl font-semibold text-center mb-3'>How does context API work</h1>
                <p className='text-gray-600'>
                Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease.

                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. 
                </p>
            </div>
            <div className='border border-x-slate-400 rounded mb-4 text-justify p-2'>
                <h1 className='text-3xl font-semibold text-center mb-3'>UseRef in react</h1>
                <p className='text-gray-600'>
                useRef returns a mutable ref object whose .current property is initialized to the passed argument initialValue. The returned object will persist for the full lifetime of the component. 

                Essentially, useRef is like a “box” that can hold a mutable value in its .current property. <br />

                You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  div ref = myRef, React will set its .current property to the corresponding DOM node whenever that node changes.

                However, useRef is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes. <br />

                This works because useRef creates a plain JavaScript object. The only difference between useRef and creating a current: ... object yourself is that useRef will give you the same ref object on every render.

                Keep in mind that useRef doesn't notify you when its content changes. Mutating the .current property doesn't cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.


                </p>
            </div>
        </div>
    );
};

export default Blog;