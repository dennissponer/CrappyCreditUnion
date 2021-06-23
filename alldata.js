
function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <><div class="card text-white bg-primary mb-3">
    <div class="card-body">
      
      List of Users
           <h5></h5>
    {JSON.stringify(ctx)}<br/>
    </div>
  </div>

    </>
  );
}
