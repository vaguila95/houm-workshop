import useAuthentication from "../../hooks/useAuthentication";

const BeersApp = () => {
  const { handleLogout } = useAuthentication();
  return (
    <div>
      <h2>Beers App</h2>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
};

export default BeersApp;