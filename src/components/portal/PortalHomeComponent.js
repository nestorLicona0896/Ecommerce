
// styles
import PortalCSS from "./PortalComponent.module.css";
import HomeCSS from "./PortalHome.module.css";
// images
import userImg from "../../assets/user.png";
import facebookLogo from "../../assets/facebook.png";
import gitLogo from "../../assets/github.png";
import twitterLogo from "../../assets/twitter.png";
import googleLogo from "../../assets/google.png";


export const PortalHomeComponent = () => {
    return (
        // portal home
        <form className={PortalCSS.activeForm} action="" method="get" id="home-form">

            <img className={HomeCSS.userIcon} src={userImg} alt="home-img" id="user-icon"/>

            <button className={PortalCSS.button} type="button" id="signup-button" onclick="displayRegisterSection()">Registrarse</button>
            <button className={PortalCSS.button} type="button" id="login-button" onclick="displayLoginSection()">Iniciar sesion</button>

            <label className={PortalCSS.label}>o ingresa usando</label>

            <div className={HomeCSS.loginMediaSection} id="loginMediaSection">
                <a className={HomeCSS.socialMediaLink} href="#.." id="google-link" onclick="">
                    <img className={HomeCSS.socialMediaImg} src={googleLogo} alt="Google-logo" id="google-icon"/></a>

                <a className={HomeCSS.socialMediaLink} href="#.." id="facebook-link" onclick="">
                    <img className={HomeCSS.socialMediaImg} src={facebookLogo} alt="Facebook-logo" id="facebook-icon"/>
                </a>
                <a className={HomeCSS.socialMediaLink} href="#.." id="twitter-link" onclick="">
                    <img className={HomeCSS.socialMediaImg} src={twitterLogo} alt="Twitter-logo" id="twitter-icon"/>
                </a>
                <a className={HomeCSS.socialMediaLink} href="#.." id="github-link" onclick="">
                    <img className={HomeCSS.socialMediaImg} src={gitLogo} alt="Github-logo" id="github-icon" />
                </a>
            </div>
        </form>
    )
};

export default PortalHomeComponent;