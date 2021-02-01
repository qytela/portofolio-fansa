import 'tailwindcss/tailwind.css'

import React, { Fragment, memo, useState, useEffect } from 'react'
import moment from 'moment'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCcmZvF9nuoQ98qYcCetW0HOKvA3q0_BvM",
        authDomain: "reactjs-chat-app-f7482.firebaseapp.com",
        projectId: "reactjs-chat-app-f7482",
        storageBucket: "reactjs-chat-app-f7482.appspot.com",
        messagingSenderId: "106552946757",
        appId: "1:106552946757:web:27f629a0154aa85689b32c"
    })
} else {
    firebase.app() // if already initialized, use that one
}

const auth = firebase.auth()
const firestore = firebase.firestore()

const SixPost = () => {
    const [user] = useAuthState(auth)

    return (
        user ? <ChatRoom /> : <SignIn />
    )
}

const ChatRoom = () => {
    const [messages, setMessages] = useState([])

    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [dataMessage] = useCollectionData(query, { idField: 'id' })

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = () => {
        const tempMessages = [
            {
                id: 1,
                author: 'apple',
                message: 'Hallo bro',
                timestamp: new Date().getTime()
            },
            {
                id: 2,
                author: 'orange',
                message: 'Woy bro apa kabar',
                timestamp: new Date().getTime()
            },
            {
                id: 3,
                author: 'orange',
                message: 'Kenapa nih tiba tiba ngechat',
                timestamp: new Date().getTime()
            },
            {
                id: 4,
                author: 'apple',
                message: 'Ngga bro, nanya kabar lu aja',
                timestamp: new Date().getTime()
            },
            {
                id: 5,
                author: 'apple',
                message: 'Tinggal dimana sekarang nih?',
                timestamp: new Date().getTime()
            },
            {
                id: 6,
                author: 'apple',
                message: 'Main lah sini wkwk',
                timestamp: new Date().getTime()
            },
            {
                id: 7,
                author: 'orange',
                message: 'Pulogadung sekarang',
                timestamp: new Date().getTime()
            },
            {
                id: 8,
                author: 'orange',
                message: 'Main kemana :v',
                timestamp: new Date().getTime()
            },
            {
                id: 9,
                author: 'apple',
                message: 'Main ke ancol lagi wkwk',
                timestamp: new Date().getTime()
            },
            {
                id: 10,
                author: 'orange',
                message: 'Kapan kapan lah gas wkwk',
                timestamp: new Date().getTime()
            },
        ]

        setMessages([...messages, ...tempMessages])
    }

    const renderMessages = () => {
        let i = 0
        let tempMessages = []

        while (i < messages.length) {
            const previous = messages[i - 1]
            const current = messages[i]
            const next = messages[i + 1]

            const isMine = current.author == 'apple'

            const currentMoment = moment(current.timestamp)
            const prevBySameAuthor = false
            const nextBySameAuthor = false
            const startsSequence = true
            const endsSequence = true

            if (previous) {
                let previousMoment = moment(previous.timestamp)
                let previousDuration = moment.duration(currentMoment.diff(previousMoment))
                prevBySameAuthor = previous.author === current.author
                
                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false
                }
            }

            if (next) {
                let nextMoment = moment(next.timestamp)
                let nextDuration = moment.duration(nextMoment.diff(currentMoment))
                nextBySameAuthor = next.author === current.author

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false
                }
            }

            console.log('isMine: ' + isMine, 'start: ' + startsSequence, 'end: ' + endsSequence)

            tempMessages.push(
                <Messages
                    key={i}
                    data={current}
                    { ...{ isMine } }
                    { ...{ startsSequence } }
                    { ...{ endsSequence } }
                />
            )

              // Proceed to the next message.
            i += 1
        }

        return tempMessages
    }

    const sendMessage = async () => {
        await messagesRef.add({
            text: 'Hello world',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: auth.currentUser.uid,
            photoURL: auth.currentUser.photoURL
        })
    }

    const signOut = () => {
        auth.signOut()
    }

    return (
        <Fragment>
            <div className="overscroll-none">
                <div className="fixed w-full bg-green-400 h-16 pt-1 text-white flex justify-between shadow-md overscroll-none top-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 my-1 text-white ml-2"
                    >
                        <path
                            className="text-white fill-current"
                            d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
                        />
                    </svg>
                    <button className="my-4 text-white font-bold text-lg tracking-wide" onClick={() => signOut()}>Sign Out</button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon-dots-vertical w-8 h-8 mt-3 mr-2"
                    >
                        <path
                            className="text-white fill-current"
                            fillRule="evenodd"
                            d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                        />
                    </svg>
                </div>

                <div className="mt-20 mb-16 px-1">
                    {renderMessages()}
                </div>
            </div>
        </Fragment>
    )
}

const Messages = ({
    data,
    isMine,
    startsSequence,
    endsSequence
}) => {
    let marginTop = 'mt-0'
    let rounded = 'rounded-xl'

    if (isMine && startsSequence && endsSequence) {
        marginTop = 'mt-2'
    }

    if (!isMine && startsSequence && endsSequence) {
        marginTop = 'mt-2'
    }

    if (isMine && !startsSequence && !endsSequence) { // border top right = 0, border bot right = 0
        rounded = 'rounded-tl-3xl rounded-tr-0 rounded-bl-3xl rounded-br-0'
    }

    if (isMine && startsSequence && !endsSequence) { // border bot right = 0
        marginTop = 'mt-2'
        rounded = 'rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-0'
    }

    if (isMine && !startsSequence && endsSequence) { // border top right = 0
        rounded = 'rounded-tl-3xl rounded-tr-0 rounded-bl-3xl rounded-br-3xl'
    }

    if (!isMine && !startsSequence && !endsSequence) { // border top left = 0, border bot left = 0
        rounded = 'rounded-tl-3xl rounded-tl-0 rounded-bl-3xl rounded-bl-0'
    }

    if (!isMine && startsSequence && !endsSequence) { // border bot left = 0
        marginTop = 'mt-2'
        rounded = 'rounded-tl-3xl rounded-tr-3xl rounded-bl-0 rounded-br-3xl'
    }

    if (!isMine && !startsSequence && endsSequence) { // border top left = 0
        rounded = 'rounded-tl-0 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl'
    }

    return (
        <>
            <div className={`${marginTop}`}></div>
            <div className={`flex ${isMine ? 'justify-end' : 'flex-col'} m-1`}>
                <div className="flex">
                    <div className={`${isMine ? 'bg-blue-500' : 'bg-gray-200'} p-3 ${rounded}`}>
                        <p className={`${isMine ? 'text-white' : 'text-black'} text-sm`}>{data.message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div className="h-full flex flex-col justify-center p-4">
            <div className="flex justify-center">
                <button className="bg-blue-500 p-4 rounded-xl text-white font-semibold font-nunito" onClick={() => signInWithGoogle()}>SigIn With Google</button>
            </div>
        </div>
    )
}

export default memo(SixPost)