/*
 * Created on Fri Mar 03 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import Text from '@/components/Text';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Head from 'next/head';
import Container from '@/components/Container';

const Home = () => {
	return (
		<Container>
			<Navbar />

			<Section showMargin className='grid grid-cols-2 gap-x-6'>
				<div className='flex flex-col gap-y-8'>
					<Text type='h1'>We Believe Contracts Should be Simple</Text>
					<Text type='h5'>
						Simplify contract management with Trackwyse. Create, manage, and
						streamline contracts with ease. Try it free to see how we can
						simplify your process!
					</Text>
					<Button className='self-start'>Try for Free</Button>
				</div>
			</Section>
		</Container>
	);
};

export default Home;
