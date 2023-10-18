import React from 'react';

const LatestPost = () => {
    return (
        <div>
            <h1>Latest Posts</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 1 Title</h5>
              <p className="card-text">Card 1 Description</p>
            </div>
            <img src="1.jpg" alt="Card 1" className="card-image" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 2 Title</h5>
              <p className="card-text">Card 2 Description</p>
            </div>
            <img src="1.jpg" alt="Card 2" className="card-image" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 3 Title</h5>
              <p className="card-text">Card 3 Description</p>
            </div>
            <img src="1.jpg" alt="Card 3" className="card-image" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 4 Title</h5>
              <p className="card-text">Card 4 Description</p>
            </div>
            <img src="1.jpg" alt="Card 4" className="card-image" />
          </div>
        </div>
      </div>
      <div class="card mb-3">
  <img src="1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
    </div>
    </div>
    


        </div>
    );
};

export default LatestPost;