import LoginForm from "../components/loginform";
import Navbar from "../components/navbar";


export default function LoginPage() {
   return (
    <>
    <Navbar isLogged={false} />
   <LoginForm/>
   </>
  )
}