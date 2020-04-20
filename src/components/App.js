import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import faker from 'faker';

const App = ()=>{

    return(
        <div>
            <Navbar />
            
            <Card  image={faker.image.cats()}/>
            <Card  image={faker.image.avatar()} />
            
        </div>
    )

}

export default App