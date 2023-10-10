import axios from 'axios';

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const secret = e.target.password.value;
      const first_name = e.target.first_name.value;
      axios.post("http://localhost:5000/chats/authenticate",
       { 
        username: username,
        secret: secret,
        first_name: first_name
       }
      )
      .then(r => props.onAuth({...r.data,secret: secret}))
      .catch(e => console.log(e));
      props.onAuth({ username: username, secret: secret });
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">First Name</div>
            <input className="auth-input" name="first_name" />
          </div>
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
          </div>
          <div className="auth">
            <div className="auth-label">Password</div>
            <input className="auth-input" name="password" type='password' />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;
  