import React from 'react'
import {connect} from 'react-redux'
import {getSingleOrderThunk} from '../store/historyReducer'
import {getPlantOrderThunk} from '../store/allPlantsReducer'

class SingleOrder extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.orderId
    this.props.getSingleOrder(id)
    this.props.getPlant()
  }

  render() {
    const {history} = this.props
    const {plants} = this.props.plant
    console.log(plants)

    return (
      history.length !== 0 && (
        <div>
          {history.map((product, i) => {
            return (
              <div key={i}>
                <p>
                  {' '}
                  {i + 1}){' '}
                  {plants.map(plant => {
                    if (plant.id === product.productId) {
                      return plant.name
                    }
                  })}
                </p>
                <p> Price: ${product.price} </p>
                <p> Quantity: {product.quantity} </p>
                <br />
              </div>
            )
          })}
          <p>
            {' '}
            Subtotal: ${history.reduce((accum, product) => {
              let prodSum = product.quantity * product.price
              return accum + prodSum
            }, 0)}
          </p>
        </div>
      )
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    history: state.historyReducer,
    plant: state.allPlantsReducer
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleOrder: id => dispatch(getSingleOrderThunk(id)),
    getPlant: () => dispatch(getPlantOrderThunk())
  }
}

export default connect(mapState, mapDispatch)(SingleOrder)
