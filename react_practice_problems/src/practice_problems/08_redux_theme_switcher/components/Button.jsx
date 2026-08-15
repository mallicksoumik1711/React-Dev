import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/features/themeSlice";

function Button() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  //   console.log(theme)

  return (
    <>
      <div className="absolute top-50 left-50">
        <button
          onClick={() => dispatch(changeTheme())}
          className="bg-zinc-900 px-10 py-4 rounded-md"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </>
  );
}

export default Button;
