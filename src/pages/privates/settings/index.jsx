import { Container } from '../../../components/container';
import { Header } from '../../../components/header';
import { SectionTitle } from '../../../components/section-title';
import { Tabs } from '../../../components/tabs';
import { MainPersonalAddress } from './components/main-personal-address';
import { MainPersonalInformations } from './components/main-personal-informations';
import { MainPersonalImage } from './components/main-personal-image';

function Settings() {

  const tabs = [
    <MainPersonalInformations key="1" />,
    <MainPersonalAddress key="2" />,
    <MainPersonalImage key="3"/>
  ];

  return (
    <>
      <Header />
      <section className="pt-12 pb-16">
        <div className="max-w-[1160px] mx-auto">
          <SectionTitle
            content="Configurações"
            className="mb-5"
          />
          <Container className="flex py-16 px-8 gap-x-9">
            <menu>
              <ul className="flex flex-col gap-6">
                <li
                  className="text-nowrap font-semibold text-social-brand
                              transition duration-500 p-2 hover:bg-social-brand hover:text-social-white
                              rounded">
                  <button>
                    Informações pessoais
                  </button>
                </li>
                <li
                  className="font-semibold transition duration-500 p-2 
                  hover:bg-social-brand hover:text-social-white rounded">
                  <button>
                    Segurança
                  </button>
                </li>
              </ul>
            </menu>
            <div className="border-l border-social-gray w-full">
              <Tabs
                titles={['Principal', 'Endereço', 'Imagens']}
                body={ tabs }
              />
            </div>
          </Container>
        </div >
      </section >
    </>
  );
}

export { Settings };
