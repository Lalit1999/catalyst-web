"use client" 

import { useContext } from 'react' ;
// import { usePathname } from 'next/navigation' ;

import { AppContext, AppContextProvider } from '@ac' ;
import { Header, Downbar/*, Popup, SignIn, SignUp, ContactForm, ReportJob, CoinsPop*/ } from '@comps' ;

// const Pop = () => {
//     const { popOpen, setPopOpen, popContent } = useContext(AppContext) ;

//     const isReportJob = popContent.startsWith('reportJob') ;

//     const returnContent = {
//         'signIn-user'   : <SignIn init="user"/>,
//         'signIn-org'    : <SignIn init="org"/>,
//         'signUp-user'   : <SignUp init="user"/>,
//         'signUp-org'    : <SignUp init="org"/>,
//         contact         : <ContactForm />,
//         coinsPop        : <CoinsPop />,
//     }

//     return (
//         <Popup open={popOpen} onCloseClick={()=>setPopOpen(false)}>
//             { isReportJob ? <ReportJob jobId={popContent.split('-')[1]} /> : returnContent[popContent] }
//         </Popup>
//     ) ;
// }

const AppBody = ({isSpecial, children}) => {
    const { conRef } = useContext(AppContext);

    if(isSpecial)
        return <main className='body-no-scroll'>{children}</main>
    else
        return (
            <main className='body-main' ref={conRef}>
                {children}
                {/* <Downbar />  */}
            </main>
        ) ;
}

const ContextWrapper = ({ children }) => {
	// const pathname = usePathname() ;
    // const isSpecial = pathname.startsWith('/dashboard') || pathname.startsWith('/org-dashboard'); 

    return (
        <>
            <AppContextProvider>
                <Header />
                <AppBody >{children}</AppBody>
                {/* <Pop /> */}
            </AppContextProvider>
        </>
    );
};

export default ContextWrapper ;