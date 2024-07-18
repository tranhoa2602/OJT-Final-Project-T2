import React, { useState } from "react";

const ProjectManagement = () => {
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
      alert("Please fill in all fields in Project.");
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
      <section className="project_infor">
        <div className="view_project">
          <h1> View All Project </h1>{" "}
          <button type="submit"> Add New Project </button>{" "}
          <table>
            <tr>
              <th> ID </th> <th> Name Project </th> <th> Type </th>{" "}
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
        <div className="create_project"> </div>{" "}
        <div className="edit_project"> </div>{" "}
        <div className="delete_project"> </div>{" "}
        <div className="export_project"> </div>{" "}
      </section>{" "}
      <section className="assigning_employ">
        <div className="assigning_employ"> </div>{" "}
        <div className="sendemaill"> </div>{" "}
      </section>{" "}
    </main>
  );
};

export default ProjectManagement;
