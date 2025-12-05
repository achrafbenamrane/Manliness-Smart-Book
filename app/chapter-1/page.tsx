'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote, Comparison } from '@/components/Chapter';
import {useTranslations} from 'next-intl';

export default function Chapter1() {
  const t = useTranslations('chapter1');
  
  return (
    <SmartBookLayout currentChapter={1} totalChapters={5}>
      <Chapter
        number={1}
        title={t('title')}
        subtitle={t('subtitle')}
      >
        <Section title={t('pillarsTitle')}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('pillarsText')}
          </p>
        </Section>

        <Section title={t('spartanTitle')} delay={0.1}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('spartanText')}
          </p>
        </Section>

        <Quote
          text={t('spartanQuote')}
          author={t('spartanQuoteAuthor')}
          delay={0.2}
        />

        <Section title={t('cornerstonesTitle')} delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">⚔️ {t('courageTitle')}</h3>
              <p className="text-bronze-200">
                {t('courageText')}
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">🛡️ {t('honorTitle')}</h3>
              <p className="text-bronze-200">
                {t('honorText')}
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">💪 {t('disciplineTitle')}</h3>
              <p className="text-bronze-200">
                {t('disciplineText')}
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">🏛️ {t('wisdomTitle')}</h3>
              <p className="text-bronze-200">
                {t('wisdomText')}
              </p>
            </div>
          </div>
        </Section>

        <Comparison
          oldMen={t.raw('comparisonOldMen') as string[]}
          modernMen={t.raw('comparisonModernMen') as string[]}
          delay={0.3}
        />

        <Section title={t('initiationTitle')} delay={0.2}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('initiationText1')}
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            {t('initiationText2')}
          </p>
          <p className="text-bronze-200 text-lg">
            {t('initiationText3')}
          </p>
        </Section>

        <Section title={t('algerianTitle')} delay={0.3}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('algerianText')}
          </p>
          
          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-bronze-600">
            <h4 className="text-2xl font-serif font-bold text-bronze-400 mb-4">
              {t('algerianStrength')}
            </h4>
            <p className="text-bronze-200">
              {t('algerianStrengthText')}
            </p>
          </div>

          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-bronze-600">
            <h4 className="text-2xl font-serif font-bold text-bronze-400 mb-4">
              {t('algerianFamily')}
            </h4>
            <p className="text-bronze-200">
              {t('algerianFamilyText')}
            </p>
          </div>
        </Section>
      </Chapter>
    </SmartBookLayout>
  );
}
