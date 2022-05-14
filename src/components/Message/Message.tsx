import 'components/Message/styles.scss';

export interface IMessage {
    sender: string,
    text: string,
    // TODO what about date string?
    date: string,
    countNew?: number
}

export default function Message(message: IMessage) {
    return (
        <div className="message color-light">
            <div className="message__avatar"></div>
            <div className="message__content">
                <span className="message__sender">{message.sender}</span>
                <p className="message__text">
                    {message.text}
                </p>
            </div>

            <div className="message__info">
                <span className="message__date">{message.date}</span>
                    {message.countNew?
                        <div className="message__count-new">{message.countNew}</div>
                        :''
                    }

            </div>
            
        </div>
    )
}
