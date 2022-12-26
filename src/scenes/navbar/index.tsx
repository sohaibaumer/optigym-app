import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween}`}>
        <div>
          <img alt="logo" src={Logo} />
        </div>
        <div>Home</div>
        <div>Benefits</div>
        <div>Our Classes</div>
        <div>Contact Us</div>
        <div>Sign in</div>
        <button>Become a Member</button>
      </div>
    </nav>
  );
};

export default Navbar;
