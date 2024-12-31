import './LoginPage.css';
import sha256 from 'crypto-js/sha256';
import cryptoRandomString from "crypto-random-string";
import {useState} from "react";
import Store from "../../redux/Store";
import {getSalt, checkLoginDetails, addUser} from "../../redux/Thunks";
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { Icon } from 'react-icons-kit';
import { useNavigate } from "react-router-dom"


function hashPassword(password, salt) {
    return sha256(password + salt)
}
export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [error, setError] = useState("");
    const [isSlideOut, setIsSlideOut] = useState(false);
    const [isSlideIn, setIsSlideIn] = useState(false);
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const [type1, setType1] = useState("password");
    const [icon1, setIcon1] = useState(eyeOff);
    const [icon2, setIcon2] = useState(eyeOff);
    const [type2, setType2] = useState("password");
    const [classNameSignup, setClassNameSignup] = useState("");
    const [classNameLogin, setClassNameLogin] = useState("");
    const [emailSignup, setEmailSignup] = useState("");
    const [passwordSignup, setPasswordSignup] = useState("");
    const [usernameSignup, setUsernameSignup] = useState("");
    const [emailMessageSignup, setEmailMessageSignup] = useState("");
    const [passwordMessageSignup, setPasswordMessageSignup] = useState("");
    const [usernameMessageSignup, setUsernameMessageSignup] = useState("");
    const [errorSignup, setErrorSignup] = useState("");
    const [passwordMessage2 , setPasswordMessage2] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate()
    const handleChangePassword = (e) => {
        setPasswordMessage(e.target.value)
        console.log(passwordMessage)
    }
    const handleToggle3 = () => {
        if (type2 === "password") {
            setType2("text")
            setIcon2(eye)
        } if (type2 === "text") {
            setType2("password")
            setIcon2(eyeOff)
        }
    }

    const handleChangeEmail = (e) => {
        setEmailMessage(e.target.value.toString())
    }



    const handleToggle2 = () => {
        if (type1 === "password") {
            setType1("text")
            setIcon1(eye)
        } if (type1 === "text") {
            setType1("password")
            setIcon1(eyeOff)
        }
    }

    const handleClick = () => {
        setEmail(emailMessage)
        setPassword(passwordMessage)
        Store.dispatch(getSalt({email: email}))
        console.log('Salt: ' + Store.getState().salting)
        console.log(passwordMessage)
        const hash = hashPassword(passwordMessage, Store.getState().salting)
        console.log('Hash: ' + hash)
        Store.dispatch(checkLoginDetails({email: email, password: hash}))
        setEmailSignup("")
        setPasswordSignup("")
        setUsernameSignup("")
        setPasswordMessageSignup("")
        setEmailMessageSignup("")
        setUsernameMessageSignup("")
        setPasswordMessage2("")
        setPassword2("")
        if (Store.getState().loggedIn) {
            navigate("/")
        } else {
            switch (Store.getState().loggedInError) {
                case "Incorrect email or password":
                    setError("Incorrect email or password")
                    return
                default:
                    console.log(Store.getState().loggedInError)
                    setError("Oops, something went wrong. Please try again")
            }
        }
    }

    function handleClickSignIn() {
        if (classNameSignup.includes("slide_out__signup")) {
            setClassNameSignup(classNameSignup.replace("slide_out__signup", " slide_in"))
        } else {
            setClassNameSignup(classNameSignup.concat(" slide_in"))
        }
        if (classNameLogin.includes("slide_in")) {
            setClassNameLogin(classNameLogin.replace("slide_in", " slide_out"))
        } else {
            setClassNameLogin(classNameLogin.concat(" slide_out"))
        }
    }

    const handleChangeEmailSignUp = (e) => {
        setEmailMessageSignup(e.target.value)
    }
    const handleChangePasswordSignUp = (e) => {
        setPasswordMessageSignup(e.target.value)
    }

    const handleChangePassword2 = (e) => {
        console.log(e)
        setPasswordMessage2(e.target.value)
    }

    const handleChangeUsernameSignUp = (e) => {
        setUsernameMessageSignup(e.target.value)
    }

    function handleClickSignUp() {
        setEmailSignup(emailMessageSignup)
        setPasswordSignup(passwordMessageSignup)
        setUsernameSignup(usernameMessageSignup)
        setPassword2(passwordMessage2)
        console.log(passwordSignup)
        console.log(passwordMessage2)
        if (passwordSignup !== password2) {
            setErrorSignup("Passwords do not match")
            return
        }
        setErrorSignup("Logged in")
        const salt = cryptoRandomString({length: 20, type: 'base64'})
        const passwordHash = hashPassword(passwordSignup, salt)
        Store.dispatch(addUser({email: emailSignup, password: passwordHash, username: usernameSignup, salting: salt}))
    }

    const handleToggle = () => {
        if (type === "password") {
            setType("text")
            setIcon(eye)
        } if (type === "text")  {
            setType("password")
            setIcon(eyeOff)
        }
    }

    function handleClickLogIn() {
        setClassNameSignup(classNameSignup.replace("slide_in", "slide_out__signup"))
        setClassNameLogin(classNameLogin.replace("slide_out", " slide_in"))
    }

  return (
    <div className="content">
        <div className="container">
            <div className="left"></div>
            <div className="divider">

            </div>
            <div className="right"></div>

        <div className={"login".concat(classNameLogin)}>
                     <div className={"box"}>
                         <h1>Login</h1>

                             <p className="error">{error}</p>
                             <form>
                                 <input type="text" placeholder="Username" />
                                 <input type="text" placeholder="Email" onChange={handleChangeEmail}/>
                                 <div className="password">
                                     <input type={type2} placeholder="Password" style={{margin: "0", padding: 0}} onChange={handleChangePassword}/>
                                     <span className="eye" onClick={handleToggle3}>
                            <Icon icon={icon2} size={"2.5vh"} className="eye"/>
                        </span>
                                 </div>
                             </form>
                         <button className="login__button" onClick={handleClick}>LOGIN</button>
                     </div>
            <p className="signup">Don't have an account?</p>
            <button className="signup__text" onClick={handleClickSignIn}>Sign up here...</button>
                 </div>
        <div className={"signup__div".concat(classNameSignup)}>
            <div className="box">
                <h1>Sign Up</h1>
                <p className="error">{errorSignup}</p>
                <form>
                    <input type="text" placeholder="Username" onChange={handleChangeUsernameSignUp}/>
                    <input type="text" placeholder="Email" onChange={handleChangeEmailSignUp}/>
                    <div className="password">
                        <input type={type} placeholder="Password" style={{margin: "0", padding: 0}} onChange={handleChangePasswordSignUp}/>
                        <span className="eye" onClick={handleToggle}>
                            <Icon icon={icon} size={"2.5vh"} className="eye"/>
                        </span>
                    </div>
                    <div className="password">
                        <input type={type1} placeholder="Password" style={{margin: "0", padding: 0}} onChange={handleChangePassword2}/>
                        <span className="eye" onClick={handleToggle2}>
                            <Icon icon={icon1} size={"2.5vh"} className="eye"/>
                        </span>
                    </div>
                </form>
                <button className="signup__button" onClick={handleClickSignUp}>SIGN UP</button>
            </div>
            <p className="signup">Already have an account?</p>
            <button className="signup__text" onClick={handleClickLogIn}>Log in here...</button>
        </div>
        </div>
    </div>
  )
}