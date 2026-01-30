import { toast } from 'react-toastify';

const addNotif = (message, type='info', position='bottom-center', autoClose=4) => {
  const notifOption = { position, autoClose: autoClose*1000, hideProgressBar: true, theme: 'colored' } ;

  return toast[type]?toast[type](message, notifOption):toast.info(message, notifOption) ;
}

const remNotif = () => toast.dismiss() ;

export {addNotif, remNotif} ;