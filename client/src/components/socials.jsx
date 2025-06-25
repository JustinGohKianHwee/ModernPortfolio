// src/components/Socials.jsx
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />,      path: "https://github.com/JustinGohKianHwee" },
  { icon: <FaLinkedinIn />,  path: "https://linkedin.com/in/justin-goh-kh" },
  { icon: <FaInstagram />,   path: "https://instagram.com/_juzzztin_/" },
];

export default function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
