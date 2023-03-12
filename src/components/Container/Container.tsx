/*
 * Created on Sat Mar 11 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import classNames from 'classnames';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({
	className,
	children,
	...props
}) => {
	const containerClassNames = classNames(
		'container mx-auto px-4',
		'sm:px-6',
		'md:px-8',
		'lg:px-10',
		'xl:px-12',
		className
	);

	return (
		<div className={containerClassNames} {...props}>
			{children}
		</div>
	);
};

export default Container;
