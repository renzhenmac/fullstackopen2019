import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ courses }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue

  return (
    courses.map(
      course =>
        <div type='Course'>
          <h1>{course.name}</h1>
          <div type='Content'>
            {course.parts.map(
              part =>
                <div type='Part' key={part.id}>
                  {part.name}
                  &nbsp;
                  {part.exercises}
                </div>)
            }
            total: {course.parts.map(part => part.exercises).reduce(reducer)}
          </div>
        </div>
    )
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
