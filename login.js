function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const ctx = React.useContext(UserContext);

  const login = () => {
    console.log(ctx);
    if (ctx.changeUser(email, password)) setSuccess(true);
  };

  return !success ? (
    <Card
      bgcolor="primary"
      header="Log In"
      status={status}
      body={
        <>
          Email address
          <br />
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          Password
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="btn btn-light" onClick={login}>
            Log in
          </button>
        </>
      }
    />
  ) : (
    <>
      <h5>Success</h5>
      <h2>{ctx.currentUser.name + " is currently logged in."}</h2>
    </>
  );
}
