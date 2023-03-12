/*
 * Created on Fri Mar 03 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import classNames from "classnames";
import * as RemixIcons from "react-icons/ri";

const sizeClasses = {
  sm: classNames(
    "rounded-md dropshadow-md py-3 px-9 text-base font-medium",
    "hover:dropshadow-xs hover:transition-all hover:duration-300 ",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  ),
  lg: classNames(
    "rounded-lg dropshadow-lg py-4 px-14 text-lg font-medium",
    "hover:dropshadow-sm hover:transition-all hover:duration-300",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  ),
};

const colorClasses = {
  primary: classNames("bg-blue-300 text-black border border-black", "hover:bg-blue-200"),
  secondary: classNames("bg-blue-200 text-black border border-black", "hover:bg-blue-100"),
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizeClasses;
  color?: keyof typeof colorClasses;
  iconRight?: keyof typeof RemixIcons;
  iconLeft?: keyof typeof RemixIcons;

  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;

  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = "lg",
  color = "primary",
  iconRight,
  iconLeft,
  loading,
  disabled,
  onClick,
  className,
  children,
  ...props
}) => {
  const IconRight = iconRight ? RemixIcons[iconRight] : null;
  const IconLeft = iconLeft ? RemixIcons[iconLeft] : null;

  const buttonClasses = classNames(
    "relative flex items-center justify-center text-black",
    "transition-all duration-300 ease-in-out",
    "border border-black",
    colorClasses[color],
    sizeClasses[size],
    className
  );

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled || loading} {...props}>
      <div className={loading ? "flex items-center opacity-0" : "flex items-center"}>
        {IconLeft && <IconLeft className="mr-2" size={20} />}
        {children}
        {IconRight && <IconRight className="ml-2" size={20} />}
      </div>
      {loading && <RemixIcons.RiLoader3Line className="absolute animate-spin" size={24} />}
    </button>
  );
};

export default Button;
