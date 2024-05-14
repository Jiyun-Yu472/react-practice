import { useRef, useState } from "react";
import { Stomp } from 'stompjs/lib/stomp.min';

const Socket = () => {
    const client = useRef(null);

    const [url, setUrl] = useState('ws://192.168.0.127:8081/ws/websocket');
    const [destination, setDestination] = useState('/topic/messages');
    
    const [sentMessage, setSentMessage] = useState('');
    const [receivedMessage, setReceivedMessage] = useState('');

    function connect(event) {
        event.preventDefault();

        client.current = Stomp.client(url);

        client.current.debug = function(str) {
            console.log('debug: ', str);
        };

        client.current.connect({}, (frame) => {
            client.current.debug("connected to Stomp");

            client.current.subscribe(destination, function({body}) {
                const message = JSON.parse(body).payload;
                setReceivedMessage((prev) => prev + message + '\n');
                console.log("message: ", message);
            });
        }); 
    }

    function disconnect(event) {
        client.current.disconnect();
        console.log("Disconnected");
    }

    function send (event) {
        event.preventDefault();

        client.current.send("/app/hello", {}, JSON.stringify({'text': sentMessage}));
        setSentMessage('');
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h2>Server Connection</h2>
                        <form onSubmit={connect}>
                            <p>WebSocket URL</p>
                            <input type="text" name="url" value={url} onChange={(event) => {setUrl(event.target.value)}} />
                            <p>Destination</p>
                            <input type="text" name="destination" value={destination} onChange={(event) => {setDestination(event.target.value)}} />
                            <button type="submit">Connect</button>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Chat Room</h2>
                        <div style={{ whiteSpace: "pre-wrap"}}>
                            {receivedMessage}
                        </div>
                        <button type="button" onClick={disconnect}>Disconnect</button>
                        <form onSubmit={send}>
                            <input type="text" placeholder="Type your message here" value={sentMessage} onChange={(event) => {setSentMessage(event.target.value)}}/>
                            <button type="submit">Send</button>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Socket