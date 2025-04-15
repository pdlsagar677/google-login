import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaStar, FaRegStar, FaPaperPlane } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const ContactPage = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I book a tour?',
      answer: 'You can book directly through our website by selecting your desired tour and following the booking process, or contact our travel consultants for assistance.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for tour bookings.'
    },
    {
      id: 3,
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 30+ days before departure receive a full refund. Between 15-29 days, we offer 50% refund. No refunds for cancellations within 14 days of travel.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, rating });
    setIsSubmitted(true);
    // In a real app, you would send this data to your backend
    setFormData({ name: '', email: '', subject: '', message: '' });
    setRating(0);
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-32 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Wanderlust</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you! Our team is ready to assist with your travel needs.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-md sticky top-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">24/7 Customer Support</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@wanderlusttravel.com</p>
                  <p className="text-gray-600">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Office</h3>
                  <p className="text-gray-600">123 Travel Street</p>
                  <p className="text-gray-600">San Francisco, CA 94107</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <FaClock className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 9am-6pm</p>
                  <p className="text-gray-600">Saturday: 10am-4pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Rating */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-xl shadow-md">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-700 p-4 rounded-lg inline-block mb-6">
                  <FaPaperPlane className="text-3xl mx-auto" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
                <p className="text-gray-600 mb-6">Your message has been sent successfully. Our team will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">Rate Your Experience (Optional)</label>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          className="text-2xl focus:outline-none"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                        >
                          {star <= (hoverRating || rating) ? (
                            <FaStar className="text-yellow-400" />
                          ) : (
                            <FaRegStar className="text-yellow-400" />
                          )}
                        </button>
                      ))}
                      <span className="ml-3 text-gray-600">
                        {rating ? `You rated us ${rating} star${rating !== 1 ? 's' : ''}` : 'Select stars'}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-bold text-lg flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border rounded-xl overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <h3 className="font-medium text-gray-800">{faq.question}</h3>
                    {activeAccordion === faq.id ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {activeAccordion === faq.id && (
                    <div className="p-4 bg-white">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.102370303536!2d-122.41941558468248!3d37.77492997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Wanderlust Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;