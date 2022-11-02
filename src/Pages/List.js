import React from "react";
import "./Stylesheets/List.css";
import data from "../Data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart } from "../redux/cartSystem";

const List = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { name } = params;
  const filtered = data.filter((item) => item.name === name);

  return (
    <div className="listItem__container">
      <div className="listItem__container-header">
        <h2>All products</h2>
      </div>
      <div className="listItem__outer">
        {name
          ? filtered.map((item, index) => {
              return (
                <div className="listItem__inner" key={index}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="listItem__image"
                  />
                  <div className="itemdetails">
                    <p>Name</p>
                    <span>{item.name.toUpperCase()}</span>
                  </div>
                  <div className="itemdetails">
                    <p>Size</p>
                    <span>{item.size}</span>
                  </div>
                  <div className="itemdetails">
                    <p>Price</p>
                    <span>{item.price}Rs</span>
                  </div>

                  <div className="listitem__btn">
                    <button onClick={() => dispatch(AddCart(item))}>
                      Move to Cart
                    </button>
                    <button>Buy Now</button>
                  </div>
                </div>
              );
            })
          : data.map((item, index) => {
              return (
                <div className="listItem__inner" key={index}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="listItem__image"
                  />
                  <div className="itemdetails">
                    <p>Name</p>
                    <span>{item.name}</span>
                  </div>
                  <div className="itemdetails">
                    <p>Size</p>
                    <span>{item.size}</span>
                  </div>
                  <div className="itemdetails">
                    <p>Price</p>
                    <span>{item.price}</span>
                  </div>

                  <div className="listitem__btn">
                    <button onClick={() => dispatch(AddCart(item))}>
                      Move to Cart
                    </button>
                    <button>Buy Now</button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default List;
