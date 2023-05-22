import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "assets/icons/social-icons";

const social = [
  {
    id: 0,
    link: "https://web.facebook.com/vitaminandnatureke",
    icon: <Facebook />,
    className: "facebook",
    title: "facebook",
  },
  {
    id: 1,
    link: "https://twitter.com/vitamin_nature_",
    icon: <Twitter />,
    className: "twitter",
    title: "twitter",
  },
  {
    id: 2,
    link: "https://www.instagram.com/vitaminandnature/",
    icon: <Instagram />,
    className: "instagram",
    title: "instagram",
  },
  {
    id: 3,
    link: "https://www.tiktok.com/@vitaminandnature",
    icon: <Linkedin />,
    className: "tiktok",
    title: "TikTok",
  },
];

const Footer = () => (
  <footer className="w-full flex items-center justify-center bg-white shadow-footer px-4 py-30px lg:px-35px lg:justify-between">
    <p className="text-gray-900">
      Copyright &copy; {new Date().getFullYear()}{" "}
      <a
        className="font-semibold transition-colors duration-200 ease-in-out hover:text-red-700"
        href="https://stockpot.co.ke/"
      >
        by Stockpot.
      </a>{" "}
      All rights reserved
    </p>

    <div className="items-center hidden lg:flex">
      {social.map((item, index) => (
        <a
          href={item.link}
          className={`social ${item.className}`}
          key={index}
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">{item.title}</span>
          {item.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
