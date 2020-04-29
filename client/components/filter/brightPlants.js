import React from 'react'
import {connect} from 'react-redux'
import Plant from '../Plant'
import {getBrightLightThunk} from '../../store/allPlantsReducer'
import Sort from './sort'

class BrightPlants extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getAllBrightPlants()
  }

  handleChange(e) {
    if (e.target.value === 'desc') {
      this.props.getDesc()
    } else if (e.target.value === 'asc') {
      this.props.getAsc()
    } else if (e.target.value === 'atoz') {
      this.props.getAlphAsc()
    } else if (e.target.value === 'ztoa') {
      this.props.getAlphDesc()
    }
  }

  render() {
    const {brightPlants} = this.props

    return (
      <div>
        <Sort handleChange={this.handleChange} />
        <div className="flex">
          {brightPlants &&
            brightPlants.map(plant => <Plant key={plant.id} plant={plant} />)}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    brightPlants: state.allPlantsReducer.brightLightPlants
  }
}

const mapDispatch = dispatch => {
  return {
    getAllBrightPlants: () => dispatch(getBrightLightThunk('all')),
    getDesc: () => dispatch(getBrightLightThunk('desc')),
    getAsc: () => dispatch(getBrightLightThunk('asc')),
    getAlphAsc: () => dispatch(getBrightLightThunk('atoz')),
    getAlphDesc: () => dispatch(getBrightLightThunk('ztoa'))
  }
}

export default connect(mapState, mapDispatch)(BrightPlants)
