import User from "./User";

const UsersList = ({ users }) => {
  return (
    <section>
      {users.map((user, index) => {
        return <User key={user.id} {...user}></User>;
      })}
    </section>
  );
};

export default UsersList;
