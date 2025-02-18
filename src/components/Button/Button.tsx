import React from 'react';
import { Button as AntButton } from 'antd';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'orange' | 'blue' | 'red';
}

export const Button: React.FC<ButtonProps> = ({ children, color, onClick, ...props }) => {
    return (
        <AntButton
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            type="default"
            style={{ backgroundColor: 'lightgray' }}
            onClick={onClick}
            {...props}
        >
            {children}
        </AntButton>
    );
};
