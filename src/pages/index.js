import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('instructions.title')}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{t('main.language')}</h1>
        <p className={styles.description}>{t('main.download')}</p>
      </main>
    </div>
  );
}