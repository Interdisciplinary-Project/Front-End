import { Container } from '../../../../../components/container';
import { Step } from '../../../../../components/step';
import { Link } from 'react-router-dom';
import { Button } from '../../../../../components/button';
import boneco from '/bonecopipa.svg';
import { useContext } from 'react';
import { registerContext } from '../../../../../contexts/register-context';
import { useTranslation } from 'react-i18next';

function ThirdStep() {
  const { t } = useTranslation();
  const {
    stepsAmount,
    currentStep,
    changeRegisterStep
  } = useContext(registerContext);

  return (
    <Container
      className="lg:grid lg:grid-cols-[1fr_3fr] lg:gap-x-7 lg:max-w-[1024px]
                 md:grid md:grid-cols-1 md:gap-x-7 md:max-w-[620px]
                 grid grid-cols-1 gap-x-7 max-w-[320px]"
    >
      <div
        className="lg:inline-block lg:text-social-white lg:w-full lg:h-full lg:bg-no-repeat
                   lg:bg-cover lg:bg-[url('/register-flow/box-side-background.png')]
                   md:hidden
                   hidden"
      >
        <div
          className={`
              w-full h-full justify-evenly flex-col py-16 px-8 flex items-center
            `}
        >
          <h1 className="mb-16 text-xl text-social-white font-semibold">
            {t('register.thirdStepH1')}
          </h1>
          <img src={boneco} alt="Ilustração" />
        </div>
      </div>
      <div className="py-16 px-8 gap-y-8 flex flex-col items-center">
        <Step
          steps={stepsAmount}
          active={currentStep}
        />
        <form className="w-full max-w-3xl">
          <fieldset
            className="grid lg:grid-cols-2 gap-x-6 gap-y-6 pb-8
                       md:grid-cols-2
                       grid-cols-1"
          >
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="cep"
                className="font-semibold"
              >
                {t('register.thirdStepFirstCadastro')}
              </label>
              <input
                type="text"
                name="cep"
                id="cep"
                placeholder={t('register.thirdStepFirstPlace')}
                className="w-full h-16 px-4 py-2 rounded border border-social-gray
                dark:bg-dark-social-background dark:text-dark-social-white"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="rua"
                className="font-semibold"
              >
                {t('register.thirdStepSecondCadastro')}
              </label>
              <input
                type="text"
                name="rua"
                id="rua"
                placeholder={t('register.thirdStepSecondPlace')}
                className="w-full h-16 px-4 py-2 rounded border border-social-gray
                dark:bg-dark-social-background dark:text-dark-social-white"
              />
            </div>
          </fieldset>
          <fieldset
            className="grid lg:grid-cols-3 gap-x-6 gap-y-6 pb-8
                       md:grid-cols-2
                       grid-cols-1"
          >
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="bairro"
                className="font-semibold"
              >
                {t('register.thirdStepThirdCadastro')}
              </label>
              <input
                type="text"
                name="bairro"
                id="bairro"
                placeholder={t('register.thirdStepThirdPlace')}
                className="w-full h-16 px-4 py-2 rounded border border-social-gray
                dark:bg-dark-social-background dark:text-dark-social-white"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="cidade"
                className="font-semibold"
              >
                {t('register.thirdStepFourthCadastro')}
              </label>
              <input
                type="text"
                name="cidade"
                id="cidade"
                placeholder={t('register.thirdStepFourthPlace')}
                className="w-full h-16 px-4 py-2 rounded border border-social-gray
                dark:bg-dark-social-background dark:text-dark-social-white"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="estado"
                className="font-semibold"
              >
                {t('register.thirdStepFifithCadastro')}
              </label>
              <select
                id="estado"
                className="w-full h-16 px-4 py-2 rounded border border-social-gray
              dark:bg-dark-social-background dark:text-dark-social-white">
                <option>SP</option>
                <option>RJ</option>
                <option>AM</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="flex flex-col gap-y-2 pb-8">
            <label
              htmlFor="complemento"
              className="font-semibold"
            >
              {t('register.thirdStepSixthCadastro')}
            </label>
            <input
              type="text"
              name="complemento"
              id="complemento"
              placeholder={t('register.thirdStepFifithPlace')}
              className="w-full h-16 px-4 py-2 rounded border border-social-gray
              dark:bg-dark-social-background dark:text-dark-social-white"
            />
          </fieldset>
          <fieldset
            className="lg:flex lg:items-center lg:justify-end lg:gap-x-6
                       md:flex md:items-center md:justify-end md:gap-x-6
                       hidden"
          >
            <Link
              to="/"
              className="text-social-red font-regular transition duration-500
                            hover:brightness-50"
            >
              {t('register.thirdStepFirstLink')}
            </Link>
            <Button
              variant="green"
              type="button"
              content={t('register.thirdStepFirstButtom')}
              onClick={changeRegisterStep}
            />
          </fieldset>
          <fieldset
            className="lg:hidden
                       md:hidden
                       flex flex-col-reverse items-center justify-center gap-y-6"
          >
            <Link
              to="/"
              className="text-social-red font-regular transition duration-500
                            hover:brightness-50"
            >
              {t('register.thirdStepSecondLink')}
            </Link>
            <Button
              variant="green"
              type="button"
              content={t('register.thirdStepSecondButtom')}
              onClick={changeRegisterStep}
            />
          </fieldset>
        </form>
      </div>
    </Container>
  );
}

export { ThirdStep };