import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => 
              <button onClick={onClick}>{text}</button>
const Statistic = (props) =>{
  return(
    <><td>{props.text}</td> <td>{props.value}</td></> 
  )
}
const Statistics = (props) =>{
  const { good, neutral, bad, all } = props
  if(props.all === 0){
    return (
      <div><br/>No feedback given</div>
    )
  }
  else
    return (
      <div>
        <h2>statistics</h2>
        <table>
        <tr><Statistic text="good" value={good}/></tr>
        <tr><Statistic text="neutral" value={neutral}/></tr>
        <tr><Statistic text="bad" value={bad}/></tr>
        <tr><Statistic text="all" value={all}/></tr>
        <tr><Statistic text="average" value={(good - bad)/all}/></tr>
        <tr><Statistic text="positive" value={good /all}/>%</tr>
        </table>     
    </div>
    )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }
  const maxVoteIndex = votes.indexOf(Math.max.apply(Math,votes))
  return (
    <div>
      <div>
        <Button onClick={
                  () => {
                    const number = Math.round(Math.random()*5)                    
                    setSelected(number)                    
                  }
                } 
                text="Next Anecdotes"/>
        <Button onClick={
                  ()=>{
                    const copy = [...votes]
                    copy[selected] += 1
                    setVotes(copy)
                  }
                } 
                text="vote"/>
        <br/>
        has {votes[selected]} votes<br/>
        {anecdotes[selected]}
        <br/><br/>
        most voted is: <br/>
        {anecdotes[maxVoteIndex]}
        <br/>
        with {votes[maxVoteIndex]} votes<br/>


      </div>
      <div>
        <h2>give feedback</h2>
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />


      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
