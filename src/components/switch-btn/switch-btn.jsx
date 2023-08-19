import "./switch-btn.css"

function SwitchBtn({text, clickEvent}){
    return (
        <div className="swich-btn">
            <button onClick={()=>{clickEvent()}}>{text}</button>
        </div>
        
    )
}

export default SwitchBtn