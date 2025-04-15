import { useState } from 'react';

function Login() {
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [result, setResult] = useState('');

  async function doLogin(event: any): Promise<void> {
    event.preventDefault();
  
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: loginName,
        password: loginPassword,
      }),
    });
  
    const data = await response.json();
  
    if (data.id < 1) {
      setResult('Login failed');
    } else {
      setResult(`Welcome, ${data.firstName} ${data.lastName}`);
      setTimeout(() => {
        window.location.href = '/cards';
      }, 1000);
    }
  }
  

  return (
    <div id="loginDiv">
      <span id="inner-title">PLEASE LOG IN</span><br />
      <input
        type="text"
        placeholder="Username"
        value={loginName}
        onChange={(e) => setLoginName(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      /><br />
      <input type="submit" value="Do It" onClick={doLogin} />
      <br />
      <span>{result}</span>
    </div>
  );
}

export default Login;
