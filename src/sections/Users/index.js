import UserList from "./components/UsersList";

function UsersSection() {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList />
      </div>
    </section>
  );
}

export default UsersSection;
