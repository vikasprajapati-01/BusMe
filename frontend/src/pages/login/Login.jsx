// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
//       <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-sm w-full">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
//           Login to Your Account
//         </h2>
//         <form>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-secondary transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600 text-sm sm:text-base">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-primary font-semibold hover:text-secondary transition duration-300"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaBus } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-3 sm:p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 sm:-bottom-40 sm:-left-40 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-cyan-400/15 to-blue-600/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Smaller decorative elements */}
        <div className="absolute top-16 right-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-16 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400/20 rounded-full blur-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        
        {/* Subtle animated lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md z-10">
        {/* Main Card with enhanced glassmorphism */}
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 border border-white/30 relative overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
          {/* Card background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/10 rounded-2xl sm:rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-5 sm:mb-7">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full mb-3 sm:mb-4 shadow-xl ring-4 ring-primary/20 transform transition-all duration-300 hover:scale-110 hover:ring-8 hover:ring-primary/30">
                <FaBus className="text-white text-base sm:text-xl" />
              </div>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 transition-colors duration-300">
                Welcome Back
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base transition-colors duration-300">
                Sign in to your BusMe account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Email Field */}
              <div className="space-y-1.5 sm:space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 transition-colors duration-300"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none z-10">
                    <FaEnvelope className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 group-focus-within:text-primary group-hover:text-primary/70 transition-all duration-300" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-xs sm:text-sm text-gray-800 placeholder-gray-400 hover:border-primary/50 hover:bg-gray-100/50 hover:shadow-md"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5 sm:space-y-2">
                <label
                  htmlFor="password"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 transition-colors duration-300"
                >
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none z-10">
                    <FaLock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 group-focus-within:text-primary group-hover:text-primary/70 transition-all duration-300" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full pl-9 sm:pl-11 pr-10 sm:pr-12 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-xs sm:text-sm text-gray-800 placeholder-gray-400 hover:border-primary/50 hover:bg-gray-100/50 hover:shadow-md"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-2.5 sm:pr-3 flex items-center z-10 rounded-r-xl transition-all duration-300 hover:bg-primary/5 focus:outline-none focus:bg-primary/10 active:scale-95 group"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <div className="p-1 rounded-md transition-all duration-300 group-hover:bg-primary/10 group-active:bg-primary/20">
                      {showPassword ? (
                        <FaEyeSlash className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-500 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                      ) : (
                        <FaEye className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-500 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-1 text-xs sm:text-sm pt-1">
                <div className="flex items-center group">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary focus:ring-primary focus:ring-3 border-gray-300 rounded-md bg-gray-50 transition-all duration-300 hover:border-primary/50 cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-gray-600 font-medium cursor-pointer transition-colors duration-300 group-hover:text-gray-800">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-primary font-semibold transition-all duration-200 hover:text-primary/80 focus:outline-none relative inline-block"
                >
                  <span className="relative">
                    Forgot password?
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 hover:w-full"></span>
                  </span>
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl hover:shadow-2xl text-sm sm:text-base relative overflow-hidden group"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 sm:my-5 flex items-center">
              <div className="flex-1 border-t border-gray-300 transition-colors duration-300"></div>
              <span className="px-3 sm:px-4 text-xs sm:text-sm text-gray-500 bg-white font-medium transition-colors duration-300">
                or continue with
              </span>
              <div className="flex-1 border-t border-gray-300 transition-colors duration-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-700 hover:bg-gray-100 hover:border-primary/30 focus:outline-none focus:ring-3 focus:ring-primary/20 transition-all duration-300 text-xs sm:text-sm font-medium transform hover:scale-[1.01] active:scale-[0.99] hover:shadow-lg group">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-gray-900">Continue with Google</span>
              </button>
            </div>

            {/* Register Link */}
            <div className="mt-5 sm:mt-6 text-center">
              <p className="text-gray-600 text-xs sm:text-sm transition-colors duration-300">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary font-bold transition-all duration-200 hover:text-primary/80 focus:outline-none relative inline-block"
                >
                  <span className="relative">
                    Create Account
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 hover:w-full"></span>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-5 px-2">
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed transition-colors duration-300 hover:text-white/90">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="underline hover:text-white transition-all duration-300 font-medium hover:no-underline focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-1">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline hover:text-white transition-all duration-300 font-medium hover:no-underline focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;