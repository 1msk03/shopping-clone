import React from "react";
import "./Stylesheets/Cart.css";
import { useSelector } from "react-redux";
import { AddCart, RemoveItem } from "../redux/cartSystem";
import { useDispatch } from "react-redux";

const Cart = (props) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((item) => item.cartProduct);

  const Loading = () => {
    return (
      <div className="empty__cart">
        <h1>No products in the cart.</h1>
      </div>
    );
  };

  return cartItems.length > 0 ? (
    <div className="cart__container">
      <div className="cart__outer-left">
        {cartItems.map((item, index) => {
          return (
            <div className="cart__inner" key={index}>
              <img src={item.image} alt={item.name} className="cart__image" />
              <div className="cartdetails__container">
                <div className="cartdetails">
                  <p>Name:</p>
                  <span>{item.name.toUpperCase()}</span>
                </div>
                <div className="cartdetails">
                  <p>Size:</p>
                  <span>{item.size}</span>
                </div>
                <div className="cartdetails">
                  <p>Price:</p>
                  <span>{item.price}Rs</span>
                </div>
              </div>

              <div className="cart__btn">
                <button
                  className="btn1"
                  onClick={() => dispatch(RemoveItem(item))}
                >
                  -
                </button>
                <div>{item.qty}</div>
                <button
                  className="btn2"
                  onClick={() => dispatch(AddCart(item))}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart__outer-right">
        <div className="cart__outer-right-inner">
          <div className="cart__outer-right-inner-title">Description</div>
          <div>
            <table className="cart__table">
              <tr className="table__header">
                <td>Item</td>
                <td>Qty.</td>
                <td>Price</td>
                <td>Tax</td>
                <td>Price with Tax</td>
              </tr>
              {cartItems.map((item) => (
                <tr className="table__data" key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price * item.qty}</td>
                  <td>8%({parseInt(item.price) * 0.08 * item.qty}rs)</td>
                  <td>
                    {item.qty * parseInt(item.price) * 0.08 +
                      parseInt(item.price) * item.qty}
                    /rs
                  </td>
                </tr>
              ))}
              <tr className="table__header">
                <td>Total</td>
                <td>
                  {cartItems.reduce(function (acc, obj) {
                    let totalQty = parseInt(obj.qty);
                    return acc + totalQty;
                  }, 0)}
                </td>
                <td>
                  {cartItems.reduce(function (acc, obj) {
                    let price = parseInt(obj.price * obj.qty);
                    return acc + price;
                  }, 0)}
                </td>
                <td>
                  {cartItems.reduce(function (acc, obj) {
                    let price = parseInt(obj.price * obj.qty);
                    return acc + price;
                  }, 0) * 0.08}
                </td>
                <td>
                  {cartItems.reduce(function (acc, obj) {
                    let price = parseInt(obj.price * obj.qty);
                    return acc + price;
                  }, 0) *
                    0.08 +
                    cartItems.reduce(function (acc, obj) {
                      let price = parseInt(obj.price * obj.qty);
                      return acc + price;
                    }, 0)}
                </td>
              </tr>
            </table>
          </div>
          <div className="cart__buttons">
            <button>Select Address</button>
            <button>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Cart;
