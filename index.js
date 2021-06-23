function Spa() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [users, setUsers] = React.useState([]);

  const changeUser = (email, password) => {
    const userFound = users.find((user) => user.email === email);
    if (userFound) {
      if (userFound.password === password) {
        setCurrentUser(userFound);
        return true;
      } else {
        alert("Incorrect password");
        return false;
      }
    } else {
      alert("user not found");
      return false;
    }
  };
  const addUser = (name, email, password) => {
    setUsers([...users, { name, email, password, balance: 100 }]);
  };
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{ users, currentUser, changeUser, addUser }}>
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));

//
// {
//   users: [
//     { name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 },
//   ];}
// }
