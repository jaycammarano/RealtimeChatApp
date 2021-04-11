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
        <h1>Home Page</h1>
        <p>Uses React and Graphql. Simple chat functionality that takes advantage of websockets to give a live chat function between multiple users.

        The chat app is loaded into a separate app, Home Page, via Webpack 5's ModuleFederation plugin.</p>
        <h2>Chat</h2>
        <div>
            <Chat />
        </div>
    </Container>)};

ReactDOM.render(<App />, document.getElementById("app"));
