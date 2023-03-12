/*
 * Created on Fri Mar 03 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import classNames from 'classnames';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	showMargin?: boolean;
}

const Section: React.FC<SectionProps> = ({
	children,
	className,
	showMargin,
	...props
}) => {
	const sectionClassNames = classNames(
		'w-full',
		showMargin ? 'my-40' : 'my-0',
		className
	);

	return (
		<section className={sectionClassNames} {...props}>
			{children}
		</section>
	);
};

export default Section;
