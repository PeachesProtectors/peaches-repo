import React from 'react'

const Navbar = () => (
  <div>
    <footer className="footer">
      {/* <!-- Left side --> */}
      <div className="level-left">
        <div className="level-item">
          <p className="subtitle is-5">
            <strong>Contact us: </strong>
          </p>
        </div>
        <div className="level-item">
          <div className="field has-addons" />
        </div>
      </div>

      {/* <!-- Right side --> */}
      <div className="level-right">
        <p className="buttons">
          <button className="button is-medium">
            <span className="icon is-small">
              <i className="fab fa-facebook" />
            </span>
          </button>
          <button className="button is-medium">
            <span className="icon is-small">
              <i className="fab fa-instagram" />
            </span>
          </button>
          <button className="button is-medium">
            <span className="icon is-small">
              <i className="fab fa-twitter" />
            </span>
          </button>
        </p>
      </div>
    </footer>
  </div>
)

export default Navbar
