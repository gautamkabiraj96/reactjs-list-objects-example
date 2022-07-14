import "./styles.css";
import UsersList from "./UserList";
import usersData from "./usersData";

export default function App() {
  return (
    <div className="App">
      <UsersList users={usersData} />
    </div>
  );
}
