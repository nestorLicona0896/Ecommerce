import { useClassContext } from './FormClassContext';
// styles

// images
import userImg from "../../assets/user.png";
import facebookLogo from "../../assets/facebook.png";
import gitLogo from "../../assets/github.png";
import twitterLogo from "../../assets/twitter.png";
import googleLogo from "../../assets/google.png";
// portal functions
import { rotatePortal } from "./PortalComponent";

// Home form render function:
export const PortalHomeComponent = () => {

    const styles = {
        homeForm: {
            alignItems: "center"
        }
    }

    //const [activeForm, setActiveForm] = useState(true);
    const { HomeFormClass, setHomeFormClass, setRegisterFormClass, setLoginFormClass } = useClassContext();
    
    // Toggle the register form component's className:
    const displayRegister = () => {
        const selectedIndex = 1;
        setHomeFormClass('InactiveForm');
        setRegisterFormClass('ActiveForm');
        rotatePortal(selectedIndex);
    };

    // Toggle the login form component's className:
    const displayLogin = () => {
        const selectedIndex = 2;
        setHomeFormClass('InactiveForm');
        setLoginFormClass('ActiveForm');
        rotatePortal(selectedIndex);
    };

    
    return (
        // Home section
        <form className={HomeFormClass} style={styles.homeForm} id="home-form">

            <img className={"UserIcon"} src={userImg} alt="home-img" id="user-icon"/>
            {/* 👇️ button for display register/create account form*/}
            <button className={"FormButton"} type="button" id="signup-button" onClick={displayRegister}>Registrarse</button>
            {/* 👇️ button for display login/enter account form*/}
            <button className={"FormButton"} type="button" id="login-button" onClick={displayLogin}>Iniciar sesion</button>
            
            <label className={"FormLabel"}>o ingresa usando</label>
            {/* 👇️ other login-register methods*/}
            <div className={"LoginMediaSection"} id="login-media-section">
                <a className={"SocialMediaLink"} href="#.." id="google-link" onClick={displayLogin}>
                    <img className={"SocialMediaImg"} src={googleLogo} alt="Google-logo" id="google-icon"/></a>

                <a className={"SocialMediaLink"} href="#.." id="facebook-link" onClick={displayLogin}>
                    <img className={"SocialMediaImg"} src={facebookLogo} alt="Facebook-logo" id="facebook-icon"/>
                </a>
                <a className={"SocialMediaLink"} href="#.." id="twitter-link" onClick={displayLogin}>
                    <img className={"SocialMediaImg"} src={twitterLogo} alt="Twitter-logo" id="twitter-icon"/>
                </a>
                <a className={"SocialMediaLink"} href="#.." id="github-link" onClick={displayLogin}>
                    <img className={"SocialMediaImg"} src={gitLogo} alt="Github-logo" id="github-icon" />
                </a>
            </div>
        </form>
    )
};

export default PortalHomeComponent;