import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export const Footer = () => {

  const {t} = useTranslation("common");

  return (
    <footer className="style-6 border-top brd-gray">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3">
            <div className="items">
              <div className="title">
                <Link className="navbar-brand" href={`/`}>
                    <img src="https://www.kuzeysoftware.com/logo-default.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title">
                {t('footer.information')}
              </div>
              <ul>
                <li>
                  <Link href={`/contact`}>
                    {t('footer.contact')}
                  </Link>
                </li>
                <li>
                  <Link href={`/privacy-policy`}>
                     {t('footer.privacy_policy')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="container text-center">
              <small className="small">
                {t('footer.copyright_left')} <small className="fw-bold text-decoration-underline">
                  <Link href="https://kuzeysoftware.com">
                    Kuzey Software</Link></small>{t('footer.copyright_right')}
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}