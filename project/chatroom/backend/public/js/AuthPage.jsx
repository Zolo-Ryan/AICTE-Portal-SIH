export default function AuthPage({onAuth}){
    function onSubmit(e) {
        e.preventDefault();
        const {value} = e.target[0];
        onAuth({username: value, secret: value})
    }

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome</div>
                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input type="text" className="auth-input" name="username" />
                    <button className="auth-button" type="Submit">Enter</button>
                </div>
            </form>
        </div>
    );
}