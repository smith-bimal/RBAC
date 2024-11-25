const Signin = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6 p-6 h-screen font-semibold ">
            <div className="p-12 bg-indigo-600 rounded-2xl h-full text-white md:block hidden relative overflow-hidden">
                <div className="absolute z-10 h-full w-full top-0 left-0">
                    <img src="https://img.freepik.com/free-photo/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_1258-103027.jpg?t=st=1732535496~exp=1732539096~hmac=d357981a10d2606730f9d29d5c9e4774dd41d4185100270fa8d9e545dad945e6&w=1800" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="relative h-full z-10 flex flex-col justify-center">
                    <h1 className="text-4xl mb-6">The simplest way to manage<br />your workforce.</h1>
                    <p>Enter your credentials to access your account.</p>
                </div>
            </div>

            <div className="flex items-center justify-center relative">
                <form action="#" className="sm:w-96 w-full">
                    <div className="font-medium mb-8 text-center">
                        <h1 className="text-indigo-500 font-bold text-2xl"><i className="ri-eye-2-fill mr-2"></i>RBAC</h1>
                        <h1 className="text-2xl">Get Started Now</h1>
                        <p className="text-sm">Enter your credentials to access your account.</p>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm mb-2">Email Address</label>
                        <input type="email" id="email" className="w-full border bg-slate-50 rounded-xl px-4 py-2 outline-indigo-200" />
                    </div>
                    <div className="mb-6">
                        <div className="w-full flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm mb-2">Password</label>
                            <p className="text-indigo-500 hover:text-indigo-600 transition text-sm cursor-pointer">Forgot Password?</p>
                        </div>
                        <input type="password" id="password" className="w-full border bg-slate-50 rounded-xl px-4 py-2 outline-indigo-200" />
                    </div>
                    <div className="mb-6 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label htmlFor="tnc" className="block text-sm">I agree to the <span className="underline cursor-pointer">Terms & Privacy</span></label>
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 cursor-pointer transition py-2 text-white rounded-xl mt-4">Login</button>
                </form>

                <p className="absolute bottom-0 text-sm font-normal text-slate-500">2024 &copy; Smith Bimal. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Signin