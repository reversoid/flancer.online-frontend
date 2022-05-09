import { nanoid } from 'nanoid'

import 'components/Order/styles.scss'
import OrderTag from 'components/OrderTag/OrderTag'

export interface IOrder {
    title: string,
    description: string,
    date?: string,
    price: string,
    createdAt: string,
    tags: Array<string>
}

export default function Order(orderData: IOrder) {
    return (
        <div className="order">
            <div className="order__data">
                <h2 className="order__title">{orderData.title}</h2>
                {/* TODO CREATE MARKDOWN */}
                <p className='order__description'>
                    {orderData.description}
                </p>
                <label className="order__date">
                    <div className="order__date-img"></div>
                    <span>{orderData.date}</span>
                </label>
            </div>
            <div className="order__info">
                <span className="order__price">
                    {orderData.price}
                </span>
                <div className="order__created-at">
                    <div className="order__created-at-img"></div>
                    <span>{orderData.createdAt}</span>
                </div>
            </div>
            <div className="order__tags">
                {orderData.tags.map(tag=><OrderTag text={tag} key={nanoid()}/>)}
            </div>
        </div>
    )
}
