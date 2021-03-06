function CreateAccount(props) {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitDisbaled, setSubmitDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    console.log(ctx, "this is the current user");
  }, []);

  React.useEffect(() => {
    if (!(name || email || password)) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [name, email, password]);

  function validate(field, label) {
    if ((label === "name" || label === "email") && !field) {
      setStatus("Error: " + label + " must contain a value.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (label === "password" && field.length < 9) {
      setStatus("Error: " + label + " must be greater than eight characters.");
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function create() {
    ctx.addUser(name, email, password);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value, "name")}
            />
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value, "email");
              }}
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
              onChange={(e) => {
                setPassword(e.currentTarget.value, "password");
              }}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
              disabled={submitDisbaled}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={create}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
