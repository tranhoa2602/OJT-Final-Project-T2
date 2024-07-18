import React, { useState } from "react";

const Technology = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    status: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    type: false,
    status: false,
    description: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      resetForm();
    } else {
      alert("Please fill in all fields in Technology.");
      updateFormErrors();
    }
  };

  const validateForm = () => {
    return (
      formData.name !== "" &&
      formData.type !== "" &&
      formData.status !== "" &&
      formData.description !== ""
    );
  };

  const updateFormErrors = () => {
    setFormErrors({
      name: formData.name.trim() === "",
      type: formData.type.trim() === "",
      status: formData.status.trim() === "",
      description: formData.description.trim() === "",
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      type: "",
      status: "",
      description: "",
    });
    setFormErrors({
      name: false,
      type: false,
      status: false,
      description: false,
    });
  };

  return (
    <main>
      <section className="infor_tech">
        <div className="view_tech">
          <h1> View Technology </h1>{" "}
          <button type="submit"> Add New Teachnology </button>{" "}
          <table>
            <tr>
              <th> ID </th> <th> Name Technology </th> <th> Type </th>{" "}
              <th> Status </th> <th> Description </th>
              <th> Edit </th> <th> Delete </th>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> React </td> <td> Frontend </td>{" "}
              <td> Active </td>{" "}
              <td> JavaScript library for building user interfaces. </td>{" "}
              <td>
                {" "}
                <button type="primary"> Edit </button>{" "}
              </td>{" "}
              <td>
                {" "}
                <button type="danger"> Delete </button>{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              <td> 2 </td> <td> React </td> <td> Frontend </td>{" "}
              <td> Active </td>{" "}
              <td> JavaScript library for building user interfaces. </td>{" "}
              <td>
                {" "}
                <button type="primary"> Edit </button>{" "}
              </td>{" "}
              <td>
                {" "}
                <button type="danger"> Delete </button>{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              <td> 3 </td> <td> React </td> <td> Frontend </td>{" "}
              <td> Active </td>{" "}
              <td> JavaScript library for building user interfaces. </td>{" "}
              <td>
                {" "}
                <button type="primary"> Edit </button>{" "}
              </td>{" "}
              <td>
                {" "}
                <button type="danger"> Delete </button>{" "}
              </td>{" "}
            </tr>{" "}
          </table>{" "}
        </div>{" "}
        <div className="create_tech">
          <h1> Add New Teachnology </h1>{" "}
          <form onSubmit={handleSubmit}>
            <div>
              <p> Name Technology </p>{" "}
              <input
                placeholder="Enter Your Text Here"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={formErrors.name ? "error" : ""}
              />{" "}
              {formErrors.name && (
                <span className="error-text">
                  {" "}
                  Please enter name technology{" "}
                </span>
              )}{" "}
            </div>{" "}
            <div>
              <p> Type </p>{" "}
              <input
                placeholder="Enter Your Text Here"
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={formErrors.type ? "error" : ""}
              />{" "}
              {formErrors.type && (
                <span className="error-text">
                  {" "}
                  Please enter type technology{" "}
                </span>
              )}{" "}
            </div>{" "}
            <div>
              <p> Status </p>{" "}
              <input
                placeholder="Enter Your Text Here"
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={formErrors.status ? "error" : ""}
              />{" "}
              {formErrors.status && (
                <span className="error-text">
                  {" "}
                  Please enter status technology{" "}
                </span>
              )}{" "}
            </div>{" "}
            <div>
              <p> Description </p>{" "}
              <input
                placeholder="Enter Your Text Here"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={formErrors.description ? "error" : ""}
              />{" "}
              {formErrors.description && (
                <span className="error-text">
                  {" "}
                  Please enter description technology{" "}
                </span>
              )}{" "}
            </div>{" "}
            <button type="submit"> Submit </button>{" "}
          </form>{" "}
        </div>{" "}
        <div className="edit_tech">
          <h1> Edit </h1>{" "}
          <form onSubmit={handleSubmit}>
            <div>
              <p> Name Technology </p>{" "}
              <input
                placeholder="Enter Your Text Here"
                type="text"
                name="nameedit"
                value={formData.name}
                onChange={handleChange}
                className={formErrors.name ? "error" : ""}
              />{" "}
              {formErrors.name && (
                <span className="error-text">
                  {" "}
                  Please enter change name technology{" "}
                </span>
              )}{" "}
            </div>{" "}
            <div>
              <p> Type </p>{" "}
              <input
                placeholder="Enter Your Text Here"
                type="text"
                name="typeedit"
                value={formData.type}
                onChange={handleChange}
                className={formErrors.type ? "error" : ""}
              />{" "}
              {formErrors.type && (
                <span className="error-text">
                  {" "}
                  Please enter change type technology{" "}
                </span>
              )}{" "}
            </div>{" "}
            <div>
              <p> Status </p>{" "}
              <input
                placeholder="Enter Your Text Here"
                type="text"
                name="statusedit"
                value={formData.status}
                onChange={handleChange}
                className={formErrors.status ? "error" : ""}
              />{" "}
              {formErrors.status && (
                <span className="error-text">
                  {" "}
                  Please enter change status technology{" "}
                </span>
              )}{" "}
            </div>{" "}
            <div>
              <p> Description </p>{" "}
              <input
                placeholder="Enter Your Text Here"
                type="text"
                name="descriptionedit"
                value={formData.description}
                onChange={handleChange}
                className={formErrors.description ? "error" : ""}
              />{" "}
              {formErrors.description && (
                <span className="error-text">
                  {" "}
                  Please enter change description technology{" "}
                </span>
              )}{" "}
            </div>{" "}
            <button type="submit"> Submit </button>{" "}
          </form>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
};

export default Technology;
