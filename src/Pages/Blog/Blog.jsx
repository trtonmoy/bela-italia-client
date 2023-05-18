import React from "react";
import { FcDownload } from "react-icons/fc";
import { useReactToPdf } from "react";

const Blog = () => {
  const ref = React.createRef();

  const options = {
    orientation: "landscape",
    unit: "in",
    format: [8.5, 11],
  };

  //   const { saveAsPdf } = useReactToPdf(options);

  //   const handleGeneratePdf = () => {
  //     saveAsPdf(ref);
  //   };

  return (
    <section ref={ref}>
      <h1 className="text-3xl text-red-600 font-bold text-center pt-4 tracking-wide relative">
        Blog Section :
        <button className="ml-10 lg:absolute right-20 top-4">
          <FcDownload className="bg-slate-100 text-5xl rounded-full p-1"></FcDownload>
        </button>
      </h1>

      <section className="lg:grid lg:grid-cols-2 gap-6 my-10">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-indigo-500 px-6 py-4">
            <h1 className="text-white font-semibold text-xl">
              Question of the Day
            </h1>
          </div>
          <div className="px-6 py-4">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              What is the differences between uncontrolled and controlled
              components?
            </h2>
            <p className="text-gray-600">
              Controlled components use React state to manage form data,
              providing precise control and validation. Uncontrolled components
              rely on the DOM to handle form data, resulting in simpler
              implementation but less control.
              <br /> <br />
              The choice depends on the complexity of the form and the need for
              validation. Controlled components are ideal for complex forms,
              while uncontrolled components are suitable for simpler use cases.
            </p>
          </div>
          <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              More Questions
            </button>
            <div className="text-gray-600">
              <span className="text-xs mr-1">Answered by:</span>
              <span className="font-semibold">Tonmoy</span>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-indigo-500 px-6 py-4">
            <h1 className="text-white font-semibold text-xl">
              Question of the Day
            </h1>
          </div>
          <div className="px-6 py-4">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              How to validate React props using PropTypes?
            </h2>
            <p className="text-gray-600">
              To validate React props using PropTypes, import the PropTypes
              library and define the prop types for a component. Specify the
              expected type and, if necessary, additional constraints like
              required or default values.
              <br /> <br />
              PropTypes will issue warnings in the browser console if the props
              do not match the specified types. This helps catch potential bugs
              and ensures proper data handling. For example, to validate a prop
              named "name" as a required string, use
              "PropTypes.string.isRequired" in the prop types definition for
              that component.
            </p>
          </div>
          <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              More Questions
            </button>
            <div className="text-gray-600">
              <span className="text-xs mr-1">Answered by:</span>
              <span className="font-semibold">Tonmoy</span>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-indigo-500 px-6 py-4">
            <h1 className="text-white font-semibold text-xl">
              Question of the Day
            </h1>
          </div>
          <div className="px-6 py-4">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              What is the difference between node js and express js?
            </h2>
            <p className="text-gray-600">
              Node.js is a runtime environment that allows you to run JavaScript
              on the server-side, enabling server-side scripting and building
              scalable network applications. It provides core functionalities
              and APIs for working with file systems, networking, and more.
              <br /> <br />
              Express.js, on the other hand, is a web application framework
              built on top of Node.js. It simplifies the process of building web
              applications by providing a set of features and middleware for
              handling HTTP requests, routing, templating, and more. Express.js
              extends the capabilities of Node.js specifically for web
              development.
            </p>
          </div>
          <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              More Questions
            </button>
            <div className="text-gray-600">
              <span className="text-xs mr-1">Answered by:</span>
              <span className="font-semibold">Tonmoy</span>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-indigo-500 px-6 py-4">
            <h1 className="text-white font-semibold text-xl">
              Question of the Day
            </h1>
          </div>
          <div className="px-6 py-4">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p className="text-gray-600">
              A custom hook is a JavaScript function that allows you to reuse
              logic and stateful behavior in functional components. It lets you
              extract and encapsulate reusable code, such as state management,
              data fetching, or event handling, into a standalone function.
              <br /> <br />
              Custom hooks promote code reusability and abstraction, making it
              easier to share logic between components and separate concerns.
              You create a custom hook to abstract and share complex or
              repetitive logic, enabling cleaner and more maintainable code
              across different components.
            </p>
          </div>
          <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              More Questions
            </button>
            <div className="text-gray-600">
              <span className="text-xs mr-1">Answered by:</span>
              <span className="font-semibold">Tonmoy</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
