import "./App.css";

// redux
import { Provider } from "react-redux";
import ReduxThemeSwitcher from "./practice_problems/08_redux_theme_switcher/ReduxThemeSwitcher";
import store from "./practice_problems/08_redux_theme_switcher/redux/store/store";

// import TimerStopWatch from "./practice_problems/07_timer_stopwatch/TimerStopWatch";
// import DigitalClock from "./practice_problems/06_digital_clock/DigitalClock";
// import ObjectManipulation from "./practice_problems/05_like_objects_manipulation/ObjectManipulation";
// import Todo from "./practice_problems/04_todo_notes_app/Todo";
// import InputCharacterCounter from "./practice_problems/03_input_character_counter/InputCharacterCounter";
// import ButtonToggle from "./practice_problems/02_button_toggle_show_hide/ButtonToggle";
// import Counter from "./practice_problems/01_counter_dynamic_classes/Counter";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <ButtonToggle /> */}
      {/* <InputCharacterCounter /> */}
      {/* <Todo /> */}
      {/* <ObjectManipulation /> */}
      {/* <DigitalClock /> */}
      {/* <TimerStopWatch /> */}
      <Provider store={store}>
        <ReduxThemeSwitcher />
      </Provider>
    </>
  );
}

export default App;
