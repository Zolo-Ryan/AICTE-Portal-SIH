import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => { //contains username and secret
    return (
        <div style={{height: "100vh"}}>
            <PrettyChatWindow
             projectId="23d0fe2c-8fdd-4801-809e-ded3d506ec15"
             username={props.user.username}
             secret={props.user.secret}
             style={{height: "100%",
                    backgroundColor: "yellow"}}
            />
        </div>
    )
}

export default ChatsPage;