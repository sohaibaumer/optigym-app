import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Elevate your fitness at OptiGym, where excellence meets results.
            With cutting-edge facilities, diverse classes, and expert trainers,
            we're here to guide your journey. Join us and unlock your potential
            for a healthier, stronger, and more confident you.
          </p>
          <p>© Optigym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Sponsor Links</h4>
          <p className="my-5">https://www.optimumnutrition.com/</p>
          <p className="my-5">https://www.technogym.com/</p>
          <p>https://www.muscletech.com/</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">optigym@email.com</p>
          <p>(444)555-6666</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
