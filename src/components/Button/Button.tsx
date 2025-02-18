import React from 'react';
import { Button as AntButton } from 'antd';

type ButtonVariant = 'edit' | 'delete' | 'add'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    variant?: ButtonVariant;
}

const buttonStyles: Record<ButtonVariant, React.CSSProperties> = {
    edit: {color: '#d27c19', border: '1px solid rgba(210, 102, 25, 0.5)'},
    delete: { color: 'red', border: '1px solid rgba(210, 25, 25, 0.5)' },
    add: { color: '#1976d2', border: '1px solid rgba(25, 118, 210, 0.5)' }
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'edit', onClick, ...props }) => {
    return (
        <AntButton
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            type="default"
            style={buttonStyles[variant]}
            onClick={onClick}
            {...props}
        >
            {children}
        </AntButton>
    );
};
