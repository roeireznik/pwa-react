import { FC } from 'react'
import '../styles/button.css'

interface ButtonProps {
    type: 'button' | 'submit' | 'reset',
    buttonClass:string
    value:string,
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type,
  buttonClass,
  value,
  onClick
}) => {
  
return ( 
    <button className={buttonClass} type={type} onClick={onClick} >{value}</button>
  );
}

export default Button;