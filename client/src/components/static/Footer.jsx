// import { LiaCopyrightSolid } from "react-icons/lia";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import SocialLink from "./SocialLink";
import { CiLocationOn, CiMobile3 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();
  const brand = "FILAR";

  return (
    <footer
      className="bg-stone-600 text-center text-white dark:bg-stone-600 dark:text-white lg:text-left">
      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Filar
            </h6>
            <p className="mb-4 lg:max-w-64 text-sm">
              Our passion is to create beautiful pices of clothing that make you feel confident and comfortable.
            </p>
            <p className="lg:max-w-64 text-sm">
              Welcome!
            </p>
          </div>
          
          {/* <!-- Follow us section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Follow us
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start text-sm">
              <SocialLink icon={<FiInstagram />} label="Instagram" link="https://www.instagram.com/" />
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start text-sm">
              <SocialLink className="mb-4" icon={<FiFacebook />} label="Facebook" link="https://www.facebook.com/?locale=es_LA" />
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start text-sm">
              <SocialLink className="mb-4" icon={<FaXTwitter />} label="X (formerly Twitter)" link="https://twitter.com/?lang=es" />
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start text-sm">
              <CiLocationOn className="mr-3 h-5 w-5" />
              Gabriel Pereira 1330, MVD, UY
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start text-sm">
              <MdOutlineEmail className="mr-3 h-5 w-5" />
              info@filar.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start text-sm">
              <CiMobile3 className="mr-3 h-5 w-5" />
              + 598 99 999 999
            </p>
            <p className="flex items-center justify-center md:justify-start text-sm">
              <BsTelephone className="mr-3 h-5 w-5" />
              + 598 208 8888
            </p>
          </div>
          {/* <!-- Subscribe section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Subscribe
            </h6>
            <p className="mb-4 text-sm">
              Find out our latest news!
            </p>
            <p className="mb-4 text-sm">
              <input className="bg-stone-600 border border-white rounded-md px-2 py-1" type="text" placeholder="Your e-mail" />
            </p>
            <p>
              <button className="bg-stone-600 border border-stone-600 rounded-md px-2 py-1 hover:bg-white hover:text-stone-600 text-sm">
                Send
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* <!--Copyright section--> */}
      <div className="bg-white p-2 text-center text-stone-500 font-bodyFont text-sm border border-stone-600">
        <span>© {year} Copyright:</span>
        <a
          className="font-semibold text-stone-500"
          href="https://tw-elements.com/"
        > {brand}</a>
      </div>
    </footer>
  );
}

export default Footer;

