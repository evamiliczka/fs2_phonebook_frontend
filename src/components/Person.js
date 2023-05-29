import React from 'react';


const Person = ( {person, deletePerson} ) => {
    //console.log(person.person.name);
    return(        
        <li>Name: {person.name}, phone number: {person.number}  
            <button onClick = {deletePerson}> Delete </button>

        </li>
    )
    }

export default Person;