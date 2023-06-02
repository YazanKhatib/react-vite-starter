import * as React from 'react';

interface Props {
  placeholder: string;
  styles?: string;
}

export const Input: React.FC<Props> = ({ placeholder, styles }) => {
  return (
    <input
      className={` ${styles} w-full rounded-full border border-sand bg-white px-5 py-4 font-opensans font-normal text-gra outline-none`}
      type="text"
      placeholder={placeholder}
    />
  );
};
