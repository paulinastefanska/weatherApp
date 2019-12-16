import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="City name..."
      />
      <button>Search</button>
    </form>
  );
};

export default Form;
