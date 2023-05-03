import React from 'react';
import Pdf from "react-to-pdf";


const Blogs = () => {
    const ref = React.createRef();
    return (
        <div ref={ref} className='w-full'>
            <div className="mx-auto p-20 flex flex-col items-center">
                <h1 className='text-5xl font-bold text-gray-700 text-center'>
                    Welcome Our Blog Page</h1>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button
                        className='btn btn-outline flex justify-center my-10' onClick={toPdf}>
                        Download Pdf</button>}
                </Pdf>
            </div>
            <div className='w-3/6  mx-auto'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-medium">
                        Tell us the differences between uncontrolled and controlled components?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-medium">
                        How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-medium">
                        Tell us the difference between nodejs and express js?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-medium">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;