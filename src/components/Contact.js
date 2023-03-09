import phone from "../assets/phone.png"
import git from "../assets/git.png"
import mail from "../assets/mail.png"
import fb from "../assets/fb.png"

const Contact = () => {
    return <div className="grid grid-2-2 width-80 margin-bottom-30">
        <div className="contact_items bckgr_items_color">
            <div>
                <img src={phone} alt="phone" className="icon" />
            </div>
            <p>0942 681 628</p>
        </div>
        <div className="contact_items bckgr_items_color">
            <div>
                <img src={git} alt="git" className="icon" />
            </div>
            <p>https://github.com/thuy-do-203</p>
        </div>
        <div className="contact_items bckgr_items_color">
            <div>
                <img src={mail} alt="mail" className="icon" />
            </div>
            <p>dothuy20397@gmail.com</p>
        </div>
        <div className="contact_items bckgr_items_color">
            <div>
                <img src={fb} alt="fb" className="icon" />
            </div>
            <p>facebook.com/thuydo.do.18</p>
        </div>
    </div>
};

export default Contact;