/*
 * Created on Fri Mar 03 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import * as BootstrapIcons from 'react-icons/bs';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Head from 'next/head';
import Container from '@/components/Container';

const Home = () => {
	return (
		<>
			<Navbar />

			<Section withMargin withContainer className='grid grid-cols-2 gap-x-6'>
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

			<Section
				withMargin
				withContainer
				className='border-t border-b border-black bg-white'
			>
				<div className='flex flex-col items-center gap-y-8'>
					<Text type='h1'>How it Works</Text>
					<Text type='h5' className='max-w-3xl text-center'>
						Trackwyse makes contract management easy. Upload your contract,
						enter info for each party, and let our technology handle the rest.
						No more missed signatures or stalled contracts.
					</Text>

					<div className='mt-10 grid grid-cols-3 gap-x-8'>
						<div className='orange-shadow flex flex-col items-center rounded-md border border-black p-6 text-center'>
							<div className='mb-10 mt-6 rounded-full border border-black bg-[#FFC2A0] p-6'>
								<BootstrapIcons.BsCloudUpload size={84} />
							</div>
							<Text type='h4' className='my-4'>
								Upload Multiple Contracts
							</Text>
							<Text type='h5'>
								Easily upload and reuse contracts using Trackwyse's Technology
							</Text>
						</div>

						<div className='green-shadow flex flex-col items-center rounded-md border border-black p-6 text-center'>
							<div className='mb-10 mt-6 rounded-full border border-black bg-[#A0FFC2] p-6'>
								<BootstrapIcons.BsInputCursor size={84} />
							</div>

							<Text type='h4' className='my-4'>
								Enter Contract Details and Parties
							</Text>
							<Text type='h5'>
								Enter details for each party involved quickly with our
								AI-powered technology.
							</Text>
						</div>

						<div className='red-shadow flex flex-col items-center rounded-md border border-black p-6 text-center'>
							<div className='mb-10 mt-6 rounded-full border border-black bg-[#FFA0A0] p-6'>
								<BootstrapIcons.BsEnvelope size={84} />
							</div>
							<Text type='h4' className='my-4'>
								Receive Signatures Quickly and Easily
							</Text>
							<Text type='h5'>
								Send your contract to multiple parties with just a few clicks
							</Text>
						</div>
					</div>
				</div>
			</Section>

			<Section withMargin withContainer>
				<div className='flex flex-col items-center gap-y-8'>
					<Text type='h1'>Pricing</Text>
					<Text type='h5' className='max-w-3xl text-center'>
						Get more for your money with Trackwyse's feature-packed plans that
						scale with your business needs.
					</Text>
				</div>
			</Section>

			<Section
				withMargin
				withContainer
				className='border-t border-b border-black bg-white'
			>
				<div className='flex flex-col items-center gap-y-8'>
					<Text type='h1'>Why Trackwyse?</Text>
					<Text type='h5' className='max-w-3xl text-center'>
						Simplify your contract management process with Trackwyse. Our
						AI-powered platform streamlines the process, helping you get
						contracts signed faster and easier.
					</Text>
				</div>
			</Section>
		</>
	);
};

export default Home;
