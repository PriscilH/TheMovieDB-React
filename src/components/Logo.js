// import image from "../assets/images/logo.png"

const Logo = ({ image, title, subtitle}) => {
  return  (
    <div>
      <div className="imagContain">
        <img className="img" src={image} alt="logo" />
        <span className="Logotitle">{title}</span>
      </div>
      <span className="subtitle">{subtitle}</span>
    </div>
  );
}

export default Logo;