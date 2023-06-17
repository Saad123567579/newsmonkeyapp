import React from 'react'

function Navbar(props) {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{position:"sticky"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">News Monkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Display Per Page
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" onClick={props.handlePages} href="#">5</a></li>
            <li><a className="dropdown-item" onClick={props.handlePages} href="#">10</a></li>
            <li><a className="dropdown-item" onClick={props.handlePages} href="#">15</a></li>
            <li><a className="dropdown-item" onClick={props.handlePages} href="#">20</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" onClick={props.handleCategoryChange} href="#">Sports</a></li>
            <li><a className="dropdown-item" onClick={props.handleCategoryChange} href="#">Cricket</a></li>
            <li><a className="dropdown-item" onClick={props.handleCategoryChange} href="#">Science</a></li>
            <li><a className="dropdown-item" onClick={props.handleCategoryChange} href="#">Health</a></li>
            <li><a className="dropdown-item" onClick={props.handleCategoryChange} href="#">Technology</a></li>
            <li><a className="dropdown-item" onClick={props.handleCategoryChange} href="#">Islam</a></li>

          </ul>
        </li>
        
        
        
      </ul>
      
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success"  onClick={props.handleSearch}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

