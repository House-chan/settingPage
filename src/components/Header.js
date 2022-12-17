const Header = ({title}) => {
  return (
    <header>
     <h1 style={Style}>{title}</h1>
    </header>
  )
}

const Style = {
     color: "red",
     backgroundColor: "green",
}

Header.defaultProps = {
     title: "NONE"
}

export default Header