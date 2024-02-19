import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onAdd = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log('count:', this.count)
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="count">{count}</h1>
        <button className="button" type="button" onClick={this.onAdd}>
          Add
        </button>
      </div>
    )
  }
}

export default ClickCounter
