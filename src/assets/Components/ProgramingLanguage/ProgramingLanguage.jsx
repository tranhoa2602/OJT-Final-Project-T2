import React, { useState } from "react";

const ProgramingLanguage = () => {
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
      alert("Please fill in all fields in Programing Language.");
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
      <section className="programlanguage">
        <div className="view_programlanguage">
          <h1> View All Programing </h1>{" "}
          <button type="submit"> Add New ProgramingLanguage </button>{" "}
          <table>
            <tr>
              <th> ID </th> <th> Name ProgramingLanguage </th> <th> Type </th>{" "}
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
        <div className="create_programlanguage">
          <h1> Add New ProgramingLanguage </h1>{" "}
          <form onSubmit={handleSubmit}>
            <div>
              <p> Name ProgramingLanguage </p>{" "}
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
                  Please enter name ProgramingLanguage{" "}
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
                  Please enter type ProgramingLanguage{" "}
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
                  Please enter status ProgramingLanguage{" "}
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
                  Please enter description ProgramingLanguage{" "}
                </span>
              )}{" "}
            </div>{" "}
            <button type="submit"> Submit </button>{" "}
          </form>{" "}
        </div>{" "}
        <div className="edit_programlanguage">
          <h1> Edit </h1>{" "}
          <form onSubmit={handleSubmit}>
            <div>
              <p> Name ProgramingLanguage </p>{" "}
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
                  Please enter name change ProgramingLanguage{" "}
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
                  Please enter type change ProgramingLanguage{" "}
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
                  Please enter status change ProgramingLanguage{" "}
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
                  Please enter description change ProgramingLanguage{" "}
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

export default ProgramingLanguage;
