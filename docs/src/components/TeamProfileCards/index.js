import React from 'react';
import styles from './styles.module.css';
import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import { courseTeam, developmentTeam } from "../../people";

const ProfileCard = ({ name, pictureLink, roles, websiteLink, linkedInLink }) => {

  if (name === undefined || name === null || name === "") {
    name = "Trekker";
  }

  if (pictureLink === undefined || pictureLink === null || pictureLink === "") {
    pictureLink = "/trekkers-docs-public/img/Trekkers_Light_Logo.svg";
  }

  let chips = <>{<Chip label="Trekker" sx={{ color: "var(--ifm-color-primary-light)" }} />}</>;
  if (!roles || roles.lengh === 0) {
  } else {
    chips = <>{
      roles.map((role) => (
        <Chip key={role} label={role} size="small" className={styles.roleChip} sx={{ color: "var(--ifm-color-primary-reverse)", backgroundColor: "var(--ifm-color-primary)", fontFamily: "Poetsen One" }} />
      ))
    }
    </>
  }

  if (websiteLink === undefined || websiteLink === null || websiteLink === "") {
    websiteLink = false;
  }

  if (linkedInLink === undefined || linkedInLink === null || linkedInLink === "") {
    linkedInLink = false;
  }

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileImageContainer}>
        <img src={pictureLink} alt={"Profile Image for " + name} className={styles.profileImage} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.roleContainer}>
        {chips}
      </div>
      <div className={styles.linksContainer}>
        {websiteLink && (<Link href={websiteLink} color="inherit" target="_blank"> <LinkIcon /> </Link>)}
        {linkedInLink && (<Link href={linkedInLink} color="inherit" target="_blank"> <LinkedInIcon /> </Link>)}
      </div>
    </div>
  );
}

const TeamProfileCards = () => {
  return (<>
    <div className={styles.profileAreaContainer}>

      <h2>Built by Travellers</h2>
      <div className={styles.trekkersCard}>
        <div className={styles.trekkersSlides}>
          <img src='/trekkers-docs-public/img/Trekkers_About.jpeg'  alt="trekkers  Logo" />
        </div>
        <div className={styles.aboutDescriptionContainer}>
          <div style={{ display: "block", gap: 0, justifyContent: "right" }}>
            <p className={styles.trekkersPrefix}>About the</p>
            <p className={styles.trekkersName}>Trekkers</p>
          </div>
          <p className={styles.trekkersDescription}>We build Industry-Grade Software with Industry-Leading Practices</p>
          <p className={styles.trekkersDescriptionThree}>With a passion to learn new technologies of a rapidly evolving industry,
            all five of us are excited to develop Trek, a user-friendly and personalised trip-planner designed for all kinds of
            travellers. Trek will leverage the growing ML/AI technologies to personalise a trip, while providing a user-friendly
            interface that will make trip planning easier and more enjoyable than ever.
          </p>
        </div>
      </div>

      <h2>Mission, Vision, Values</h2>
      <div className={styles.aboutCard}>
        <div className={styles.trekkersLogoContainer}>
          <img src="/trekkers-docs-public/img/mission.svg" alt="trekkers  Logo" className={styles.trekkersLogo} />
        </div>
        <div className={styles.aboutDescriptionContainer}>
          <p className={styles.representativeName}>Our Mission</p>
          <p className={styles.aboutDescription}>Our mission is to revolutionize the way people plan their trips by providing a centralized,
            user-friendly, and personalized platform. We aim to leverage cutting-edge ML/AI technologies to make trip planning more accessible,
            enjoyable, and efficient for all travelers.</p>
        </div>
      </div>

      <div className={styles.aboutCard}>
        <div className={styles.trekkersLogoContainer}>
          <img src="/trekkers-docs-public/img/vision.svg" alt="trekkers  Logo" className={styles.trekkersLogo} />
        </div>
        <div className={styles.aboutDescriptionContainer}>
          <p className={styles.representativeName}>Our Vision</p>
          <p className={styles.aboutDescription}>We envision a world where planning a trip is as exciting as the trip itself. Through Trek, we aspire to be the
            go-to platform for all travel enthusiasts, offering tailored recommendations, seamless integration of travel logistics, and a collaborative space for group
            planning. Our goal is to continuously innovate and adapt to the evolving needs of our users, making every journey memorable and stress-free.</p>
        </div>
      </div>

      <div className={styles.aboutCard}>
        <div className={styles.trekkersLogoContainer}>
          <img src="/trekkers-docs-public/img/values.svg" alt="trekkers  Logo" className={styles.trekkersLogo} />
        </div>
        <div className={styles.aboutDescriptionContainer}>
          <p className={styles.representativeName}>Our Values</p>
          <p className={styles.aboutDescription}>Our values, reflected in the <span>Trekkers' Code</span> are Inclusivity, Respect, Patience, being Collaboration-Oriented,
            Kindness, and Transparency. By adhering to these values, we commit to creating a collaborative and supportive environment that fosters innovation, learning,
            and excellence in our work.</p>
        </div>
      </div>



      <h2>Course Team</h2>
      <div className={styles.profileCardContainer}>
        {courseTeam.map((person) => (
          <ProfileCard key={person.name} {...person} />))
        }
      </div>
      <h2>Development Team</h2>
      <div className={styles.profileCardContainer}>
        {developmentTeam.map((person) => (
          <ProfileCard key={person.name} {...person} />))
        }
      </div>

      <h2>Acknowledgements</h2>
      <div className={styles.aboutCard}>
        <p className={styles.aboutDescription}>
          We would also like to thank industry professionals, and other teaching assistants
          for their guidance and support throughout the development of Trek. We are grateful
          for the opportunity to learn from their expertise and experience, and for their
          invaluable contributions to our project.
        </p>

        <p className={styles.aboutDescription}>
          Many teaching assistants who facilitated the course and helped the development of Trek include Cathy Yang, Davis Song, Yixuan Li, Michelle Kim, and Mahmoud Al Khatib.
          And industry professionals who provided workshops and guidance include Ben Cheung, Stephanie Mah, Joshua Grant, Dorothy Ordogh, and Jeremy Goh.
        </p>
      </div>

    </div>



  </>
  );
}

export default TeamProfileCards;
