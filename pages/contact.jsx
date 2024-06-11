import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        {/* Text & Illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text  */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-4 text-lg gap-x-4 text-primary">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="max-w-md mb-8 h1">Let&apos;s Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              I’m always open to new opportunities and collaborations. Contact
              me via email, phone, or social media. I look forward to hearing
              from you soon. 😊
            </p>
          </div>
          {/* illustration  */}
          <div className="hidden w-full bg-top bg-no-repeat bg-contain xl:flex bg-contact_illustration_light dark:bg-contact_illustration_dark"></div>
        </div>
        {/* info text & form  */}
        <div className="grid mb-24 xl:grid-cols-2 xl:mb-32">
          {/* info text  */}
          <div className="flex flex-col mb-12 text-base gap-y-8 xl:gap-y-14 xl:mb-24 xl:text-lg">
            {/* mail  */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>vakilverma1982@gmail.com</div>
            </div>
            {/* address  */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>
                Warur Road, Near Talathi office , Tehsil rajura , Dist
                chandrapur
              </div>
            </div>
            {/* phone  */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 951 187 2298</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
