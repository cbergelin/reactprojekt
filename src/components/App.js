import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import faker from 'faker';
import Form from './Form';

const App = ()=>{

    return(
        <div>
            <Navbar />
            <section>
                <Card  image={faker.image.cats()}/>
                <Card  image={faker.image.avatar()} />
            </section>
            <Form />
        </div>
    )

}

export default App