import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Plant from '../Plant'
import {getLowLightThunk} from '../../store/allPlantsReducer'
import Sort from './sort'

class LowPlants extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getAllLowPlants()
  }

  handleChange(e) {
    if (e.target.value === 'desc') {
      this.props.getDesc()
    } else if (e.target.value === 'asc') {
      this.props.getAsc()
    } else if(e.target.value === 'atoz'){
      this.props.getAlphAsc()
    }else if(e.target.value === 'ztoa'){
      this.props.getAlphDesc()
    }
  }

  render() {
    const {lowPlants} = this.props
    return (
      <div>
         <Sort handleChange={this.handleChange} />
         <div className="flex">
        {lowPlants &&
          lowPlants.map(plant => <Plant key={plant.id} plant={plant} />)}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    lowPlants: state.allPlantsReducer.lowLightPlants
  }
}

const mapDispatch = dispatch => {
  return {
    getAllLowPlants: () => dispatch(getLowLightThunk("all")),
    getDesc: () => dispatch(getLowLightThunk("desc")),
    getAsc: () => dispatch(getLowLightThunk("asc")),
    getAlphAsc: () => dispatch(getLowLightThunk("atoz")),
    getAlphDesc: () => dispatch(getLowLightThunk("ztoa"))
  }
}

export default connect(mapState, mapDispatch)(LowPlants)
