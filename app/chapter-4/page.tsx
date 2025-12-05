'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote, Comparison } from '@/components/Chapter';
import {useTranslations} from 'next-intl';

export default function Chapter4() {
  const t = useTranslations('chapter4');
  
  return (
    <SmartBookLayout currentChapter={4} totalChapters={5}>
      <Chapter
        number={4}
        title={t('title')}
        subtitle={t('subtitle')}
      >
        <Section title={t('honestyTitle')}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('honestyText1')}
          </p>
          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-bronze-600">
            <h4 className="text-bronze-400 font-bold text-xl mb-4">{t('assessmentTitle')}</h4>
            <ul className="space-y-3 text-bronze-200">
              {(t.raw('assessmentList') as string[]).map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Quote
          text={t('stoicQuote')}
          author={t('stoicQuoteAuthor')}
          delay={0.2}
        />

        <Section title={t('pillarsTitle')} delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">{t('physicalTitle')}</h3>
              <p className="text-bronze-200 mb-4">
                {t('physicalText')}
              </p>
              <ul className="text-bronze-200 text-sm space-y-2">
                {(t.raw('physicalList') as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">{t('financialTitle')}</h3>
              <p className="text-bronze-200 mb-4">
                {t('financialText')}
              </p>
              <ul className="text-bronze-200 text-sm space-y-2">
                {(t.raw('financialList') as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">{t('mentalTitle')}</h3>
              <p className="text-bronze-200 mb-4">
                {t('mentalText')}
              </p>
              <ul className="text-bronze-200 text-sm space-y-2">
                {(t.raw('mentalList') as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">{t('purposeTitle')}</h3>
              <p className="text-bronze-200 mb-4">
                {t('purposeText')}
              </p>
              <ul className="text-bronze-200 text-sm space-y-2">
                {(t.raw('purposeList') as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Comparison
          oldMen={t.raw('comparisonOldMen')}
          modernMen={t.raw('comparisonModernMen')}
          delay={0.3}
        />

        <Section title={t('dailyTitle')} delay={0.2}>
          <p className="text-bronze-200 text-lg mb-6">
            {t('dailyText')}
          </p>
          
          <div className="glass-effect rounded-lg p-8 my-8 metal-border">
            <h4 className="text-2xl font-serif text-bronze-400 mb-6 text-center">
              {t('routineTitle')}
            </h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-bronze-300 font-bold mb-2">{t('morningTitle')}</h5>
                <p className="text-bronze-200">
                  {t('morningText')}
                </p>
              </div>
              <div>
                <h5 className="text-bronze-300 font-bold mb-2">{t('workTitle')}</h5>
                <p className="text-bronze-200">
                  {t('workText')}
                </p>
              </div>
              <div>
                <h5 className="text-bronze-300 font-bold mb-2">{t('eveningTitle')}</h5>
                <p className="text-bronze-200">
                  {t('eveningText')}
                </p>
              </div>
              <div>
                <h5 className="text-bronze-300 font-bold mb-2">{t('nightTitle')}</h5>
                <p className="text-bronze-200">
                  {t('nightText')}
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-red-600/60">
            <h4 className="text-red-400 font-bold text-xl mb-4">{t('nonNegotiableTitle')}</h4>
            <ul className="space-y-2 text-bronze-200">
              {(t.raw('nonNegotiableList') as string[]).map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Quote
          text={t('realityQuote')}
          delay={0.3}
        />

        <Section title={t('muslimTitle')} delay={0.3}>
          <p className="text-bronze-200 text-lg mb-6">
            {t('muslimText')}
          </p>

          <div className="glass-effect rounded-lg p-8 my-8 metal-border">
            <h4 className="text-2xl font-serif text-bronze-400 mb-6 text-center">
              {t('islamPillarsTitle')}
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-effect rounded-lg p-6">
                <h5 className="text-bronze-400 font-bold mb-3">{t('prayerTitle')}</h5>
                <p className="text-bronze-200">
                  {t('prayerText')}
                </p>
              </div>
              <div className="glass-effect rounded-lg p-6">
                <h5 className="text-bronze-400 font-bold mb-3">{t('fastingTitle')}</h5>
                <p className="text-bronze-200">
                  {t('fastingText')}
                </p>
              </div>
              <div className="glass-effect rounded-lg p-6">
                <h5 className="text-bronze-400 font-bold mb-3">{t('charityTitle')}</h5>
                <p className="text-bronze-200">
                  {t('charityText')}
                </p>
              </div>
              <div className="glass-effect rounded-lg p-6">
                <h5 className="text-bronze-400 font-bold mb-3">{t('communityTitle')}</h5>
                <p className="text-bronze-200">
                  {t('communityText')}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title={t('modernWeaknessTitle')} delay={0.4}>
          <p className="text-bronze-200 text-lg mb-6">
            {t('modernWeaknessText')}
          </p>
          <div className="space-y-4">
            {(t.raw('poisonList') as string[]).map((item, i) => (
              <div key={i} className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
                <p className="text-iron-400">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="glass-effect rounded-lg p-8 my-12 metal-border">
          <h3 className="text-2xl font-serif font-bold text-bronze-400 mb-4 text-center">
            {t('finalWarningTitle')}
          </h3>
          <p className="text-bronze-200 text-lg text-center">
            {t('finalWarningText')}
          </p>
        </div>
      </Chapter>
    </SmartBookLayout>
  );
}
