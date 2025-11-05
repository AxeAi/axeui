import * as class_variance_authority_types from 'class-variance-authority/types';
import React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const button: (props?: ({
    intent?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
}
declare const Button: React.FC<ButtonProps>;

declare const Modal: ({ trigger, title, description, body, }: {
    trigger: any;
    title: string;
    description: string;
    body?: any;
}) => react_jsx_runtime.JSX.Element;

declare const TooltipComponent: ({ text, position, intent, trigger, }: {
    intent?: "normal" | "danger";
    position?: "left" | "right" | "top" | "bottom";
    text: string;
    trigger: any;
}) => react_jsx_runtime.JSX.Element;

declare const Dropdown: ({ items, trigger }: {
    items: string[];
    trigger: any;
}) => react_jsx_runtime.JSX.Element;

export { Button, Dropdown, Modal, TooltipComponent as Tooltip };
