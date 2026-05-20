export default function Header({ onGoHome }) {
  return (
    <div className='container-header'>
      <div className='header-wrapper'>
        <img src='./src/assets/Aloy_sticker 1.png' onClick={onGoHome}></img>
        <p className='accent-font logo-font' onClick={onGoHome}>
          NewHorizons
        </p>
      </div>
      <div className='separator-full'></div>
    </div>
  );
}
