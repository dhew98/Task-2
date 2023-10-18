import React from 'react';
import './RamdomPost.css'
const RandomPost = () => {
    return (
        <div>
            <h1>Random Posts</h1>
            <div className="container mt-5">
      <div className="row mb-4 cont">
        <div className="col-md-6">
          <img src="1.jpg" alt="Section 1" className="img-fluid" />
        </div>
        <div className="col-md-6 text-block">
          <p>Section 1 Text</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <img src="1.jpg" alt="Section 2" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>Section 2 Text</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <img src="1.jpg" alt="Section 3" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>Section 3 Text</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <img src="1.jpg" alt="Section 4" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>Section 4 Text</p>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default RandomPost;