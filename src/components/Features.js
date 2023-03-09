import useTranslation from 'next-translate/useTranslation';

export const Features = () => {

  const { t } = useTranslation("common");

  return (
    <section className="choose-us section-padding style-6">
      <div className="section-head mb-70 style-6 text-center">
        <h2 className="mb-20"> {t("features.title")}
        </h2>
      </div>
      <div className="container mb-50">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div>
              <img src="https://static-cse.canva.com/blob/691677/InstagramLikeAPro1.jpg" alt="feature-01" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-20 style-6">
                <h2> {t("features.photos_title")}&nbsp;
                  <span></span>
                </h2>
              </div>
              <div className="text mb-50">
              {t("features.photos_desc")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-50">
        <div id="ins02" className="row justify-content-between">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-20 style-6">
                <h2> {t("features.reels_title")}&nbsp;
                  <span></span>
                </h2>
              </div>
              <div className="text mb-50">
              {t("features.reels_desc")}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img src="https://cdn.radyofenomen.com/image/0x0/u/Contents/r/e/reee-1651164136.png" alt="feature-02" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div>
              <img src="https://www.lifewire.com/thmb/2lVZgcFuCbQTm90UDz4xZA7QraY=/1920x1120/filters:fill(auto,1)/how-to-repost-an-instagram-story-featured-57a148cfac4d446692ce77311ddc8df2.jpg" alt="feature-03" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-20 style-6">
                <h2>{t("features.stories_title")}&nbsp;
                  <span></span>
                </h2>
              </div>
              <div className="text mb-50">
              {t("features.stories_desc")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
