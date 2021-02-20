import "../styles/footer.css";
import { IoMdPaperPlane } from "react-icons/io";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className=" flex-col justify-center align-center my-50 lighterGrey">
        <div className="footerContainer flex-wrap flex justify-center align-start">

          <div className='w-percent-20'>
            <ul className="uppercase font-11 text-spacing list-style-none">
              <li className="mb-15 font-15 text-weight-900">Just</li>
              <Link className='text-decoration-none' to='/about'><li className="pointer hover-darkGrey mb-15 lighterGrey">About</li></Link>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">Careers</li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">Collections</li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">Delivery</li>
            </ul>
          </div>
          <div className='w-percent-20'>
            <ul className="uppercase font-11 text-spacing list-style-none">
              <li className="mb-15 font-15 text-weight-900">Commerce</li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">Contact</li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">Location</li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">Privacy Policy</li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">News</li>
            </ul>
          </div>
          <div className='w-percent-20'>
            <ul className="uppercase font-11 text-spacing list-style-none">
              <li className="mb-15 font-15 text-weight-900 lighterGrey">Help</li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">Account</li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">Delivery</li>
            </ul>
          </div>
          <div className='w-percent-20'>
            <ul className="uppercase font-11 text-spacing list-style-none">
              <li  className='mb-15 font-15 text-weight-900'>Social Media</li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">
                Telegram <IoMdPaperPlane className='font-19'/>
              </li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">
                Instagram <IoLogoInstagram className='font-19'/>
              </li>
              <li className="pointer hover-darkGrey mb-15 lighterGrey">
                Facebook <IoLogoFacebook className='font-19'/>
              </li>
            </ul>
          </div>
          <div className='pointer flex justify-center'>
            <Link to="/">
            <img
              src="https://cdn.shopify.com/s/files/1/1869/0703/files/logo_160px_80x_2x_a2ad3995-72f0-426b-b6f1-789d2c3645a5_150x.png?v=1515549026"
              alt=""
            />
            </Link>
          </div>
        </div>
        
        <div className='flex justify-center align-center mt-50 uppercase'>
          <p className="m-0 font-11 text-weight-900 text-spacing">&copy;2021 Just LLC. All rights reserved <br/> DESIGNED BY AVEX IN NYC </p>
        </div>
        
      </footer>
    </>
  );
}

export default Footer;
