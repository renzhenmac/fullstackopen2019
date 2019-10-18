import React, { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

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

  //event handler for click
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      phone: newPhone
    }
    let indexOfNewName = persons.map(person => person.name).indexOf(newName)
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
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <br />
      <Form newName={newName} setNewName={setNewName} newPhone={newPhone} setNewPhone={setNewPhone} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName} />
    </div>
  )
}

export default App
