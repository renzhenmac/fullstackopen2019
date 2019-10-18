import React from 'react'

const Persons = ({ persons, filterName }) => {
        return (
        <ul>
            {persons
                .filter(person => person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)
                    .map(person => <li key={person.name}>{person.name}: {person.phone}</li>)}
        </ul>
    )

}

export default Persons
