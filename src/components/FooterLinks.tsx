import '../ProjectsBlog.css';
import icon_Git from '/assets/footer_links/git.svg';
import icon_Li from '/assets/footer_links/li.svg';
import icon_Art from '/assets/footer_links/art.svg';
import icon_Cp from '/assets/footer_links/cp.svg';

function FooterLinks() {

  return (
    <div className='mw700cf'>
      <p>Keep in touch!</p>
      <ul className='flexrc'>
        <li><a href="https://github.com/lrx5" target='_blank'><img src={icon_Git} alt="" /></a></li>
        <li><a href="https://ph.linkedin.com/in/john-karl-nolasco-lraxious" target='_blank'><img src={icon_Li} alt="" /></a></li>
        <li><a href="https://www.artstation.com/lraxious" target='_blank'><img src={icon_Art} alt="" /></a></li>
        <li><a href="https://codepen.io/LRXS" target='_blank'><img src={icon_Cp} alt="" /></a></li>
      </ul>
    </div>
  )
}

export default FooterLinks
