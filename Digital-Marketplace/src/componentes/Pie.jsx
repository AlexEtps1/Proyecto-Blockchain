import "../css/pie.css";

function Pie() {
  return (
    <>
      <footer className="container-fluid footer">

        <div className="wrap-footer">

          <div className="element-footer">
            <h3 className="h3-footer">Marketplace</h3>
            <ul>
              <li><a href="#">Popular collections</a></li>
              <li><a href="#">Launchpad</a></li>
              <li><a href="#">About Launchpad</a></li>
              <li><a href="#">Features Requests</a></li>
            </ul>
          </div>

          <div className="element-footer">
            <h3 className="h3-footer">Resources</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Api</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">System Status</a></li>
            </ul>
          </div>

          <div className="element-footer">
            <h3 className="h3-footer">Resources</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Api</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">System Status</a></li>
            </ul>
          </div>

          <div className="element-footer">
            <h3 className="h3-footer">Follow</h3>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="hr-footer"></hr>
        <div className="redes-sociales">
          <i class="bi bi-instagram icono-red-social"></i>
          <i class="bi bi-facebook icono-red-social"></i>
          <i class="bi bi-github icono-red-social"></i>
          <i class="bi bi-whatsapp icono-red-social"></i>
          <i class="bi bi-envelope-at-fill icono-red-social"></i>
        </div>

        <div className="footer-creds">
          <p className="copy-creds">©2023 · Todos los derechos reservados.</p>
          <div className="legal-creds">
            <ul>
              <li><a href="/politica-privacidad">Privacy Policy</a></li>
              <li><a href="/politica-cookies">Cookies policy</a></li>
              <li><a href="/aviso-legal">Legal warning</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Pie