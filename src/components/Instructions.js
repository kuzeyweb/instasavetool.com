import useTranslation from 'next-translate/useTranslation';

export const Instructions = () => {

  const { t } = useTranslation("common");

  return (
    <section className="blog section-padding style-6">
      <div className="container">
        <div className="section-head mb-70 style-6 text-center">
          <h2 className="mb-20"> {t("instructions.title")}
          </h2>
          <p className="color-666">{t("instructions.desc")}</p>
        </div>
        <div className="content">
          <div className="blog-card style-6">
            <img src="https://kuzeysoftware.com/instructions01.png" alt="instructions-01" />
            <div className="info">
              <h4 className="blog-title">
              {t("instructions.card1_title")}
              </h4><hr />
              <div className="text">
              {t("instructions.card1_desc")}
              </div>
            </div>
          </div>
          <div className="blog-card card-center style-6">
            <img src="https://kuzeysoftware.com/instructions02.png" alt="instructions-02" />
            <div className="info">
              <h4 className="blog-title">
              {t("instructions.card2_title")}
              </h4><hr />
              <div className="text">
              {t("instructions.card2_desc")}
              </div>
            </div>
          </div>
          <div className="blog-card style-6">
            <img src="https://kuzeysoftware.com/instructions03.png" alt="instructions-03" />
            <div className="info">
              <h4 className="blog-title">
              {t("instructions.card3_title")}
              </h4>
              <div className="text">
                <hr />
              {t("instructions.card3_desc")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
