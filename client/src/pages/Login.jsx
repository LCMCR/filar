import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut, 
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/filarSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();

    const auth =getAuth();

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            toast.success("Sign in successful");
            console.log(user);
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
            }));
            setTimeout(() => {
                navigate("/");
            }
            , 1500);

        }).catch((error) => {
            toast.error(error+"Sign in failed");
        });
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
            toast.success("Sign out successful");
            dispatch(removeUser());
        }).catch((error) => {
        // An error happened.
            toast.error(error+"Sign out failed");
        });
    };

    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
            
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
                <div onClick={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-stone-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                    <FcGoogle className="text-2xl" />
                    <span className="text-sm text-stone-600">Sign in with Google</span>
                </div>
                <div onClick={handleSignOut} className="bg-stone-600 text-white text-base py-3 px-8 tracking-wide rounded-md cursor-pointer hover:bg-stone-500 duration-300">Sign Out</div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
                <div className="text-base w-60 h-12 tracking-wide border-[1px] border-stone-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                    <FaGithub className="text-2xl" />
                    <span className="text-sm text-stone-600">Sign in with Github</span>
                </div>
                <div className="bg-stone-600 text-white text-base py-3 px-8 tracking-wide rounded-md cursor-pointer hover:bg-stone-500 duration-300">Sign Out</div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;