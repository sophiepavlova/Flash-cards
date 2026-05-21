export default function Header({ onGoHome }) {
  return (
    <div className='container-header'>
      <div className='header-wrapper'>
        <img
          className='header-img'
          src='./src/assets/paddington.webp'
          onClick={onGoHome}
        ></img>
        {/* <img src='./src/assets/Aloy_sticker 1.png' onClick={onGoHome}></img> */}
        <p className='accent-font logo-font' onClick={onGoHome}>
          Studyngton
        </p>
      </div>
      <div className='separator-full'></div>
    </div>
  );
}
