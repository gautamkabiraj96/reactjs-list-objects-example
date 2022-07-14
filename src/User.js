const User = ({ name, age, email }) => {
  return (
    <article className="list-container">
      <h2>
        {name} ({age})
      </h2>
      <h3>{email}</h3>
    </article>
  );
};

export default User;
