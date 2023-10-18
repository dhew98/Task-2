import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <h1 className="mb-0">Welcome</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end">
              <a href="#" className="text-white mx-2">Facebook</a>
              <a href="#" className="text-white mx-2">Twitter</a>
              <a href="#" className="text-white mx-2">Instagram</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="mt-3">Your Company</h3>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary mx-2">Home</button>
              <button className="btn btn-primary mx-2">About</button>
              <button className="btn btn-primary mx-2">Contact Us</button>
              <button className="btn btn-primary mx-2">Search</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
