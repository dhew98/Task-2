import React from 'react';

const Profile = () => {
    return (
        <div className='container'>
             <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="rounded-circle bg-dark text-white" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="1.jpg" alt="Circular" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div className="ml-3">
        <h2>Onvallis porttitor ligula leo a lectus. Donec id venenatis magna.  Vivamus placerat luctus neque 
nec faucibus. Aliquam Gravida eu Tortor vitae tempor.  . Mauris condimentum 
scelerisque ante nec ultricies. Vivamus tincidunt nibh velit!</h2>
      </div>
    </div>
        </div> 
       
    );
};

export default Profile;