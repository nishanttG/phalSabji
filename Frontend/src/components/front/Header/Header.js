import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
// import Home
const Header = ({cartItems}) => {
    return (
        <>
        <header className="header">

            <div>
                <img src="./images/logo.png" alt="" />

            </div>

            <div className="header-Links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/contactus"  >Contact Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup"  >SignUp</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/login"  >Login</Link>
                    </li>
                </ul>
                {/* <ul>
                    <li>
                        <Link to="/home"><Home/></Link>
                    </li>
                </ul> */}
                
                
                
                <ul>
                    <li>
                        <Link to="/cart" className="cart" >
                            <i className="fas fa-shopping-cart" />
                            <span className="cart-lenght">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>


            </div>
            </header>
        </>
    );
}

export default Header;
// import React from 'react'

// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = ({cartItems}) => {
//     return (
//         <>
//         <header classNameName="header">

//             <div>
//                 <img src="./images/logo.png" alt="" />

//             </div>

// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

//             </header>
//         </>
//     );
// }

// export default Header;
