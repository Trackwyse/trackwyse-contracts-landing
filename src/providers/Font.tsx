/*
 * Created on Sun Mar 12 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import { Montserrat } from 'next/font/google';

const MontserratFont = Montserrat({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

const FontProvider: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return <main className={MontserratFont.className}>{children}</main>;
};

export default FontProvider;
