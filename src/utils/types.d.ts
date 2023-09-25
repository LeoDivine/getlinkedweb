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
    onChange?:React.ChangeEventHandler<HTMLTextAreaElement>;
  }
  interface IFormTextarea extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    formTitle?: string;
  }

  interface IFormInput extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    formTitle: string
  }
  interface FormSelectProps {
    name: string;
    className: string;
    options: ICategories[];
    label: string;
    
    onChange: (e)=>void;
    value: number | string;
  }
  interface ICategories {
    id: string;
    name: string;
  }
  