import PropTypes from "prop-types";

const Form = ({ handle }) => {
  return (
    <>
      <form name="myForm" onSubmit={handle}>
        User Name: <input type="text" name="userName"></input>
        Password: <input type="text" name="password"></input>
        <button type="submit" value="Submit">
          kuh
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  expectedPass: PropTypes.string.isRequired,
  expectedUser: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Form;
