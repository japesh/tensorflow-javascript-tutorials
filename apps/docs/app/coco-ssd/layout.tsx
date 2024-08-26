import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="text-color-[#3D3D3D]">
      {children}
    </div>
  );
}
