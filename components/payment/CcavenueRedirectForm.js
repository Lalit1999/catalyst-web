'use client' ;

import { useEffect, useRef } from 'react' ;

const CcavenueRedirectForm = ({ paymentUrl, encRequest, accessCode, title = 'Redirecting to payment...' }) => {
    const formRef = useRef(null) ;

    useEffect(() => {
        if (!paymentUrl || !encRequest || !accessCode) return ;
        if (!formRef.current) return ;

        const t = setTimeout(() => {
            try {
                formRef.current.submit() ;
            } catch (err) {
                console.error(err) ;
            }
        }, 50) ;

        return () => clearTimeout(t) ;
    }, [paymentUrl, encRequest, accessCode]) ;

    return (
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '2rem 1rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>{title}</h2>
            <p style={{ marginBottom: '1.5rem' }}>If you are not redirected automatically, use the button below.</p>

            <form ref={formRef} method="post" action={paymentUrl}>
                <input type="hidden" name="encRequest" value={encRequest} />
                <input type="hidden" name="access_code" value={accessCode} />

                <button type="submit">Continue to Payment</button>
            </form>
        </div>
    ) ;
} ;

export default CcavenueRedirectForm ;
