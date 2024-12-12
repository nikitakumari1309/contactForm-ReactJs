import styles from "./Button.module.css";

const Button = ({msg , icon ,style,isOutline, ...rest}) => {
  return (
     <button {...rest} className={isOutline?styles.outline_btn:styles.primary_btn} style={style}> 
       {icon}
       {msg}
     </button>        
  )
}

export default Button