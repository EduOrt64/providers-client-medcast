import Navbar from "../components/navbar";
import SignupForm from "../components/signupform";

export default function SignupPage() {
  return (
    <div>
        <Navbar isLogged={false} />
      <SignupForm />
    </div>
  );
}
