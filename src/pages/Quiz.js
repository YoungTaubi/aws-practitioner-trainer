// import { Storage } from "@aws-amplify/storage"
import { useEffect, useState } from "react";

export default function Quiz() {

    const [message, setMessage] = useState('')


    const postMessage = async  () => {
        await Storage.put("test.txt", "Hello");
        console.log('test');
    }

    const getMessage = async  () => {
        const message = await Storage.get("test.txt", {
            level: 'public'
        });
        setMessage(message)
    }

    const getAllMessages = () => {
        Storage.list('photos/')
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    const deleteMessage = async  () => {
        await Storage.remove("test.txt", {
            level: 'public'
        });
    }

    return (
        <>
            <h1>Quiz Page</h1>
            <button onClick={postMessage}>Post Message</button>
            <p>{message}</p>
            <button onClick={getMessage}>Post Message</button>
        </>
    )
}