import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
const Cta = () => {
  return (
    <section id="cta" className=" py-14 bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="max-w-2xl mb-8 text-2xl font-bold text-center font-outfit">
            Prepared to turn your ideas into reality? I&apos;m here to help
          </h2>
        </div>
        <div className="grid mt-2 xl:grid-cols-2 xl:mb-32">
          {/* info text  */}
          <div className="flex flex-col text-base gap-y-4 xl:gap-y-10 xl:text-lg xl:mt-14">
            {/* mail  */}
            <div className="flex items-center gap-x-6">
              <MailIcon size={18} className="text-primary" />
              <div>pradojohnbrian@gmail.com</div>
            </div>
            {/* address  */}
            <div className="flex items-center gap-x-6">
              <HomeIcon size={18} className="text-primary" />
              <div>Poblacion, Sual Pangasinan</div>
            </div>
            {/* phone  */}
            <div className="flex items-center gap-x-6">
              <PhoneCall size={18} className="text-primary" />
              <div>+63 961 4781 237</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
