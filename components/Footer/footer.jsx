import Copyright from "./copyright";
import FooterContacts from "./footer-contacts";

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="contents">
        <div className="left">
          <FooterContacts />
        </div>
        <div className="right">
          <Copyright />
        </div>
      </div>
    </div>
  );
}
