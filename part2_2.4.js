import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  
  const sum = course.parts.map(part=>part.exercises).reduce(reducer)
  const rows = () => course.parts.map(
    part =>
      <div type='Part' key={part.id}>
        {part.name}
        &nbsp;
        {part.exercises}
      </div>
  )
  return(
    <div type='Course'>
      <h1>{course.name}</h1>
      <div type='Content'>
        {rows()}
        total: {sum}
      </div>

    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
