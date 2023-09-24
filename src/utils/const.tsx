import { LocationIcon, PhoneIcon, facebookIcon, instagramIcon, linkedInIcon, twitterIcon } from "./icons";

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
		{ icon: LocationIcon, text: `27, Alara Street,
		  Yaba 100012,
		   Lagos State` },
	  ],
	},
	
  ];
  export const SOCIALLINKS : {
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
  ]
export const CATEGORIES =[
	{
		formTitle: "Category",
		name:
		[
		{option1: "First Category"},
		{option2: "Second Category"},
		{option3: "Third Category"},
		{option4: "Fourth Category"},
		]
		
	}
]
export const GROUPSIZE = [
	{
		formTitle: "Group Size",
		name:
		[
		{option1: "2"},
		{option2: "3"},
		{option3: "4"},
		{option4: "5"},
		]
		
	}
]