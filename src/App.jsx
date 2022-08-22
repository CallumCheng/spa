import React from 'react';
import Header from './components/Header';

export default function App({name}, {animal}){
    const dogs = [{id:1, name:"Bramble"}, {id:2, name:"Keith"}, {id:3, name:"Lyla"}];

    return (
        <>
          <Header/>
            <h1>Hello, {name}!</h1>
            <p>woof woof b*tches</p>
            <ul>
                {dogs.map(dog => <li key={dog.id}>{dog.name}</li>)}
            </ul>
        </>
    )
}
