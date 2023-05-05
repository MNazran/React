import React, { useEffect } from 'react';
import './footer.css';
import video2 from '../../Assets/vid (2).mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  // create a react hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos='fade-up' className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input
              data-aos='fade-up'
              type='text'
              placeholder='Enter Email Address'
            />
            <button data-aos='fade-up' className='btn flex' type='submit'>
              SEND
              <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore classname='icon' />
                Travel.
              </a>
            </div>

            <div data-aos='fade-up' className='footerParagraph'>
              Lorem ipsum dolor sdhsl siehs aoiewe sfsdf sdfsdf yius srsss
              oiunls qasxv sfasae ipaams sdfsadfi thssfk nsmmase
            </div>

            <div data-aos='fade-up' className='footerSocials flex'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className='footerLinks grid'>
            {/* Group One */}
            <div
              data-aos='fade-up'
              data-aos-duration='3000'
              className='linkGroup'
            >
              <span className='groupTitle'>OUR AGENCY</span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div
              data-aos='fade-up'
              data-aos-duration='4000'
              className='linkGroup'
            >
              <span className='groupTitle'>PARTNERS</span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                HostelWorld
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div
              data-aos='fade-up'
              data-aos-duration='5000'
              className='linkGroup'
            >
              <span className='groupTitle'>LAST MINUTE</span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                London
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                California
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Malaysia
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Europe
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Japan
              </li>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
