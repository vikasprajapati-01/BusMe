import React, { useState } from "react";
import { FaBus, FaUsers, FaRoute, FaClock, FaShieldAlt, FaMobile, FaStar, FaHeart, FaGlobe, FaAward, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { icon: FaBus, label: "Buses", value: "2,500+", color: "from-blue-500 to-blue-600" },
    { icon: FaUsers, label: "Happy Customers", value: "1M+", color: "from-green-500 to-green-600" },
    { icon: FaRoute, label: "Routes", value: "500+", color: "from-purple-500 to-purple-600" },
    { icon: FaClock, label: "Years of Service", value: "8+", color: "from-orange-500 to-orange-600" },
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: "Secure Booking",
      description: "Your data and payments are protected with bank-grade security and SSL encryption.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaMobile,
      title: "Mobile First",
      description: "Book tickets anytime, anywhere with our user-friendly mobile app and website.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: FaClock,
      title: "24/7 Support",
      description: "Our customer support team is always ready to assist you with any queries or concerns.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaRoute,
      title: "Extensive Network",
      description: "Travel across the country with our vast network of routes and trusted bus operators.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: FaStar,
      title: "Quality Assurance",
      description: "We partner with verified operators to ensure comfortable and safe journeys for all passengers.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: FaGlobe,
      title: "Real-time Tracking",
      description: "Track your bus location in real-time and get updates about delays or schedule changes.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Frequent Traveler",
      content: "BusMe has made my weekly trips so much easier! The booking process is smooth, and I love the real-time tracking feature.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Business Executive",
      content: "Reliable service and great customer support. I've been using BusMe for 2 years and never had any issues.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Anita Patel",
      role: "Student",
      content: "Affordable prices and clean buses. Perfect for students like me who travel home frequently.",
      rating: 5,
      avatar: "AP"
    },
    {
      name: "Mohammed Ali",
      role: "Tourist",
      content: "Discovered India with BusMe! Easy booking, comfortable seats, and punctual service made my trip memorable.",
      rating: 5,
      avatar: "MA"
    }
  ];

  const teamMembers = [
    {
      name: "Vikas Prajapati",
      role: "Founder & CEO",
      description: "Passionate about making bus travel accessible and comfortable for everyone.",
      avatar: "VP",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Leading our technology initiatives to provide seamless user experiences.",
      avatar: "SJ",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Amit Singh",
      role: "Head of Operations",
      description: "Ensuring smooth operations and maintaining our high service standards.",
      avatar: "AS",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Lisa Chen",
      role: "Head of Customer Success",
      description: "Dedicated to providing exceptional customer support and satisfaction.",
      avatar: "LC",
      color: "from-pink-500 to-purple-600"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 lg:-top-40 lg:-right-40 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 lg:-bottom-40 lg:-left-40 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-cyan-400/15 to-blue-600/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-16 right-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-16 left-1/3 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400/20 rounded-full blur-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-primary to-primary/80 rounded-full mb-6 sm:mb-8 shadow-xl ring-4 ring-primary/20 transform transition-all duration-300 hover:scale-110 hover:ring-8 hover:ring-primary/30">
              <FaBus className="text-white text-2xl sm:text-3xl lg:text-4xl" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">BusMe</span>
            </h1>
            
            <p className="text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-12 px-4">
              Making bus travel simple, comfortable, and accessible for millions of travelers across India since 2016.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <FaHeart className="text-red-400 h-5 w-5" />
                <span className="text-white font-semibold">Trusted by 1M+ customers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <FaAward className="text-yellow-400 h-5 w-5" />
                <span className="text-white font-semibold">Award-winning service</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-xl border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.color} rounded-full mb-3 sm:mb-4 lg:mb-6 shadow-lg`}>
                    <IconComponent className="text-white text-lg sm:text-xl lg:text-2xl" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/30">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Our Story
                </h2>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6 sm:space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Founded in 2016 by <strong>Vikas Prajapati</strong>, BusMe started with a simple vision: to revolutionize bus travel in India by making it more accessible, reliable, and comfortable for everyone.
                </p>
                
                <p>
                  What began as a small startup with just 10 bus partners has now grown into India's leading bus booking platform, connecting over 2,500 buses across 500+ routes. We've served more than 1 million happy customers and continue to expand our network every day.
                </p>
                
                <p>
                  Our mission goes beyond just booking tickets. We're building a comprehensive travel ecosystem that prioritizes customer satisfaction, safety, and convenience. From real-time tracking to 24/7 customer support, every feature is designed with our travelers in mind.
                </p>
                
                <p>
                  Today, BusMe stands as a testament to innovation in the Indian travel industry, continuously setting new standards for quality and service excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Why Choose BusMe?
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
              We're committed to providing the best bus booking experience with cutting-edge technology and customer-first approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6 ${feature.color}`}>
                    <IconComponent className="text-xl sm:text-2xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Meet Our Team
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
              The passionate people behind BusMe who work tirelessly to make your journey better every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-xl border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${member.color} rounded-full mb-4 sm:mb-6 shadow-lg text-white text-lg sm:text-xl font-bold`}>
                  {member.avatar}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              What Our Customers Say
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our happy customers have to say about their BusMe experience.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/30 relative">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary to-primary/80 rounded-full mb-6 sm:mb-8 shadow-lg text-white text-lg sm:text-xl font-bold`}>
                  {testimonials[currentTestimonial].avatar}
                </div>
                
                <div className="flex justify-center mb-4 sm:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 h-5 w-5 sm:h-6 sm:w-6" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-gray-800 text-lg sm:text-xl">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-primary font-semibold text-sm sm:text-base">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20"
              >
                <FaChevronLeft className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20"
              >
                <FaChevronRight className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Experience BusMe?
              </h2>
              <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto">
                Join millions of satisfied customers and discover why BusMe is India's preferred bus booking platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="bg-white text-primary font-bold py-4 px-8 sm:px-12 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/30 transform hover:scale-105 transition-all duration-300 shadow-xl text-sm sm:text-base lg:text-lg">
                  Book Your Journey
                </button>
                <button className="bg-white/20 text-white font-bold py-4 px-8 sm:px-12 rounded-xl hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-white/30 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/30 text-sm sm:text-base lg:text-lg">
                  Download App
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;