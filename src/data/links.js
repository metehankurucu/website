import React from "react"
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoIosMail,
  IoMdOpen,
  IoMdHome,
  IoIosPaper,
} from "react-icons/io"

const SOCIAL_LINKS = [
  {
    url: "https://github.com/metehankurucu",
    icon: <IoLogoGithub />,
  },
  {
    url: "https://www.linkedin.com/in/metehankurucu",
    icon: <IoLogoLinkedin />,
  },
  {
    url: "https://www.instagram.com/metehan.kurucu/",
    icon: <IoLogoInstagram />,
  },
]

const NAV_LINKS = [
  { display: "Home", link: "/", iconLeft: <IoMdHome /> },
  { display: "Projects", link: "/projects/", iconLeft: <IoIosPaper /> },
  {
    display: "Source Codes",
    link: "https://github.com/metehankurucu/website",
    external: true,
    iconLeft: <IoMdOpen />,
  },
  {
    display: "Contact",
    link: "mailto:metehankurucu@gmail.com",
    external: true,
    iconLeft: <IoIosMail />,
  },
]

export { SOCIAL_LINKS, NAV_LINKS }
