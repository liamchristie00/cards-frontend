function LoggedInName() {
  return (
    <div>
      <span>Logged In As John Doe</span>
      <button onClick={() => (window.location.href = '/')}>Log Out</button>
    </div>
  );
}

export default LoggedInName;
