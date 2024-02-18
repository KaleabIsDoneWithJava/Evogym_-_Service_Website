import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            At in tellus integer feugiat scelerisque varius morbi. Nisi vitae
            suscipit a diam. Lorem ipsum dolor sit amet, consectetur elit, sed
            do eiusmod tempor incididunt ut labore et magna aliqua. Ullamcorper
            a lacus vestibulum sed arcu.
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            orem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            incididunt ut labore et magna aliqua
          </p>
          <p>(333)-425-6874</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
