/*
 * Created on Sun Mar 12 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
import Image from 'next/image';
import * as RemixIcons from 'react-icons/ri';

import Content from '@/content';
import Button from '@/components/Button';
import Container from '@/components/Container';

const Navbar: React.FC = () => {
	return (
		<Container className='flex items-center justify-between py-4'>
			<div className='flex items-center gap-x-5'>
				<Image
					width={194}
					height={32}
					src='/logo-32.svg'
					alt='Trackwyse Logo'
				/>

				{Content.NavbarItems.map((item, index) => (
					<NavItem key={index} item={item} />
				))}
			</div>

			<div className='flex gap-x-5'>
				<Button size='sm' color='secondary'>
					Login
				</Button>
				<Button size='sm'>Try for Free</Button>
			</div>
		</Container>
	);
};

interface NavItemProps {
	item: {
		label: string;
		href?: string;
		menu?: {
			label: string;
			href: string;
			icon: keyof typeof RemixIcons;
		}[];
	};
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
	return <div></div>;
};

export default Navbar;
