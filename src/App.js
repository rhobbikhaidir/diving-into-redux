import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthed = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthed)

  return (
    <Fragment>
      <Header />
      {!isAuthed && <Auth />}
     {isAuthed && <UserProfile /> } 
      <Counter />
    </Fragment>
  );
}

export default App;
