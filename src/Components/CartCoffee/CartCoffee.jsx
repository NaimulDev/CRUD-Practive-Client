import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CartCoffee = ({ coffee, coffees, setCoffees }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, quantity, supplier, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              // eslint-disable-next-line react/prop-types
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };
  return (
    <div className=" bg-[#F5F4F1] w-[548px] h-[300px] ">
      <div className="hero-content flex-col lg:flex-row justify-between mx-5 items-center ">
        <img
          src={photo}
          className=" rounded-lg shadow-2xl w-[185px] h-[239px]"
        />
        <div>
          <p>Name: {name}</p>
          <p>Chef: {quantity}</p>
          <p>Price: {supplier}</p>
        </div>
        <div>
          <Link to={`/updatecoffee/${_id}`} className="btn btn-xs">
            edit
          </Link>
          <br />
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-xs bg-red-700"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCoffee;
