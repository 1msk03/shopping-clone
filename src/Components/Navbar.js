import React from "react";
import "./Stylesheet/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const { cartItems } = useSelector((item) => item.cartProduct);
  const data = props.data;

  return (
    <>
      <div className="navbar">
        <div className="nav__container">
          <Link to="/" className="logo">
            <h2>LOGO</h2>
          </Link>

          <div className="selector">
            <label>Language</label>
            <select>
              <option value="">ENGLISH</option>
              <option value="">HINDI</option>
            </select>
          </div>
          <div className="cart__icon-container">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="2xl"
                className="cart__icon"
              />
            </Link>
            <div className="cart__icon-count">{cartItems.length}</div>
          </div>
        </div>
        <div className="list__container">
          <div className="list">
            {data.sort().map((item, index) => {
              return (
                <li key={index} className="list__items">
                  <NavLink
                    to={`/product/${item.name}`}
                    activeClassName="active"
                    className="list-items"
                  >
                    {item.name.toUpperCase()}
                  </NavLink>
                </li>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div>
        {data.map((item) => (
          <List id={item.id} />
        ))}
      </div> */}
    </>
  );
};

export default Navbar;
