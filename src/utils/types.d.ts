interface ButtonP {
    text: string;
    href?: string;
    variant: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
}