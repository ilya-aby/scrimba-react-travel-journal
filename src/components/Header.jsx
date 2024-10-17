import globeIcon from '../assets/globe-icon.png'

export default function Header() {

  return (
    <header>
      <img src={globeIcon} alt="logo" />
      <h1>my travel journal.</h1>
    </header>
  ) 
}