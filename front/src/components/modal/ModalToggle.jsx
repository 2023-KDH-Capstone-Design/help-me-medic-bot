import React from "react";

const ModalToggle = (props) => {
  const { label } = props;
  const id = `modal-${label.toLowerCase().replace(/\s+/g, "-")}`;

  const modalToggleHandler = () => {
    props.onToggle(label);
  };

  return (
    <label
      htmlFor={id}
      className="btn btn-outline btn-primary rounded-xl"
      onClick={modalToggleHandler}
    >
      {label}
    </label>
  );
};

export default ModalToggle;
