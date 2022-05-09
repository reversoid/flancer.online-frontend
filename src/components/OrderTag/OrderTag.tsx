import 'components/OrderTag/styles.scss'

export default function OrderTag({text}:{text:string}) {
  return (
    <div className='order__tag'>{text}</div>
  )
}
