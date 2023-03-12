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
		'px-4',
		'sm:px-8',
		'md:px-16',
		'lg:px-32',
		'xl:px-40',
		className
	);

	return (
		<div className={containerClassNames} {...props}>
			{children}
		</div>
	);
};

export default Container;
