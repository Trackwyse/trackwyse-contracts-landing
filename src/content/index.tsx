/*
 * Created on Sun Mar 12 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
import * as RemixIcons from 'react-icons/ri';

interface Content {
	NavbarItems: {
		label: string;
		href?: string;
		menu?: {
			label: string;
			href: string;
			icon: keyof typeof RemixIcons;
		}[];
	}[];
}

const Content: Content = {
	NavbarItems: [
		{
			label: 'How it works',
			href: '/how-it-works',
		},
		{
			label: 'Pricing',
			href: '/pricing',
		},
		{
			label: 'Product',
			href: '/product',
		},
		{
			label: 'Resources',
			menu: [
				{
					label: 'Blog',
					href: '/blog',
					icon: 'RiArticleLine',
				},
				{
					label: 'Help Center',
					href: '/help-center',
					icon: 'RiQuestionLine',
				},
				{
					label: 'Support',
					href: '/support',
					icon: 'RiCustomerService2Line',
				},
			],
		},
		{
			label: 'Company',
			menu: [
				{
					label: 'About',
					href: '/about',
					icon: 'RiInformationLine',
				},
				{
					label: 'Careers',
					href: '/careers',
					icon: 'RiTeamLine',
				},
				{
					label: 'Contact',
					href: '/contact',
					icon: 'RiContactsLine',
				},
			],
		},
	],
};

export default Content;
