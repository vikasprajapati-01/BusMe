import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBus, FaSearch, FaTicketAlt, FaCreditCard, FaMapMarkerAlt, FaClock, FaHeadset, FaMobile } from "react-icons/fa";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = [
    { id: "all", name: "All", icon: FaBus },
    { id: "booking", name: "Booking", icon: FaTicketAlt },
    { id: "payment", name: "Payment", icon: FaCreditCard },
    { id: "travel", name: "Travel", icon: FaMapMarkerAlt },
    { id: "support", name: "Support", icon: FaHeadset },
  ];

  const faqData = [
    {
      category: "booking",
      question: "How do I book a bus ticket?",
      answer: "To book a bus ticket, simply search for your route by selecting departure and destination cities, choose your travel date, select your preferred bus, pick your seats, and complete the payment. You'll receive an instant confirmation via email and SMS."
    },
    {
      category: "booking",
      question: "Can I modify or cancel my booking?",
      answer: "Yes, you can modify or cancel your booking up to 2 hours before departure. Cancellation charges may apply based on the timing. You can manage your bookings through the 'My Bookings' section or by contacting our customer support."
    },
    {
      category: "booking",
      question: "How early should I book my ticket?",
      answer: "We recommend booking at least 24 hours in advance for popular routes. However, you can book tickets up to 30 days in advance. Last-minute bookings are also available subject to seat availability."
    },
    {
      category: "booking",
      question: "What documents do I need for booking?",
      answer: "You need a valid government-issued ID (Aadhaar, PAN, Passport, Driving License, or Voter ID) for booking. The same ID must be carried during travel for verification purposes."
    },
    {
      category: "payment",
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including Credit/Debit cards, Net Banking, UPI, Mobile Wallets (Paytm, PhonePe, Google Pay), and EMI options. All transactions are secured with 256-bit SSL encryption."
    },
    {
      category: "payment",
      question: "Is my payment information secure?",
      answer: "Absolutely! We use industry-standard security measures including SSL encryption and comply with PCI DSS standards. Your payment information is never stored on our servers and is processed through secure payment gateways."
    },
    {
      category: "payment",
      question: "When will I be charged for my booking?",
      answer: "Your payment is processed immediately upon successful booking confirmation. For failed transactions, the amount is automatically refunded to your original payment method within 5-7 business days."
    },
    {
      category: "payment",
      question: "Can I get a refund if I cancel my ticket?",
      answer: "Yes, refunds are processed based on our cancellation policy. Cancellations made 24+ hours before departure get 90% refund, 2-24 hours get 75% refund. Refunds are processed within 5-7 business days."
    },
    {
      category: "travel",
      question: "What should I bring for my journey?",
      answer: "Bring a valid photo ID, your booking confirmation (digital or printed), and any personal items you need. Most buses have charging points, WiFi, and entertainment systems. Check your specific bus amenities in the booking details."
    },
    {
      category: "travel",
      question: "How early should I reach the boarding point?",
      answer: "We recommend reaching the boarding point at least 30 minutes before departure time. This allows time for boarding formalities and ensures you don't miss your bus."
    },
    {
      category: "travel",
      question: "What if my bus is delayed or cancelled?",
      answer: "In case of delays, you'll be notified via SMS/email. For cancellations due to operational issues, we'll arrange an alternative bus or provide a full refund. You can track your bus in real-time through our app."
    },
    {
      category: "travel",
      question: "Can I change my seat after booking?",
      answer: "Yes, you can change your seat based on availability up to 2 hours before departure. This can be done through the 'Manage Booking' section. Some premium seats may require additional payment."
    },
    {
      category: "support",
      question: "How can I contact customer support?",
      answer: "You can reach our 24/7 customer support through multiple channels: Call our helpline, use live chat on our website/app, email us, or reach out via social media. We typically respond within 30 minutes."
    },
    {
      category: "support",
      question: "Can I track my bus location?",
      answer: "Yes! Our mobile app provides real-time bus tracking. You can see your bus location, estimated arrival time, and receive updates about any delays or route changes."
    },
    {
      category: "support",
      question: "What if I lose my ticket?",
      answer: "Don't worry! Since all bookings are digital, you can retrieve your ticket through the 'My Bookings' section using your booking reference number and registered mobile number. You can also show the SMS confirmation."
    },
    {
      category: "booking",
      question: "Is there an age limit for passengers?",
      answer: "Children under 5 years travel free without a separate seat. Children 5-12 years get discounted fares. Senior citizens (60+) are eligible for special discounts on select routes."
    },
    {
      category: "travel",
      question: "What amenities are available on buses?",
      answer: "Most buses feature AC, comfortable reclining seats, charging points, WiFi, entertainment systems, and clean restrooms. Luxury buses may include blankets, water bottles, and snacks. Check specific amenities while booking."
    },
    {
      category: "booking",
      question: "Can I book tickets for someone else?",
      answer: "Yes, you can book tickets for family and friends. Just enter their details during booking. The passenger must carry their valid ID during travel, and the booking confirmation can be shown digitally."
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 lg:-top-40 lg:-right-40 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 lg:-bottom-40 lg:-left-40 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-cyan-400/15 to-blue-600/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-16 right-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-16 left-1/3 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400/20 rounded-full blur-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8 lg:py-12 xl:py-16">
        {/* Header - Responsive */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-primary to-primary/80 rounded-full mb-3 sm:mb-4 lg:mb-6 shadow-xl ring-2 sm:ring-4 ring-primary/20 transform transition-all duration-300 hover:scale-110 hover:ring-6 sm:hover:ring-8 hover:ring-primary/30">
            <FaBus className="text-white text-lg sm:text-2xl lg:text-3xl" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 px-2">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto px-4">
            Find answers to common questions about BusMe booking services
          </p>
        </div>

        {/* Search and Filter Section - Enhanced Responsive */}
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12">
          {/* Search Bar - Mobile Optimized */}
          <div className="relative mb-4 sm:mb-6 lg:mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
              <FaSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 lg:py-5 bg-white/95 backdrop-blur-sm border-2 border-white/30 rounded-lg sm:rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm sm:text-base lg:text-lg text-gray-800 placeholder-gray-500 shadow-lg hover:shadow-xl"
            />
          </div>

          {/* Category Filter - Responsive Grid */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 lg:gap-3 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs sm:text-sm lg:text-base ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-xl ring-2 sm:ring-4 ring-primary/30'
                      : 'bg-white/90 text-gray-700 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                  <span className="truncate">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ List - Enhanced Mobile Layout */}
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-xl">
              <FaSearch className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">No FAQs Found</h3>
              <p className="text-sm sm:text-base text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl border border-white/30 overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.01]"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 text-left focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:bg-gray-50/50 active:bg-gray-100/50"
                  >
                    <div className="flex items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0 flex-1">
                        <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center ${
                          categories.find(cat => cat.id === faq.category)?.id === 'booking' ? 'bg-blue-100 text-blue-600' :
                          categories.find(cat => cat.id === faq.category)?.id === 'payment' ? 'bg-green-100 text-green-600' :
                          categories.find(cat => cat.id === faq.category)?.id === 'travel' ? 'bg-purple-100 text-purple-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {React.createElement(categories.find(cat => cat.id === faq.category)?.icon || FaBus, {
                            className: "h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                          })}
                        </div>
                        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-800 min-w-0 flex-1 pr-2">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {activeIndex === index ? (
                          <FaChevronUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary transition-transform duration-300" />
                        ) : (
                          <FaChevronDown className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-400 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${
                    activeIndex === index 
                      ? 'max-h-[500px] sm:max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-4 lg:pb-4">
                      <div className="pl-8 pt-3 sm:pl-11 lg:pl-14">
                        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Support Section - Fully Responsive */}
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-xl border border-white/30">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-primary to-primary/80 rounded-full mb-4 sm:mb-6 shadow-xl">
                <FaHeadset className="text-white text-lg sm:text-2xl lg:text-3xl" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
                Still have questions?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Our customer support team is available 24/7 to help you with any queries or concerns.
              </p>
              
              {/* Support Options Grid - Responsive */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                <div className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <FaHeadset className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">Call Us</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">1800-123-4567</p>
                </div>
                
                <div className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <FaMobile className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">WhatsApp</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">+91-98765-43210</p>
                </div>
                
                <div className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <FaClock className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">Live Chat</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Available 24/7</p>
                </div>
                
                <div className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <FaBus className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">Help Center</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Visit our portal</p>
                </div>
              </div>
              
              <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 text-white font-bold py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-12 rounded-lg sm:rounded-xl hover:from-primary/90 hover:to-primary/70 focus:outline-none focus:ring-4 focus:ring-primary/30 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl text-sm sm:text-base lg:text-lg">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;