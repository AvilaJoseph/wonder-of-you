import './../../assets/css/general.css'

function Navbar() {
  return (
    <>
      <div className='container-navbar'>
        <div className='logo-container'><h2>Panto</h2></div>
        <div className='container-info'>
          <ul style={{margin:0}}>
            <li>Furtine</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;