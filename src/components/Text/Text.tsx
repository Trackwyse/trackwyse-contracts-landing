/*
 * Created on Fri Mar 03 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import classNames from 'classnames';
import React from 'react';

const textSizeClasses = {
	h1: 'text-6xl font-bold',
	h2: 'text-5xl font-bold',
	h3: 'text-3xl font-bold',
	h4: 'text-2xl font-semibold',
	h5: 'text-xl font-medium',
	h6: 'text-base font-medium',
	p: 'text-sm font-normal',
	span: 'text-base font-normal',
};

interface TextProps {
	type?: keyof typeof textSizeClasses;
	children: React.ReactNode;
	clickable?: boolean;
	onClick?: () => void;
	className?: string;
}

const Text: React.FC<TextProps> = ({
	onClick,
	children,
	clickable,
	className,
	type = 'h1',
}) => {
	const textClassNames = classNames(textSizeClasses[type], className);

	if (clickable) {
		return (
			<a
				className={textClassNames}
				onClick={onClick}
				role='button'
				tabIndex={0}
			>
				{children}
			</a>
		);
	}

	return React.createElement(type, { className: textClassNames }, children);
};

export default Text;
