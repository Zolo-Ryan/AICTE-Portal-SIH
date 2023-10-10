import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

export default function App(){
    const [user,setUser] = React.useState(undefined);
    if(!user){
        return <AuthPage onAuth={(user) => setUser(user)} />
    }
    else{
        return <ChatsPage user={user} />
    }
}