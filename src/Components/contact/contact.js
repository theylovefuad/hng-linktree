import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiTwitter} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_u1vy8eb', 'template_zq5y8zd', form.current, 'pSPsDlIjil4Ci5tu_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      const [sent, changeSent] = React.useState(false)
      function send (){
        changeSent(true)
      }

    return(
        <section id="contact">
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>leyefuad@gmail.com</h5>
                        <a href='mailto:leyefuad@gmail.com' target='__blank'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <FiTwitter className='contact__option-icon'/>
                        <h4>Twitter</h4>
                        <h5>theylovefuad</h5>
                        <a href='https://twitter.com/theylovefuad' target='__blank'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+234 704 7293 841</h5>
                        <a href='https://api.whatsapp.com/send?phone+2347047293841' target='__blank' onClick={send}>{
                        sent ? `Sent!` : `Send a Message`}</a>
                    </article>


                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='text' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>

                </form>
            </div>
        </section>
    )
}