const UsersListItem = ({ user }) => {
  return (
    <li className="bg-blue">
      <img src={user.picture.medium} alt="" />
      <h3>
        {user.name.title} {user.name.first} {user.name.last}
      </h3>
      <p>{user.email}</p>
    </li>
  );
};

export default UsersListItem;
