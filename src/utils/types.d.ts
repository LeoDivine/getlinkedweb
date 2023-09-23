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
  interface FORMINUTI {
    formTitle?: string;
    placeholder?: string;
    type?: string;
    name?: string;
    value?: string;
    className?: string;
    option1?: string;
    option2?: string;
    option3?: string;
    option4?: string;
    onChange?:(e)=>void;
  }
  interface FormSelectProps {
    className: string;
    options: string[];
  }
  