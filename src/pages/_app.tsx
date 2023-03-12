/*
 * Created on Fri Mar 03 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import FontProvider from '@/providers/Font';
import Meta from '@/providers/Meta';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<FontProvider>
				<Meta />
				<Component {...pageProps} />
			</FontProvider>
		</>
	);
};

export default App;
