import React from "react";

const ModalToggle = (props) => {
  const { label } = props;
  const id = `modal-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <label htmlFor={id} className="btn btn-outline btn-primary rounded-xl">
      {label}
    </label>
  );
};

export default ModalToggle;
