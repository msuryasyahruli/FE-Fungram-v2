import { BsChat, BsChatFill, BsCompass, BsCompassFill, BsGear, BsGearFill, BsHouse, BsHouseFill, BsPersonCircle, BsPlusCircle, BsPlusCircleFill, BsSearch } from "react-icons/bs";
const userNick = localStorage.getItem("userNick");

export const SIDEBAR_LINKS = [
	{
		key: 'Home',
		path: '/',
		icon: <BsHouse />,
		iconFill: <BsHouseFill />
	},
	{
		key: 'Search',
		path: '/search',
		icon: <BsSearch />,
		iconFill: <BsSearch />
	},
	{
		key: 'Explore',
		path: '/explore',
		icon: <BsCompass />,
		iconFill: <BsCompassFill />
	},
	{
		key: 'Post',
		path: '/post',
		icon: <BsPlusCircle />,
		iconFill: <BsPlusCircleFill />
	},
	{
		key: 'Chat',
		path: '/chat',
		icon: <BsChat />,
		iconFill: <BsChatFill />
	},
	{
		key: 'Profile',
		path: `/${userNick}`,
		icon: <BsPersonCircle />,
		iconFill: <BsPersonCircle />
	},
	{
		key: 'Setting',
		path: '/setting',
		icon: <BsGear />,
		iconFill: <BsGearFill />
	}
]