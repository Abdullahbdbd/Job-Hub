import React from 'react';

const Blog = () => {
    return (
        <div>

            <h1 className='text-5xl font-bold text-center bg-indigo-50 p-10 w-full'>BLOG</h1>

            <div className='mx-20'>
           

                <div className='text-2xl mt-52 font-bold'>
                    <h1 className='text-5xl'>1. When should you use context API ?</h1>
                    <p className='mt-10'>Context API is a feature in React that allows for state management across components without the need for prop drilling. Here are some situations where you might want to use Context API:</p>
                    <p className='mt-5  text-indigo-500 text-center'>1. Sharing Data:</p>
                    <p className='mt-5'> If you have data that needs to be shared across multiple components, such as user information or theme preferences, you can use Context API to pass that data down the component tree without having to pass it through every intermediate component.</p>
                    <p className='mt-5  text-indigo-500 text-center'>2. Avoiding Prop Drilling:</p>
                    <p className='mt-5'> If you find yourself passing props down several levels of the component tree, it might be a good time to consider using Context API. Prop drilling can make your code harder to read and maintain, so Context API can make your code cleaner and more organized.</p>
                    <p className='mt-5  text-indigo-500 text-center'>3. Dynamic Theming:</p>
                    <p className='mt-5'>  If you have a theme-based application that allows users to switch between different themes, Context API can be used to manage the current theme across the application.</p>
                    <p className='mt-5  text-indigo-500 text-center'>4. Internationalization:</p>
                    <p className='mt-5'> If you have an application that needs to support multiple languages, you can use Context API to manage the current language across the application.</p>




                    <h1 className='text-5xl mt-20'>2. What is a custom hook ?</h1>
                    <p className='mt-10'>In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to extract and reuse logic between different components. Custom hooks let you abstract away complex logic into reusable functions that can be called from different components. They help to keep your code organized, make it more reusable, and reduce duplication.

                        Custom hooks can be used to encapsulate any kind of reusable logic, such as fetching data from an API, managing form state, or animating elements. Custom hooks are created using the same rules as React's built-in hooks, like useState and useEffect. That means they can also use other hooks inside their implementation, and they must only be called from within a function component or another custom hook.</p>




                    <h1 className='text-5xl mt-20'>3. What is UseRef and what is it used for ?</h1>
                    <p className='mt-16  text-indigo-500 text-center'>UseRef:</p>
                    <p className='mt-10'>In React, useRef is a hook that returns a mutable ref object that can be used to store a value that persists between renders. The ref object can be used to reference a DOM element, hold a value that doesn't trigger a re-render when it changes, or reference other mutable values.</p>
                    <p className='mt-5  text-indigo-500 text-center'>UseRef work:</p>
                    <p className='mt-8'>I respectfully disagree. useRef is a useful hook in React that has several use cases, as I mentioned in my previous response. While it's true that there are some cases where you might not need to use useRef, there are many situations where it can be helpful, such as:</p>
                    <p className='mt-5 text-sky-500 text-center'>1. Referencing DOM elements:</p>
                    <p className='mt-5'>If you need to access a DOM element directly in your component, useRef is a convenient way to create a reference to that element.</p>
                    <p className='mt-5 text-sky-500 text-center'>2. Storing mutable values:</p>
                    <p className='mt-5'>If you have a value that needs to persist between renders, but doesn't trigger a re-render when it changes, useRef is a good way to store that value.</p>
                    <p className='mt-5 text-sky-500 text-center'>3. Caching values:</p>
                    <p className='mt-5'> If you have an expensive computation that you don't want to perform on every render, useRef can be used to cache the result of that computation.</p>
                    <p className='mt-5 text-sky-500 text-center'>4. Storing previous props or state:</p>
                    <p className='mt-5'> If you need to compare the current value of a prop or state variable to its previous value and take action if it has changed, useRef can be used to store the previous value.</p>
                    


                    <h1 className='text-5xl mt-20'>4. What is useMemo and what is it used for ?</h1>
                    <p className='mt-16 text-indigo-500 text-center'>UseMemo :</p>
                    <p className='my-10'>In React, useMemo is a hook that allows you to memoize the result of a function so that it's only recomputed when its dependencies change. This can be useful when you have a function that's expensive to compute, or when you have a component that's rendering frequently and you want to optimize its performance.</p>
                    <p className='mt-5 text-indigo-500 text-center'>UseMemo work :</p>
                    <p className='mt-8'>I respectfully disagree. useMemo is a useful hook in React that can be used to optimize the performance of your components by memoizing the result of a function so that it's only recomputed when its dependencies change.</p>
                    <p className='mt-5 text-sky-500  text-center'>1. Expensive computations:</p>
                    <p className='mt-5'> If you have a function that performs an expensive computation, you can use useMemo to memoize the result of that function so that it's only recomputed when its dependencies change. This can improve the performance of your component by avoiding unnecessary recomputations.</p>
                    <p className='mt-5 text-sky-500  text-center'>2. Complex data transformations:</p>
                    <p className='mt-5'>If you have a function that transforms data in a complex way, you can use useMemo to memoize the result of that function so that it's only recomputed when its dependencies change. This can simplify your code and make it easier to reason about.</p>
                    <p className='mt-5 text-sky-500  text-center'>3. Avoiding unnecessary renders:</p>
                    <p className='mt-5'> If you have a component that's rendering frequently, you can use useMemo to memoize the result of a function so that it's only recomputed when its dependencies change. This can help you avoid unnecessary renders and improve the performance of your component.</p>
                    <p className='mt-5 text-sky-500  text-center'>4. Large data sets:</p>
                    <p className='mt-5 mb-10'> If you have a large data set that's expensive to sort or filter, you can use useMemo to memoize the sorted or filtered result so that it's only recomputed when the data set or the sorting/filtering criteria change. This can improve the performance of your component by avoiding unnecessary sorting or filtering.</p>
                    

                </div>
            </div>
        </div>
    );
};

export default Blog;