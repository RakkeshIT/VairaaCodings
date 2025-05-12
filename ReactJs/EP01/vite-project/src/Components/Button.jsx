import './Styles/Button.css'

function Button({label}){
    return(
        <div>
            <button className="Button">{label}</button>
        </div>
    )
}

export default Button