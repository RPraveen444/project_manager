import React from 'react';
import '../styles/HomeImage.jpg';

const Home = () => (
    <div>
        <p><b>Welcome admin</b></p>
        <img src={HomeImage} alt="Welcome" style={{ width: '100%', height: 'auto' }} />
    </div>
);

export default Home;