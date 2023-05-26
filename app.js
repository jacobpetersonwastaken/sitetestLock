import React, { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');
const youtubeLink = "https://www.youtube.com/channel/UCFF21kFjb41aNZKJ65BuVzw";
const tiktokLink = "https://www.tiktok.com/@melockchain";
const patreonLink = "https://www.patreon.com/user?u=65763060&fan_landing=true";
const discordLink = "https://discord.com/invite/c2puu62JB3";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: '20px',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#fff',
    border: 'none'
  },
  buttonsContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexDirection: 'column',
  }
};
const appStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  gap: '10px',  // reduced gap between elements
  backgroundColor: '#000',  // changed background color to black
  color: '#fff',  // set text color to white for visibility against dark background
  fontFamily: 'Arial, sans-serif',  // custom font
  overflowX: 'hidden',
};
const sectionTitleStyles = {
  fontSize: '50px',  // Match the size of the Senzu title
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
};

const buttonStyles = {
  transition: '0.2s',
  margin: '10px',  // add some space around buttons
  padding: '10px 20px',  // adjust padding for buttons
  fontSize: '16px',  // set font size for buttons
  backgroundColor: '#333',  // set button background color
  color: '#fff',  // set button text color
  border: 'none',  // remove button border
  borderRadius: '5px',  // add border radius
  cursor: 'pointer',
  // cursor: 'pointer',  // show pointer cursor on hover
};

const bigButtonStyles = {
  ...buttonStyles,
  padding: '15px 30px',  // adjust padding for big button
  fontSize: '20px',  // increase font size for big button
};

const navBarStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  position: 'fixed',
  top: '0',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#8B4513',  // changed navbar background to wood brown color
  color: '#fff',  // set navbar text color to white
  fontFamily: 'Arial, sans-serif',  // custom font
};

const buttonContainerStyles = {
  display: 'flex',
  gap: '10px',
};

const bottomLeftIconStyles = {
  background: 'none',
  border: 'none',
  position: 'fixed',
  bottom: '0',
  left: '0',
  display: 'flex',
  gap: '10px',
  padding: '10px',
  backgroundColor: '#000',  // changed icon background to black
  color: '#fff',  // set icon color to white
  fontFamily: 'Arial, sans-serif',  // custom font
};

const iconButtonStyles = {
  background: 'none',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',  // Remove padding
  width: '40px',  // Adjust width as needed
  cursor: 'pointer',
};

const iconImageStyles = {
  width: '100%',
  height: 'auto',  // Maintain aspect ratio
};
const videoContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',  // Enable scrolling
  maxHeight: '70vh',  // Limit the maximum height of the container
  padding: '20px',
};

const aboutSectionStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const aboutTextStyles = {
  fontSize: '18px',
  textAlign: 'center',
  maxWidth: '800px',  // Adjust the maximum width as desired
  margin: '0 auto',  // Center align the text
};
const supportSectionStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};
const supportTextStyles = {
  fontSize: '18px',
  textAlign: 'center',
  maxWidth: '800px',  // Adjust the maximum width as desired
  margin: '0 auto',  // Center align the text
  marginBottom: '10px',
};
const sectionSeparatorStyles = {
  width: '50%',
  borderTop: '2px solid black',
  margin: '20px auto',
};
const footerStyles = {
  backgroundColor: '#222',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const copyrightStyles = {
  fontSize: '14px',
  marginTop: '10px',
};
const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p>Contact Information: example@example.com | 123-456-7890</p>
      <p>Senzu &copy; 2023. All Rights Reserved.</p>
      <p style={copyrightStyles}>
        Designed and developed by Your Name.
      </p>
    </footer>
  );
};
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buttonTransform, setButtonTransform] = useState('');

  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  const handlePhoneEmailSignUp = () => {
    console.log('Sign up with phone/email');
  }

  const handlePhoneEmailSignIn = () => {
    console.log('Sign in with phone/email');
  }

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
  }

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google');
  }

  return (
    <>
      <nav style={navBarStyles}>
        <div style={buttonContainerStyles}>
          <button style={buttonStyles}>Home</button>
          <button style={buttonStyles}>F&Q</button>
          <button style={buttonStyles} onClick={() => handleOpenModal(true)}>Login</button>
        </div>
        <div style={buttonContainerStyles}>
        <button style={iconButtonStyles} onClick={() => window.open(patreonLink, "_blank")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Patreon_logo.svg/2048px-Patreon_logo.svg.png"
              alt="Patreon Logo"
              style={iconImageStyles}
            />
          </button>

          <button style={iconButtonStyles} onClick={() => window.open(discordLink, "_blank")}>
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
              alt="Discord Icon"
              style={iconImageStyles}
            />
          </button>

          <button style={iconButtonStyles} onClick={() => window.open(youtubeLink, "_blank")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
              alt="YouTube Icon"
              style={iconImageStyles}
            />
          </button>

          <button style={iconButtonStyles} onClick={() => window.open(tiktokLink, "_blank")}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png"
              alt="TikTok Icon"
              style={iconImageStyles}
            />
          </button>
        </div>
      </nav>
      <div className="App" style={appStyles}>
        <h1 style={{ fontSize: '80px', fontFamily: 'Arial, sans-serif' }}>Senzu</h1>
        <h2>Sign up and reserve Username</h2>
        <button style={{...bigButtonStyles, transform: buttonTransform}} onClick={handleOpenModal} onMouseEnter={() => setButtonTransform('rotate(3deg)')} onMouseLeave={() => setButtonTransform('')}>
          Wait list
        </button>
        
        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
      >
        <button style={customStyles.closeButton} onClick={handleCloseModal}>Close</button>
        <h2>Sign Up</h2>
        <div style={customStyles.buttonsContainer}>
          <button onClick={handlePhoneEmailSignUp}>Use Phone / Email</button>
          <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
        </div>
        <hr style={{ width: '100%', borderTop: '1px solid black',margin:0 }} />

        <h2>Sign In</h2>
        <div style={customStyles.buttonsContainer}>
          <button onClick={handlePhoneEmailSignIn}>Use Phone / Email</button>
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
        </Modal>
        
        <div style={bottomLeftIconStyles}>
          <img src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png" alt="App Store Icon" style={{ width: '50px', height: '50px' }} />
          <img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="Flaticon Icon" style={{ width: '50px', height: '50px' }} />
        </div>
      </div>
      <div style={videoContainerStyles}>
  <h1 style={sectionTitleStyles}>Check out this YouTube video</h1>
  <iframe width="720" height="450" src="https://www.youtube.com/embed/cwMhwipTikk" title="FIRST Month of Development | Senzu Devlog #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<hr style={sectionSeparatorStyles} />
<div style={aboutSectionStyles}>
  <h1 style={sectionTitleStyles}>About the Game</h1>
  <p style={aboutTextStyles}>
    Add your general information about the game here. Describe its features, storyline, gameplay mechanics, and anything else you'd like to highlight.
  </p>
</div>

<hr style={sectionSeparatorStyles} />

<div style={supportSectionStyles}>
  <h1 style={sectionTitleStyles}>Want to support Senzu?</h1>
  
  <p style={supportTextStyles}>
    Supporting Senzu helps us continue developing and improving the game. By becoming a patron, you can access exclusive benefits and behind-the-scenes content. Click the button below to set up your support.
  </p>
  <button style={iconButtonStyles}>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Patreon_logo.svg/2048px-Patreon_logo.svg.png"
      alt="Patreon Icon"
      style={iconImageStyles}
    />
  </button>
</div>
<Footer />
    </>
  );
}

export default App;
