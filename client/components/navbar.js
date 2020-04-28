import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {logout} from '../store'


const image =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f730e4ec-f0e0-42f9-a59d-17d16bf022c5/d6bffdt-d0bfa9a8-6f3b-4075-bf83-71460891b2a5.png/v1/fill/w_600,h_694,strp/princess_peach_jewels_by_rafaelmartins_d6bffdt-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk0IiwicGF0aCI6IlwvZlwvZjczMGU0ZWMtZjBlMC00MmY5LWE1OWQtMTdkMTZiZjAyMmM1XC9kNmJmZmR0LWQwYmZhOWE4LTZmM2ItNDA3NS1iZjgzLTcxNDYwODkxYjJhNS5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-5u8m4FLwPz__IbZZ0T9aqmbSfWk_ZcYfeH455cYxR4'
const peach =
  'https://ih1.redbubble.net/image.1011066268.6036/st,small,507x507-pad,600x600,f8f8f8.jpg'

const Navbar = ({handleClick, isLoggedIn, isAdmin}) => { 
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  
  });
  return (
    <div>
      <div className="header">
        <h1>
          <span id="peachy">
            {' '}
            PEACHY
            <span>
              <img className="peach" id="peach1" src={peach} />
            </span>
            PLANTS
          </span>
        </h1>
      </div>
      <nav className="navbar is-warning" role="navigation"  aria-label="main navigation">
      <div className="navbar-brand">
          <a className="navbar-item" href="/plants">
            <img src={image} width="30" height="28" />
          </a>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> 
        </div>
        {isAdmin ? (
          <div id="navbarBasicExample" className="navbar-menu is-active">
            {/* The navbar will show these links after you log in */}
            <div className="navbar-start">
              <a className="navbar-item" href="/home">
                Home
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Admin</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item"href="/admin">
                    Admin
                  </a>
                  <a className="navbar-item" href="/all-users">
                    Users
                  </a>
                  
                </div>
              </div>

              <a className="navbar-item" href="/cart">
                Cart
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Plants</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/plants">
                    All Plants
                  </a>
                  <a className="navbar-item" href="/bright-light">
                    Bright Light Plants
                  </a>
                  <a className="navbar-item" href="/low-light">
                    Low Light Plants
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-info" href="#" onClick={handleClick}>
                    <strong>Logout</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : isLoggedIn ? (
          <div id="navbarBasicExample" className="navbar-menu is-active">
            {/* The navbar will show these links after you log in */}
            <div className="navbar-start">
              <a className="navbar-item" href="/home">
                Home
              </a>
              <a className="navbar-item" href="/cart">
                Cart
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Plants</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/plants">
                    All Plants
                  </a>
                  <a className="navbar-item" href="/bright-light">
                    Bright Light Plants
                  </a>
                  <a className="navbar-item" href="/low-light">
                    Low Light Plants
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-info" href="#" onClick={handleClick}>
                    <strong>Logout</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="navbarBasicExample" className="navbar-menu is-active">
            <div className="navbar-start">
              <a className="navbar-item" href="/cart">
                Cart
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Plants</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/plants">
                    All Plants
                  </a>
                  <a className="navbar-item" href="/bright-light">
                    Bright Light Plants
                  </a>
                  <a className="navbar-item" href="/low-light">
                    Low Light Plants
                  </a>
                </div>
              </div>
            </div>
            {/* Log in and sign up */}
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-info" href="/signup">
                    <strong>Sign Up</strong>
                  </a>
                  <a className="button is-light" href="/login">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  )
}

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
