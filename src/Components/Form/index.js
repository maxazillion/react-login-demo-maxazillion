import PropTypes from "prop-types";

const Form = ({ handle, msg }) => {
  return (
    <>
      <div className="border-gray-400 border-2 max-w-xl">
        <p>{msg}</p>
        <form name="myForm" onSubmit={handle}>
          User Name:{" "}
          <input
            className="border-gray-400 border-2 m-2"
            type="text"
            name="userName"
          ></input>
          Password:{" "}
          <input
            className="border-gray-400 border-2 m-2"
            type="text"
            name="password"
          ></input>
          <button
            type="submit"
            value="Submit"
            className="bg-gray-400 rounded p-1 m-2"
          >
            enter
          </button>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  expectedPass: PropTypes.string.isRequired,
  expectedUser: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Form;
