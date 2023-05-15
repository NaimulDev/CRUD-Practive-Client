import React from "react";

import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Successfully added",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl text-slate-950 font-bold mb-5">Add New Coffee</h1>
      <p className="mb-5">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at
        <br />
        its layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed
        <br />
        to using Content here.
      </p>
      <form onSubmit={handleAdd} className="mx-auto lg:w-2/3">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="quantity"
                placeholder="Coffee Chef"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* photo */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <label className="input-group input-group-vertical">
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered"
            />
          </label>
        </div>
        <button className="btn  w-full">Add Coffee</button>
      </form>
    </div>
  );
};

export default AddCoffee;
