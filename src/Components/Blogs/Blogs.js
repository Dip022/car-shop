import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1>Blogs</h1>
      <div className="blog">
        <h2>What is Context API?</h2>
        <p>
          Context AIP is a medium for sending data. Through context IPA we can
          send data like a network that can send data from one component to
          another. We can use that data with the help of data in its upper
          component.
        </p>
      </div>
      <div className="blog">
        <h2>What is Semantic Tag?</h2>
        <p>
          Semantic tags are some of the tags in HTML5. Tags that have many
          advantages over HTML markup. So now we can share the work in a very
          beautiful way. The semantic tags are: header, section, navel footer.
          Using which the codes can be seen to be very sorted.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
