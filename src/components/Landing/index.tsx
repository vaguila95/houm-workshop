import useAuthentication from "../../hooks/useAuthentication";

const Landing = () => {
  const { handleLogin } = useAuthentication();
  return (
    <div>
      <h2>Landing</h2>
      <button type="button" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};

export default Landing