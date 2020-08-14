import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMarkets} from '../store/markets'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

export class MarketList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('list component mounted')
  }

  render() {
    const markets = this.props.markets
    return (
      <div id="market-list">
        <ul>
          {markets.map(market => {
            console.log('a single market: ', market)
            return (
              <li key={market.id}>
                <div>Name: {market.marketname}</div>
                <div>Address: {market.address}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapState = reduxState => ({
  markets: reduxState.markets
})

const mapDispatch = dispatch => ({
  getMarkets: zipCode => dispatch(fetchMarkets(zipCode))
})

export default connect(mapState, mapDispatch)(MarketList)