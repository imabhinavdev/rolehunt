import Link from "next/link";

const Login = () => {
  return (
    <main className="w-full  flex flex-col items-center md:shadow-lg md:p-10 px-4">
      <div className="max-w-sm w-full shadow-lg p-10 text-gray-600">
        <div className="text-center ">
          <h1 className="text-4xl  font-bold text-yellow hover:text-green">
            RoleHunt
          </h1>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <form className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-yellow hover:bg-green active:bg-yellow rounded-lg duration-150">
            Log in
          </button>
          <div className="text-center">
            <Link href="#" className="hover:text-indigo-600">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
