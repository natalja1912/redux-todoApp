import { Provider } from "react-redux";
import Header from "./Header";
import AddToDo from './AddTodo';
import { store } from "../redux/configureStore";
import VisibleTodoList from "./VisibleTodoList";
import "../styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <AddToDo></AddToDo>
        <VisibleTodoList></VisibleTodoList>
      </div>
    </Provider>
  );
}

export default App;
