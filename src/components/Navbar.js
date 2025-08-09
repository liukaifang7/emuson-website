// ... existing code ...
function Navbar() {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">青岛云归谷科技有限公司</a>
      </div>
    </nav>
  );
}
// ... existing code ...