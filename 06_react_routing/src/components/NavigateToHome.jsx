import { useNavigate } from "react-router-dom";

function NavigateToHome() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <button onClick={clickHandler}>Home</button>
      </div>
    </>
  );
}

export default NavigateToHome;
