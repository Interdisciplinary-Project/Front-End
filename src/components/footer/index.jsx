import logo from '/logo.svg';
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation ();

  return (
    <footer
      className="lg:w-full lg:bg-light-social-brand
                 md:w-full md:bg-light-social-brand
                 w-full bg-light-social-brand"
    >
      <div
        className="lg:max-w-[1024px] lg:mx-auto
                   md:max-w-[620px] md:mx-auto
                   max-w-[320px] mx-auto">
        <figure
          className="lg:flex lg:gap-x-8 lg:items-center
                     md:flex md:justify-between md:items-center md:pt-10
                     items-center"
          title="Voltar à home"
          aria-label="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
        >
          <div
            className="lg:inline-block lg:pt-0 lg:pb-0
                       md:inline-block md:pt-0 md:pb-0
                       flex justify-center pt-10 pb-8">
            <img
              className="lg:w-24 lg:h-24
                         md:w-24 md:h-24
                         w-20 h-20"
              src={logo}
              alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
            />
          </div>
          <p
            className="lg:max-w-[580px] lg:text-base lg:inline-block
                       hidden">
            {t('footer.pFooter')}
          </p>
          <figcaption
            className="lg:text-2xl lg:max-w-[270px] lg:text-left
                       text-lg text-center">
            {t('footer.firstFig')}
            <strong className="text-social-brand">{t('footer.firstStrong')}</strong>{t('footer.firstTerra')}
          </figcaption>
        </figure>
        <div
          className="lg:w-full lg:text-center lg:pb-8
                     md:w-full md:text-center md:pb-12
                     w-full text-center pt-4 pb-12"
        >
          <small className="text-social-gray">&copy; {t('footer.small')}</small>
        </div>
      </div>
    </footer>
  );
}

export { Footer };