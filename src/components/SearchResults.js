import FavoriteIcon from '@mui/icons-material/Favorite';
import useTranslation from 'next-translate/useTranslation';

export const SearchResults = ({ data }) => {

  const { t } = useTranslation("common");

  const downloadFile = async (path, filename) => {
    try {
      const response = await fetch(path);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <section className="clients style-5">
      <div id="results" className="content d-flex flex-wrap justify-content-center">
        {data && data?.content.imageUrls?.map((image, key) =>
          <div style={{ display: 'block' }} key={key} className="img img-card">
            <div style={{ backgroundColor: '#fff', display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '20px' }}></div>
            </div>
            <img src={image} alt={data.info?.profileName} />
            <div className="my-2" style={{ backgroundColor: '#fff', fontWeight: '550' }}>
              {data.info?.likes && <><FavoriteIcon className='my-1' style={{ color: '#F35369' }} /> <span>{data?.info?.likes}</span> </>}
              {data.info?.views && <><FavoriteIcon className='my-1' style={{ color: '#F35369' }} /> <span>{data?.info?.views}</span> </>}
            </div>
            <a onClick={() => downloadFile(image, image?.split("/").pop())} style={{ width: '100%', display: 'block' }} className="btn butn-blue6 hover-blue2 sm-butn fw-bold">
              {t("main.download")}
            </a>
          </div>
        )}
        {data && data?.content.videoUrls?.map((video, key) =>
          <div style={{ display: 'block' }} key={key} className="img img-card">
            <div style={{ backgroundColor: '#fff', display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '20px' }} />
            </div>
            <img src={video?.poster} alt={data.info?.profileName} />
            <div className="my-2" style={{ backgroundColor: '#fff', fontWeight: '550' }}>
              {data.likes && <><FavoriteIcon className='my-1' style={{ color: '#F35369' }} /> <span>{data.info?.likes}</span> </>}
              {data.views && <><FavoriteIcon className='my-1' style={{ color: '#F35369' }} /> <span>{data.info?.views}</span> </>}
            </div>
            <a onClick={() => downloadFile(video?.url, video?.url.split("/").pop())} style={{ width: '100%', display: 'block' }} className="btn butn-blue6 hover-blue2 sm-butn fw-bold">
              {t("main.download")} .mp4
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
