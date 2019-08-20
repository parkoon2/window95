const SpecLogo = ({ width, x, y, name }) => {
    return (
        <img
            style={{ width, top: `${y}px`, left: `${x}px` }}
            className="logo"
            src={`static/images/logo/${name}.png`}
            alt={name}
        />
    )
}

export default SpecLogo
