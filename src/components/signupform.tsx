

export default function SignupForm() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src="/signupimage.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />

        <div className="w-full max-w-md">
          <div className="text-center lg:text-left mb-6">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-4 text-gray-500">
              And discover a smarter way to manage your healthcare services.
            </p>
          </div>

          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="Password"
                />


                <button className="btn btn-primary mt-4">Sign Up</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
