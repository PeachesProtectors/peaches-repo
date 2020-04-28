import React from 'react'
import {connect} from 'react-redux'
import Plant from './Plant'
import {getPlantsThunk} from '../store/allPlantsReducer'
import Sort from '../components/filter/sort'


class AllPlants extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getAllPlants()
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
    const {plants} = this.props
    return (
      <div>
        <Sort handleChange={this.handleChange} />
        <div className="flex">
          {plants &&
            plants.map((plant) => <Plant key={plant.id} plant={plant} />)}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    plants: state.allPlantsReducer.plants,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAllPlants: () => dispatch(getPlantsThunk("all")),
    getDesc: () => dispatch(getPlantsThunk("desc")),
    getAsc: () => dispatch(getPlantsThunk("asc")),
    getAlphAsc: () => dispatch(getPlantsThunk("atoz")),
    getAlphDesc: () => dispatch(getPlantsThunk("ztoa"))
  }
}

export default connect(mapState, mapDispatch)(AllPlants)
