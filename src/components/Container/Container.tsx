/*
 * Created on Sat Mar 11 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default Container;
