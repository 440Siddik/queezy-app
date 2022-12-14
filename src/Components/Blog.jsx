import React from "react";

const Blog = () => {
  return (
    <div className="p-3">
      <h1 className="mt-12 text-xl lg:text-4xl text-blue-500 font-semibold text-center mt-4 mb-4">
        Questions
      </h1>
      <div>
        <h3 className="text-2xl text-blue-500 font-semibold text-center mt-4 mb-4">
          What is the purpose of react router?
        </h3>
        <h5 className="font-semibold text-xl">
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </h5>
        <h3 className="text-2xl text-blue-500 font-semibold text-center mt-4 mb-4">
          How does Context Api works?
        </h3>
        <h5 className="font-semibold text-xl">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on.
        </h5>
        <h3 className="text-2xl text-blue-500 font-semibold text-center mt-4 mb-4">
          useRef
        </h3>
        <h5 className="font-semibold text-xl">
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </h5>
      </div>
    </div>
  );
};

export default Blog;
