export default function Item({text, color, onClick}) {
    return (
        <div className="item" style={{color:color}} onClick={onClick}>
            {text}
        </div>
    )
}
