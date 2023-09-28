
import emailjs from "@emailjs/browser";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

function useSendEmail() {
  
  const [loading, setLoading] = useState(false);

  const notiSuccess = useMemo(() => {
    return () => toast.success('i get back to you as fast as i can', {
      position: 'top-center',
      duration: 5000,
      style: {
        backgroundColor: '#fff',
        fontWeight: 'bold'
      }
    });
  }, []);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);
  }, []);

  async function handSendEmail({
    sender='guest',
    senderEmail='',
    to='morteza9rostami@gmail.com',
    message='',
  }) {
    
    const service_id = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
    
    try {
      // send email
      setLoading(true);

      /* await emailjs.send(
        service_id, 
        template_id,
        {
          from_name: sender,
          sender_email: senderEmail,
          message: message,
        }); */
        
      await new Promise((resolve) => {
        setTimeout(resolve, 4000); // Wait for 2000 milliseconds (2 seconds)
      });

      // success
      notiSuccess();

    } catch(error) {  
      console.log(error);
    } finally {
      // this runs after try: success or catch error!
      console.log('finally');
      setLoading(false);
    }
  }
  
  return [
    handSendEmail,
    loading,
  ]
}

export default useSendEmail