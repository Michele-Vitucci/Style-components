import FocusableInput from "./Ref";
import Colors, { colorData } from "./Rendering-lists/Lists";
import TodoList from "./Rendering-lists/Lists-and-state";
import Welcome from "./Styling-components/Welcome";
import Counter from "./Styling-components/Counter";

import "./index.css";
import Loginin from "./Styling-components/Login";

function App() {
  return (
    <>
      <Welcome />
      <Counter />
      <Loginin />
      <FocusableInput />
      <Colors colors={colorData} />
      <TodoList />
    </>
  );
}

export default App;
