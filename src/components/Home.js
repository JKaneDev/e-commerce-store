import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import BackgroundVideo from "../assets/animated-background.mp4";

const Home = () => {
     return (
          <StyledHomePage type='home'>
               <video
                    autoPlay
                    loop
                    muted
                    style={{
                         position: "fixed",
                         width: "100%",
                         left: "50%",
                         top: "50%",
                         height: "100%",
                         objectFit: "cover",
                         transform: "translate(-50%, -50%)",
                         zIndex: "-1",
                    }}
               >
                    <source src={BackgroundVideo} type='video/mp4' />
                    Your browser does not support the video tag.
               </video>
               <div className='main'>
                    <h1>
                         <span>Cyber</span>zone
                    </h1>
                    <p>
                         The most loved gaming e-commerce store on the internet.
                         Stocking all the latest games available across all
                         platforms. Enjoy our beautiful UX and 24/7 customer
                         support. May your gaming skills be as sharp as your
                         reflexes and your experience be as legendary as your
                         victories.
                    </p>
               </div>
               <HomeNav id='home-nav'>
                    <Link to='/store'>
                         <Button
                              img={<RiArrowRightSLine size={18} />}
                              text='Browse'
                         />
                    </Link>
                    <a
                         href='https://github.com/JKaneDev/e-commerce-store'
                         target='_blank'
                         rel='noreferrer'
                    >
                         <Button img={<SiGithub size={18} />} text='GitHub' />
                    </a>
                    <a href='#' target='_blank' rel='noreferrer'>
                         <Button img={<FaTwitter size={18} />} text='Twitter' />
                    </a>
                    <a href='#' target='_blank' rel='noreferrer'>
                         <Button
                              img={<FaLinkedinIn size={18} />}
                              text='LinkedIn'
                         />
                    </a>
               </HomeNav>
          </StyledHomePage>
     );
};

const StyledHomePage = styled.div`
     color: white;
     border: 1px solid white;
     border-radius: 16px;
     padding: 2rem 3rem;
     max-width: 85vw;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 1.5rem;
     z-index: 1;
     padding-bottom: 20rem;

     .main {
          display: flex;
          flex-direction: column;
          align-items: center;
     }

     h1 {
          letter-spacing: 0.1rem;
          font-size: 68px;
     }

     span {
          color: orange;
     }

     p {
          font-size: 18px;
          font-weight: 300;
          letter-spacing: none;
          overflow: wrap;
          line-height: 1.75rem;
          letter-spacing: 0.15rem;
          text-align: center;
     }
`;

const HomeNav = styled.div`
     position: relative;
     bottom: -1rem;
     max-width: 85vw;
     border-radius: 16px;
     display: flex;
     gap: 1.5rem;
     z-index: 1;

     button {
          font-size: 14px;
          font-weight: 200;
          border: 2px solid #606060;

          &:hover {
               border: 2px solid orange;
          }
     }

     button:nth-of-type(1) {
          gap: 0.5rem;
     }
`;

export default Home;
