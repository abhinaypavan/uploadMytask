import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
class TaskList extends Component {
  state = {
    input1: '',
    input2: '',
    input3: '',
    allData: [],
    err: '',
    isChecked: false,
    status: '',
  }

  onSubmitform = event => {
    event.preventDefault()
    const {input1, input2, input3} = this.state
    const data = {
      id: uuidv4(),
      TaskName: input1,
      TaskDesc: input2,
      TaskDue: input3,
    }
    if (this.state.input1.trim() === '') {
      this.setState({
        err: 'This field is required.',
      })
      return
    }
    this.setState(prev => ({
      allData: [...prev.allData, data],
      input1: '',
      input2: '',
      input3: '',
    }))
  }
  onInput2 = event => {
    this.setState({input2: event.target.value})
  }
  onInput3 = event => {
    this.setState({input3: event.target.value})
  }
  onInput1 = event => {
    this.setState({input1: event.target.value, err: ''})
  }
  handleCheckboxChange = () => {
    const {isChecked} = this.state
    this.setState({
      isChecked: !isChecked,
      status: isChecked ? 'unsuccessful' : 'success',
    })
  }
  render() {
    const {input1, input2, input3, allData, usersin, err, isChecked, status} =
      this.state
    return (
      <div className='container'>
        <form onSubmit={this.onSubmitform}>
          <div className='taskinputs'>
            <label htmlfor='txt'>Task Name</label>
            <input
              type='text'
              id='txt'
              value={input1}
              onChange={this.onInput1}
            />
            {err && <p style={{color: 'red'}}>{err}</p>}
            <label htmlfor='desc'>Description</label>
            <input
              type='text'
              value={input2}
              id='desc'
              onChange={this.onInput2}
            />
            {err && <p style={{color: 'red'}}>{err}</p>}
            <label htmlfor='due'>Due Date</label>
            <input
              type='text'
              id='due'
              value={input3}
              onChange={this.onInput3}
            />
            {err && <p style={{color: 'red'}}>{err}</p>}
          </div>
          <button type='submit' className='button'>
            Add Task
          </button>
        </form>
        <p>{usersin}</p>
        <ul>
          {allData.map(each => (
            <li key={each.id} className='label-container'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={this.handleCheckboxChange}
              />
              <p>{each.TaskName}</p>
              <p>{each.TaskDesc}</p>
              <p>{each.TaskDue}</p>
            </li>
          ))}
        </ul>
        <h1>Status</h1>
        <p>Status: {status}</p>
      </div>
    )
  }
}
export default TaskList
