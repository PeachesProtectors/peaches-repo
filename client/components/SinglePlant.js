import React from 'react'
import {connect} from 'react-redux'
import {getSinglePlantThunk} from '../store/allPlantsReducer'
import UpdatePlant from './update'

class SinglePlant extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const plantId = this.props.match.params.plantId
    this.props.getPlant(plantId)
  }

  handleClick() {
    let cart = window.localStorage
    const {id, name, imageUrl, price} = this.props.plant

    let purchasePlants = []
    if (cart.getItem('plant')) {
      purchasePlants = JSON.parse(cart.getItem('plant'))
    }

    const existingPlant = purchasePlants.find(plant => plant.id === id)
    if (!existingPlant) {
      purchasePlants.push({
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price,
        quantity: 1
      })
    } else {
      existingPlant.quantity++
    }
    cart.setItem('plant', JSON.stringify(purchasePlants))
  }

  render() {
    const {plant, isAdmin} = this.props
    const {id, name, imageUrl, description, price, lightReqs} = plant
    return (
      <div id='single-plant'> 
        <div className="columns is-desktop">
          {/* <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"> */}
            <div className = 'column'>
            <div className="polaroid">
            <figure className="plant-image">
              <img src={imageUrl} />
            </figure>
            </div>
          </div>

          <div className="column description">
            <div className="column name-plant">
             <h1>{name}   <span id='price'>${price}</span></h1>
            </div>
            {/* <div className="column">
              <h2>Price: {price}</h2>
            </div> */}
            <div className="column plant-description">
              <p>{description}</p>
            </div>
            <div className="column">
              <p>{lightReqs}</p>
            </div>
            <div className="column">
              <button
                type="submit"
                onClick={() => this.handleClick()}
                className="button is-medium is-rounded is-danger is-hovered"
              >
                <span className="icon is-medium">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    plant: state.allPlantsReducer.singlePlant,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    getPlant: plantId => dispatch(getSinglePlantThunk(plantId))
  }
}

export default connect(mapState, mapDispatch)(SinglePlant)
