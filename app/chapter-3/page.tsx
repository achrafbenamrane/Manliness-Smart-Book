'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote, Comparison } from '@/components/Chapter';
import {useTranslations} from 'next-intl';

export default function Chapter3() {
  const t = useTranslations('chapter3');
  
  return (
    <SmartBookLayout currentChapter={3} totalChapters={5}>
      <Chapter
        number={3}
        title={t('title')}
        subtitle={t('subtitle')}
      >
        <Section title={t('deceptionTitle')}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('deceptionText')}
          </p>
        </Section>

        <Section title={t('influencerTitle')} delay={0.1}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('influencerText')}
          </p>
        </Section>

        <Quote
          text={t('influencerQuote')}
          delay={0.2}
        />

        <Comparison
          oldMen={t.raw('comparisonOldMen')}
          modernMen={t.raw('comparisonModernMen')}
          delay={0.3}
        />

        <Section title={t('complexTitle')} delay={0.1}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('complexText')}
          </p>
          <div className="space-y-4 my-8">
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold mb-2">{t('step1Title')}</h4>
              <p className="text-iron-400">
                {t('step1Text')}
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold mb-2">{t('step2Title')}</h4>
              <p className="text-iron-400">
                {t('step2Text')}
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold mb-2">{t('step3Title')}</h4>
              <p className="text-iron-400">
                {t('step3Text')}
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold mb-2">{t('step4Title')}</h4>
              <p className="text-iron-400">
                {t('step4Text')}
              </p>
            </div>
          </div>
        </Section>

        <Quote
          text={t('fakeQuote')}
          delay={0.4}
        />

        <Section title={t('victimsTitle')} delay={0.2}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('victimsText1')}
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            {t('victimsText2')}
          </p>
        </Section>

        <div className="glass-effect rounded-lg p-8 my-12 metal-border">
          <h3 className="text-2xl font-serif font-bold text-bronze-400 mb-4 text-center">
            {t('truthTitle')}
          </h3>
          <p className="text-bronze-200 text-lg text-center whitespace-pre-line">
            {t('truthText')}
          </p>
        </div>

        <Section title={t('propagandaTitle')} delay={0.3}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('propagandaText')}
          </p>
          
          <div className="space-y-6 my-8">
            <div className="glass-effect rounded-lg p-8 border-l-4 border-red-600/60">
              <h4 className="text-xl font-bold text-red-400 mb-4">{t('gamesTitle')}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-bronze-400 font-bold mb-2">{t('gamesOld')}</h5>
                  <ul className="text-bronze-200 text-sm space-y-1">
                    {(t.raw('gamesOldList') as string[]).map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-bold mb-2">{t('gamesNew')}</h5>
                  <ul className="text-iron-400 text-sm space-y-1">
                    {(t.raw('gamesNewList') as string[]).map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-lg p-8 border-l-4 border-red-600/60">
              <h4 className="text-xl font-bold text-red-400 mb-4">{t('musicTitle')}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-bronze-400 font-bold mb-2">{t('musicOld')}</h5>
                  <ul className="text-bronze-200 text-sm space-y-1">
                    {(t.raw('musicOldList') as string[]).map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-bold mb-2">{t('musicNew')}</h5>
                  <ul className="text-iron-400 text-sm space-y-1">
                    {(t.raw('musicNewList') as string[]).map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-lg p-8 border-l-4 border-red-600/60">
              <h4 className="text-xl font-bold text-red-400 mb-4">{t('moviesTitle')}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-bronze-400 font-bold mb-2">{t('moviesOld')}</h5>
                  <ul className="text-bronze-200 text-sm space-y-1">
                    {(t.raw('moviesOldList') as string[]).map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-bold mb-2">{t('moviesNew')}</h5>
                  <ul className="text-iron-400 text-sm space-y-1">
                    {(t.raw('moviesNewList') as string[]).map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Chapter>
    </SmartBookLayout>
  );
}
