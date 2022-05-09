import Order, { IOrder } from 'components/Order/Order'
import { nanoid } from 'nanoid'

import 'pages/OrdersPage/styles.scss'

const orders: Array<IOrder> = [
    {
        title: 'Веб-разработка',
        description: 'Нужен блин сайт))) срочно!!!!!!!!!!!!!!! а то тототото ыффф',
        price: '1000EUR',
        createdAt: 'just now',
        date: 'tommorow',
        tags:['math', 'physics']
    },
    {
        title: 'Веб-разработка',
        description: 'Нужен блин сайт))) срочно!!!!!!!!!!!!!!! а то тототото ыффф',
        price: '1000EUR',
        createdAt: 'just now',
        date: 'tommorow',
        tags:['math', 'physics']
    },
    {
        title: 'Веб-разработка',
        description: 'Нужен блин сайт))) срочно!!!!!!!!!!!!!!! а то тототото ыффф',
        price: '1000EUR',
        createdAt: 'just now',
        date: 'tommorow',
        tags:['math', 'physics']
    },
    {
        title: 'Веб-разработка',
        description: 'Нужен блин сайт))) срочно!!!!!!!!!!!!!!! а то тототото ыффф',
        price: '1000EUR',
        createdAt: 'just now',
        date: 'tommorow',
        tags:['math', 'physics']
    },
    {
        title: 'Веб-разработка',
        description: 'Нужен блин сайт))) срочно!!!!!!!!!!!!!!! а то тототото ыффф',
        price: '1000EUR',
        createdAt: 'just now',
        date: 'tommorow',
        tags:['math', 'physics']
    },
]

export default function OrdersPage() {
    return (
        <div className="orders container color-light">
            {orders.map(order=><Order {...order} key={nanoid()}/>)}
        </div>
    )
}
