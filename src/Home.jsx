import PropTypes from 'prop-types';


const Home = ({onLogout}) => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

Home.propTypes = {
    onLogout: PropTypes.func.isRequired,
};


export default Home;