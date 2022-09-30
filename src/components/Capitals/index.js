import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapitalId = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountryName = () => {
    const {activeCapitalId} = this.state
    const filteredItem = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeCapitalId,
    )
    return filteredItem.country
  }

  render() {
    const {activeCapitalId} = this.state
    const countryName = this.getCountryName()

    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="country-heading">Countries and Capitals</h1>
            <div className="select-container">
              <select
                className="scroll-box"
                onChange={this.onChangeCapitalId}
                value={activeCapitalId}
              >
                {countryAndCapitalsList.map(eachItem => (
                  <option
                    className="option"
                    key={eachItem.id}
                    value={eachItem.id}
                  >
                    {eachItem.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="para">is capital of which country?</p>
            </div>
            <p className="result">{countryName}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
