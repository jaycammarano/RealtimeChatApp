import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "chat/Chat";
import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";
const App = () => {
    return (
    <Container>
        <p>Heres some text</p>
        <h1>Chat</h1>
        <div>
            <Chat />
        </div>
        <p>And Some More</p>
    </Container>)};

ReactDOM.render(<App />, document.getElementById("app"));
