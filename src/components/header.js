import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Wrapper from "./wrapper"

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      padding: `1.45rem`,
    }}
  >
    <Wrapper>
      <h1 style={{ textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: `#FFC107`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <h2 style={{ textAlign: 'center' }}>{siteDescription}</h2>
      </div>
    </Wrapper>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
