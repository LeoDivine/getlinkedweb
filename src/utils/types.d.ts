interface ButtonP {
    text: string;
    href?: string;
    variant: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
}
interface IFooterLinksProps {
    link?: string;
    icon?: JSX.Element;
    text?: string;
    name?: string;
    icon1?: JSX.Element;
   
  }