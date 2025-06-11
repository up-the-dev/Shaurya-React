function Demo({ user, userStatus }) {
  function handleClick() {
    console.log("User Info:", user);
  }

  return (
    <div style={{ border: "1px solid black" }} className="demo">
      <h1>Demo {userStatus ? "Active" : "Inactive"}</h1>
      <p>This is a demo component.</p>
      <p>User Info:</p>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>Email: {user.email}</li>
      </ul>

      <button
        style={{ padding: "10px 20px", fontSize: "16px" }}
        onClick={handleClick}
      >
        Show User Info
      </button>
    </div>
  );
}

function UserName() {
  return (
    <div>
      <h2>User Name John</h2>
    </div>
  );
}
export { UserName };

export default Demo;
