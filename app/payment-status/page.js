import { Title } from '@comps' ;

const getMessage = (status) => {
    const s = String(status || '').toLowerCase() ;
    if (s === 'success') return { head: 'Payment Successful', desc: 'Your payment was completed successfully.' } ;
    if (s === 'failure') return { head: 'Payment Failed', desc: 'Your payment could not be completed. Please try again.' } ;
    if (s === 'aborted') return { head: 'Payment Cancelled', desc: 'You cancelled the payment flow.' } ;
    return { head: 'Payment Status', desc: 'Payment status is being processed.' } ;
} ;

export default function PaymentStatusPage({ searchParams }) {
    const orderId = searchParams?.order_id || '' ;
    const orderStatus = searchParams?.order_status || '' ;

    const msg = getMessage(orderStatus) ;

    return (
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <Title heading={msg.head} desc={msg.desc} />

            <div style={{ padding: '1.5rem 1rem' }}>
                {orderId ? <p><strong>Order ID:</strong> {orderId}</p> : null}
                {orderStatus ? <p><strong>Status:</strong> {orderStatus}</p> : null}
            </div>
        </div>
    ) ;
}
