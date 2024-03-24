import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className=" bg-secondary py-12">
      <div className="div mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* Copyright */}
          <div className=" text-muted-foreground ">
            Copyright &copy; Ryan Davis. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
