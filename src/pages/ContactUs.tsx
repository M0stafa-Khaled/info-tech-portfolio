import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  return (
    <>
      <div className="contact_title p-9 text-center mb-8 mt-2 text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg p-4 text-gray-400">Any question or remarks? Just write us a message!</p>
      </div>

      <div className="container bg-background-gradient bg-red p-4 rounded-xl mx-auto bg-transparent text-white w-full md:w-10/12">
        <div className="card flex flex-col md:flex-row gap-6">
          <div className="card_left bg-[#0F1524] w-full md:w-1/3 p-7 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-9">You can contact us using this<br />information</p>
            <div className="contact_icons space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <FaPhone size={15} /> <span>+123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <FaEnvelope size={15} /> <span>demo@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <FaMapMarkerAlt size={15} /> <span>123 Dartmouth Street, Boston.<br />Dartmouth Street, Boston.</span>
              </div>
            </div>
          </div>

          <div className="card_middle w-full md:w-1/3 p-6 rounded-lg">
            <div className="flex flex-col gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border-b border-gray-600 bg-transparent text-white text-xs focus:outline-none focus:border-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border-b border-gray-600 bg-transparent text-white text-xs focus:outline-none focus:border-blue-400"
              />
            </div>
            <p className="mb-2 text-xs">Select Options</p>
            
            <div className="flex flex-nowrap gap-x-3 mb-4">
  {['GeneralInquiry', 'GeneralInquiry', 'GeneralInquiry'].map((option, index) => (
    <label key={index} className="flex items-center text-xs">
      <input
        type="radio"
        name="option"
        value={option.toLowerCase().replace(' ', '_')}
        className="w-3 h-3 border border-gray-600 rounded-full bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
      />
      {option}
    </label>
  ))}
</div>

            <p className="text-xs">Message</p>
            <input
  placeholder="Write your message.."
  className="w-full p-3 mb-9 border-b border-gray-600 bg-transparent text-xs text-white focus:outline-none focus:border-blue-400 mt-1"
  rows="4"
>
  </input>

            <button className="w-full md:w-[200px] py-3 bg-[#0F1524] text-white font-normal rounded-md hover:bg-[#0F1524]">
              Send Message
            </button>
          </div>

          <div className="card_right w-full md:w-1/3 p-6 rounded-lg">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border-b border-gray-600 bg-transparent text-white text-xs focus:outline-none focus:border-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border-b border-gray-600 bg-transparent text-white text-xs focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
