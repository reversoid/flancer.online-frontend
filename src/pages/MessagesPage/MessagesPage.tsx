import Message, { IMessage } from 'components/Message/Message'
import { nanoid } from 'nanoid'
import 'pages/MessagesPage/styles.scss'


const messages: Array<IMessage> = [
  {
    sender: "Олег тиньков",
    text: "Hello banana!",
    date: "21:29"
  },
  {
    sender: "Олег тиньков",
    text: "Hello banana!",
    date: "21:29",
    countNew: 1
  },
  {
    sender: "Олег тиньков",
    text: "Hello banana!",
    date: "21:29",
    countNew: 10
  },
  {
    sender: "Олег тиньков",
    text: "Hello banana!",
    date: "21:29",
    countNew: 10
  },
  {
    sender: "Олег тиньков",
    text: "Hello banana!",
    date: "21:29",
    countNew: 10
  },
  {
    sender: "Олег тиньков",
    text: "Hello banana!",
    date: "21:29",
    countNew: 10
  },
]

export default function MessagesPage() {
  return (
    <div className='messages container'>
      {messages.map((message) =>
        <Message
          sender={message.sender}
          date='now'
          text={message.text}
          countNew={message.countNew}
          key={nanoid()}
        />)}
    </div>
  )
}
