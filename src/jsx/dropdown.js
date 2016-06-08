import React from 'react'

/* prefer class extends instead of React.createClass */
class UIDropdown extends React.Component {

  constructor() {
    super()
    this.state = {open: false}
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    console.log('mounted')
  }

  update(event) {
    this.setState({ open: !this.state.open });
  }

  render() {
    {/* ES6 string interpolation */}
    const ClassNames = `ui-dropdown ${this.state.open ? 'ui-open': ''}`

    return (
      <div className={ClassNames}>
        {/* Separate components for immproving organisation */}
        <DropdownButton update={this.update} val="Dropdown"/>
        <UlList />
       </div>
     )
  }
}

const DropdownButton = (props) => (
  <button className="ui-button" onClick={props.update}>
    {props.val}
    <i className="ui-icon">
      <svg width="15" height="15" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/></svg>
    </i>
  </button>
)

const UlList = (props) => (
  <ul className="ui-dropdown-menu">
    <LiItem val='Item' />
    <LiItem val='Item Item ' />
    <LiItem val='Item Item Item' />
    <LiItem val='Item' />
  </ul>
)

const LiItem = (props) => (
  <li className="ui-dropdown-item">
    <a href="#">{props.val}</a>
  </li>
)

export default UIDropdown
