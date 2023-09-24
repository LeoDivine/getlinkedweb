import {
  LocationIcon,
  PhoneIcon,
  facebookIcon,
  instagramIcon,
  linkedInIcon,
  twitterIcon,
} from "./icons";

export const FOOTERLINKS: {
  title?: string;
  title1?: string;
  links: IFooterLinksProps[];
}[] = [
  {
    title: "Useful Links",
    links: [
      { name: "Overview", link: "/" },
      { name: "Timeline", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Register", link: "/" },
    ],
  },

  {
    title: "Contact Us",
    links: [
      { icon: PhoneIcon, text: "+234 6707653444" },
      {
        icon: LocationIcon,
        text: `27, Alara Street,
		  Yaba 100012,
		   Lagos State`,
      },
    ],
  },
];
export const SOCIALLINKS: {
  title?: string;
  links: IFooterLinksProps[];
}[] = [
  {
    title: "Follow Us",
    links: [
      { icon: twitterIcon, link: "https://twitter.com" },
      { icon: facebookIcon, link: "https://facebook.com" },
      { icon: instagramIcon, link: "https://instagram.com" },
      { icon: linkedInIcon, link: "https://linkedin.com" },
    ],
  },
];
export const CATEGORIES = [
  { id: 1, name: "MOBILE" },
  { id: 2, name: "WEB" },
  { id: 3, name: "UI/UX",},
];

export const GROUPSIZE = [
  {
    formTitle: "Group Size",
    name: [
      { option1: "1" },
      { option2: "2" },
      { option3: "3" },
      { option4: "4" },
    ],
  },
];

