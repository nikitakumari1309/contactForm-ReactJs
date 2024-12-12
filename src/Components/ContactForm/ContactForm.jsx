import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

  const [name,setName]=useState("system");
  const [email,setEmail]=useState("default@system.com");
  const [text,setText]=useState("default");

  const onSubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    // email=event.target[1].value;
    // text=event.target[2].value;
  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
             <div className={styles.top_btn}>
             <Button 
               msg={<i>VIA CHAT SUPPORT</i>} 
               icon={<MdMessage fontSize="24px"/>} 
               style={{backgroundColor:'black'}}/>
             <Button 
              //  onClick={onViaCallSubmit}
               msg="VIA CALL" 
               icon={<FaPhoneAlt style={{fontSize:'24px'}}/>}/>
             </div>
             <Button
                isOutline={true} 
                msg="VIA EMAIL FORM" 
                icon={<HiMail fontSize="24px"/>}/>

              <form onSubmit={onSubmit}>
                <div className={styles.form_controller}>
                   <label htmlFor="name">Name</label>
                   <input type="text" name="name"/>
                </div> 

                <div className={styles.form_controller}>
                   <label htmlFor="email">Email</label>
                   <input type="text" name="email"/>
                </div> 

                <div className={styles.form_controller}>
                   <label htmlFor="text">Text</label>
                   <textarea  name="text" rows="4"/>
                </div> 
                <div className={styles.submit_btn}>
                   <Button
                   msg="Submit" 
                   />
                </div>
                <div>
                  {name + " having email : "+email+ " has written text "+text}
                </div>
              </form>  
        </div>
        <div className={styles.contact_image}>
          <img src="/images/contact.svg"></img>
        </div>
        
    </section>
  )
}

export default ContactForm