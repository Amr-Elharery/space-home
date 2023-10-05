import Image from '../../assets/logo.png';


function Logo() {
  return (
    <div className="logo">
        <a href="/">
            <img src={Image} alt="logo" />
        </a>
    </div>
  )
}

export default Logo;