import React from 'react'


const Sort = props => {
const { handleChange } = props 
  return (
<div className="select is-rounded is-info level-right">
  <select defaultValue={'DEFAULT'} onChange={handleChange} >
    <option className='has-text-centered' value="DEFAULT" disabled>-Select filter-</option>
    <option value='desc'>Price - Lowest to Highest</option>
    <option value='asc'>Price - Highest to Lowest</option>
  </select>
</div>
  )
}

export default Sort
