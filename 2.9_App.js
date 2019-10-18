import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setFilterName] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      phone: newPhone
    }
    const indexOfNewName = persons.map(person => person.name).indexOf(newName)
    console.log(indexOfNewName)
    if (indexOfNewName !== -1) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter whown with: <input value={filterName} onChange={(event) => setFilterName(event.target.value)} />
      </div>
      <br/>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newPhone} onChange={(event) => setNewPhone(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(person=>person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1).map(person => <li key={person.name}>{person.name}: {person.phone}</li>)}
      </ul>
    </div>
  )
}

export default App
