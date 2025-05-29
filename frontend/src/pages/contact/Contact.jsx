import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBus, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeadset } from "react-icons/fa";

function Contact() {
  // State for our form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // To show loading state on submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  // For showing success/error messages after submit
  const [submitMessage, setSubmitMessage] = useState('');

  // Basic input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Fake a delay, like an API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Let's pretend this is our API response
    const success = Math.random() > 0.2; // 80% chance of success

    if (success) {
      setSubmitMessage('Your message has been sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } else {
      setSubmitMessage('Failed to send message. Please try again later or use one of the alternative contact methods.');
    }
    setIsSubmitting(false);
  };

  // Our contact details - makes it easy to loop through
  const contactDetails = [
    { icon: FaMapMarkerAlt, title: "Our Office", lines: ["123 BusMe Avenue,", "Tech Park, Bangalore,", "Karnataka 560001, India"], color: "text-blue-500" },
    { icon: FaPhoneAlt, title: "Call Us", lines: ["Customer Support: +91 98765 43210", "Booking Enquiries: +91 91234 56789"], color: "text-green-500" },
    { icon: FaEnvelope, title: "Email Us", lines: ["Support: support@busme.com", "Partnerships: partners@busme.com"], color: "text-purple-500" },
    { icon: FaClock, title: "Working Hours", lines: ["Mon - Fri: 9 AM - 8 PM", "Sat - Sun: 10 AM - 6 PM"], color: "text-orange-500" }
  ];

  // Social media links - using 'to' for React Router Link.
  const socialLinks = [
    { icon: FaFacebookF, to: "#", label: "Facebook" },
    { icon: FaTwitter, to: "#", label: "Twitter" },
    { icon: FaInstagram, to: "#", label: "Instagram" },
    { icon: FaLinkedinIn, to: "#", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* The usual fancy background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 lg:-top-40 lg:-right-40 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 lg:-bottom-40 lg:-left-40 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
        {/* Page Header */}
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-primary to-primary/80 rounded-full mb-3 sm:mb-4 lg:mb-6 shadow-xl ring-2 sm:ring-4 ring-primary/20 transform transition-all duration-300 hover:scale-110 hover:ring-6 sm:hover:ring-8 hover:ring-primary/30">
            <FaHeadset className="text-white text-lg sm:text-2xl lg:text-3xl" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
            We're here to help! Reach out to us for any queries, feedback, or support regarding your BusMe experience.
          </p>
        </header>

        {/* Main content: Form on one side, details on the other for larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Form */}
          <section className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/30 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="e.g., Vikas Prajapati" required 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 hover:border-primary/50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 hover:border-primary/50" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} placeholder="Booking Inquiry" required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 hover:border-primary/50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Your Message</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="How can we help you today?" required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 hover:border-primary/50 min-h-[100px] sm:min-h-[120px]"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:from-primary/90 hover:to-primary/70 focus:outline-none focus:ring-4 focus:ring-primary/30 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    {/* Spinner for loading state */}
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
              {/* Feedback message after trying to send */}
              {submitMessage && (
                <p className={`text-sm mt-4 p-3 rounded-md ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </section> {/* End of Column 1 (Form) */}
          

          {/* Column 2: Contact Details (including Social Links) */}
          <section className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/30 order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Contact Information</h2>
            <div className="space-y-4 sm:space-y-6">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-primary/10 ${item.color}`}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">{item.title}</h3>
                      {item.lines.map((line, lineIdx) => (
                        <p key={lineIdx} className="text-xs sm:text-sm text-gray-600">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media Links - Integrated here */}
            <hr className="my-4 sm:my-6 border-gray-200" /> {/* Divider */}
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Connect With Us</h3>
            <div className="flex flex-wrap justify-start gap-2 sm:gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={index} to={link.to} aria-label={link.label}
                     className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 transform hover:scale-110 hover:bg-primary hover:text-white hover:shadow-md`}>
                    <Icon className="h-4 w-4 sm:h-5 sm:h-5" />
                  </Link>
                );
              })}
            </div>
          </section> 
          {/* End of Column 2 (Details & Socials) */}

        </div>
      </div>
    </div>
  );
}

export default Contact;