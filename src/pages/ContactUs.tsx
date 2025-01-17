import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import BgImage from "../components/BgImage";
import {
  Button,
  Input,
  Radio,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { FiCheck } from "react-icons/fi";

const ContactUs = () => {
  return (
    <section className="container">
      <BgImage />
      <div className="text-center my-9 lg:mt-[72px] text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg p-4 text-muted">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="bg-background-gradient rounded-2xl lg:rounded-3xl text-white w-full py-6 px-4 lg:px-6">
        <div className="flex flex-col xl:flex-row gap-x-12 xl:gap-x-16 gap-y-12">
          {/* Left Card */}
          <div className="bg-dark space-y-4 w-auto lg:min-w-max py-4 px-4 md:px-6 rounded-2xl">
            <div className="px-4 py-3 space-y-2">
              <h3 className="text-xl md:text-[28px] font-semibold">
                Contact Information
              </h3>
              <p className="text-muted md:text-lg">
                You can contact us using this information
              </p>
            </div>
            <div className="px-4 py-3 space-y-5">
              <div className="flex items-center gap-3 text-sm md:text-lg">
                <span>
                  <FaPhone size={24} />
                </span>
                <span>+123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-lg">
                <span>
                  <FaEnvelope size={24} />
                </span>
                <span>demo@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-lg">
                <span>
                  <FaMapMarkerAlt size={24} />
                </span>
                <span>123 Dartmouth Street, Boston.</span>
              </div>
            </div>
          </div>

          {/* Middle Card */}
          <form
            className="w-full rounded-lg flex flex-col gap-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Inputs */}
            <div className="flex flex-col gap-6">
              {/* Inputs Row 1 */}
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  variant="standard"
                  label="First Name"
                  className="text-white !border-muted focus:!border-muted after:!bg-muted min-w-fit"
                  labelProps={{
                    className:
                      "!text-muted focus:!text-white after:!border-muted",
                  }}
                />

                <Input
                  variant="standard"
                  label="Last Name"
                  className="text-white !border-muted"
                  labelProps={{
                    className:
                      "!text-muted focus:!text-white after:!border-muted",
                  }}
                />
              </div>
              {/* Inputs Row 2 */}
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  variant="standard"
                  label="Email"
                  className="text-white !border-muted"
                  labelProps={{
                    className:
                      "!text-muted focus:!text-white after:!border-muted",
                  }}
                />

                <Input
                  variant="standard"
                  label="Phone"
                  className="text-white !border-muted"
                  labelProps={{
                    className:
                      "!text-muted focus:!text-white after:!border-muted",
                  }}
                />
              </div>
            </div>

            {/* Options */}
            <div>
              <p className="mb-4 text-lg">Select Options</p>
              <div className="flex justify-between flex-wrap gap-3 ">
                {["General", "Technical", "Feedback", "Other"].map(
                  (option, index) => (
                    <div key={index} className="flex gap-8 min-w-36">
                      <Radio
                        name="subject"
                        ripple={false}
                        icon={<FiCheck size={14} />}
                        className="border-white bg-white p-0 transition-all hover:before:opacity-0"
                        label={
                          <Typography className="font-normal text-muted">
                            {option}
                          </Typography>
                        }
                        value={option}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <Textarea
                variant="standard"
                label="Message"
                className="text-white !border-muted h-[50px]"
                labelProps={{
                  className:
                    "peer-focus:after:!border-muted !text-muted focus:!text-white",
                }}
              />
            </div>
            {/* Submit */}
            <div>
              <Button
                type="submit"
                className="w-full lg:w-[200px] normal-case py-4 bg-dark text-white text-base font-normal rounded-xl"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
