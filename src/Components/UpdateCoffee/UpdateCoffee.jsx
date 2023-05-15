import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  const { _id } = coffee;

  const handleUpdateCoffee = (event) => {
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

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Update Successfully ",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl text-slate-950 font-bold mb-5">Update Coffee</h1>
      <p className="mb-5">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at
        <br />
        its layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed
        <br />
        to using Content here.
      </p>
      <form onSubmit={handleUpdateCoffee} className="mx-auto lg:w-2/3">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="name"
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
              defaultValue={photo}
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered"
            />
          </label>
        </div>
        <input type="submit" value="Update Coffee" className="btn  w-full" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
