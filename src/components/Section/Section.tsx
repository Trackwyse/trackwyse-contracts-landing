/*
 * Created on Fri Mar 03 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import classNames from 'classnames';
import Container from '../Container';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	withMargin?: boolean;
	withContainer?: boolean;
}

const Section: React.FC<SectionProps> = ({
	children,
	className,
	withMargin = false,
	withContainer = false,
	...props
}) => {
	const sectionClassNames = classNames(
		'w-full',
		withMargin ? 'py-40' : 'py-0',
		className
	);

	if (withContainer) {
		return (
			<section {...props}>
				<Container className={sectionClassNames}>{children}</Container>
			</section>
		);
	}

	return (
		<section className={sectionClassNames} {...props}>
			{children}
		</section>
	);
};

export default Section;
