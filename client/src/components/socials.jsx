// src/components/Socials.jsx
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />,      path: "https://github.com/youruser" },
  { icon: <FaLinkedinIn />,  path: "https://linkedin.com/in/youruser" },
  { icon: <FaInstagram />,   path: "https://instagram.com/youruser" },
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
