import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  return (
    <>
      <div className="contact_title p-9 text-center mb-8 mt-2 text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg p-4 text-gray-400">Any question or remarks? Just write us a message!</p>
      </div>

      <div className="container bg-background-gradient p-4 rounded-xl mx-auto bg-transparent text-white w-full md:w-10/12">
        <div className="card flex flex-col lg:flex-row gap-6">
          {/* Left Card */}
          <div className="card_left bg-[#0F1524] w-full lg:w-1/3 p-7 rounded-lg">
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
                <FaMapMarkerAlt size={15} /> <span>123 Dartmouth Street, Boston.</span>
              </div>
            </div>
          </div>

          {/* Middle Card */}
          <div className="card_middle w-full lg:w-2/3 p-6 rounded-lg flex flex-col gap-6">
            {/* Inputs Row 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border-b border-gray-600 bg-transparent text-white text-xs focus:outline-none focus:border-blue-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border-b border-gray-600 bg-transparent text-white text-xs focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Inputs Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border-b border-gray-600 bg-transparent text-white text-xs focus:outline-none focus:border-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border-b border-gray-600 bg-transparent text-white text-xs focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Options */}
            <div>
              <p className="mb-2 text-xs">Select Options</p>
              <div className="flex flex-wrap gap-3 ">
                {[["General", "Technical"], ["Feedback", "Other"]].map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-8  ">
                    {row.map((option, index) => (
                      <label key={index} className="flex items-center text-xs  ">
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
                ))}
              </div>
            </div>

            {/* Message and Button */}
            <div className="flex flex-col gap-4">
              <p className=' text-xs'> Message</p>
              <textarea
                placeholder="Write your message.."
                className="w-full p-1 mb-4 border-b border-gray-600 bg-transparent text-xs text-white focus:outline-none focus:border-blue-400"
                rows="1"
              ></textarea>
              <button className="w-full lg:w-[200px] py-3 bg-[#0F1524] text-white font-normal rounded-md hover:bg-[#0F1524]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
