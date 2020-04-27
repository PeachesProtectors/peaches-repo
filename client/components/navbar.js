import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, isAdmin}) => {
  return (
    <div>
      <h1>PEACHY PLANTS</h1>
      <nav className="navbar">
        {isAdmin ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/admin">admin</Link>
            <div className="dropdown">
              <button className="dropbtn" type="submit">
                Plants
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <Link to="/plants"> All Plants</Link>
                <Link to="/bright-light">Bright Light Plants</Link>
                <Link to="/low-light">Low Light Plants</Link>
              </div>
            </div>
            <Link to="/cart">Cart</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <div className="dropdown">
              <button className="dropbtn" type="submit">
                Plants
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <Link to="/plants"> All Plants</Link>
                <Link to="/bright-light">Bright Light Plants</Link>
                <Link to="/low-light">Low Light Plants</Link>
              </div>
            </div>
            <Link to="/cart">Cart</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <div className="dropdown">
              <button className="dropbtn" type="submit">
                Plants
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <Link to="/plants"> All Plants</Link>
                <Link to="/bright-light">Bright Light Plants</Link>
                <Link to="/low-light">Low Light Plants</Link>
              </div>
            </div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart">Cart</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  )
}

// const image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f730e4ec-f0e0-42f9-a59d-17d16bf022c5/d6bffdt-d0bfa9a8-6f3b-4075-bf83-71460891b2a5.png/v1/fill/w_600,h_694,strp/princess_peach_jewels_by_rafaelmartins_d6bffdt-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk0IiwicGF0aCI6IlwvZlwvZjczMGU0ZWMtZjBlMC00MmY5LWE1OWQtMTdkMTZiZjAyMmM1XC9kNmJmZmR0LWQwYmZhOWE4LTZmM2ItNDA3NS1iZjgzLTcxNDYwODkxYjJhNS5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-5u8m4FLwPz__IbZZ0T9aqmbSfWk_ZcYfeH455cYxR4"
// const peach = 'https://ih1.redbubble.net/image.1011066268.6036/st,small,507x507-pad,600x600,f8f8f8.jpg'
// const Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <div className="header">

//   <h1>
//     <span id='peachy'>PEACHY<span><img className='peach' id="peach1" src={peach}/></span>PLANTS</span>
//   </h1>

// </div>
//     {/* <h1>PEACHY PLANTS</h1> */}
//     <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
//     <div className="navbar-brand">

//     <a className="navbar-item" href="/plants">
//       <img src={image} width="40" height="40" />
//     </a>

//       {/* <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
//       <span aria-hidden="true"></span>
//       <span aria-hidden="true"></span>
//       <span aria-hidden="true"></span>
//      </a> */}

//     </div>

//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div id="navbarBasicExample" className="navbar-menu is-active">
//         <div className="navbar-start">
//         {/* <a className="navbar-item"><Link to="/cart" >Cart</Link></a> */}
//         <a className="navbar-item" href='/cart'>Cart</a>
//         <div className="navbar-item has-dropdown is-hoverable">
//         <a className="navbar-link">
//           Plants
//         </a>

//         <div className="navbar-dropdown">
//           {/* <a className="navbar-item"><Link to="/plants"> All Plants</Link></a>
//           <a className="navbar-item"><Link to="/bright-light">Bright Light Plants</Link></a>
//           <a className="navbar-item"><Link to="/low-light">Low Light Plants</Link></a> */}
//           <a className="navbar-item" href="/plants">All Plants</a>
//           <a className="navbar-item" href="/bright-light">Bright Light Plants</a>
//           <a className="navbar-item" href="/low-light">Low Light Plants</a>
//          </div>
//          </div>
//          </div>

//         {/* Log in and sign up */}
//         <div className="navbar-end">
//         <div className="navbar-item">
//         <div className="buttons">
//           {/* The navbar will show these links before you log in */}
//          {/* <a className="button is-primary"> <Link to="/signup" > <strong>Sign Up</strong></Link> </a>
//          <a className="button is-light"><Link to="/login">Login</Link> </a>  */}
//          <a className="button is-info" href="/signup"><strong>Sign Up</strong></a>
//          <a className="button is-light" href="/login">Login</a>
//           </div>
//           </div>
//           </div>

//           </div>
//       )
//       }
//     </nav>

//   </div>
// )

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
      window.localStorage.clear()
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
