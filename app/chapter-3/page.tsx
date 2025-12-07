'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section } from '@/components/Chapter';
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
        <Section title="">
          <p className="text-bronze-200 text-lg leading-relaxed mb-6">
            {t('introText')}
          </p>
        </Section>

        <Section title={t('section1Title')} delay={0.1}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section1Text')}
          </p>
        </Section>

        <Section title={t('section2Title')} delay={0.15}>
          <p className="text-bronze-200 text-lg leading-relaxed mb-4">
            {t('section2Intro')}
          </p>
          
          <div className="glass-effect rounded-lg p-6 mb-4 border-l-4 border-green-600/60">
            <h4 className="text-green-400 font-bold text-xl mb-3">{t('oldGamesTitle')}</h4>
            <p className="text-bronze-200 leading-relaxed">
              {t('oldGamesText')}
            </p>
          </div>

          <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
            <h4 className="text-red-400 font-bold text-xl mb-3">{t('newGamesTitle')}</h4>
            <p className="text-iron-400 leading-relaxed">
              {t('newGamesText')}
            </p>
          </div>
        </Section>

        <Section title={t('section3Title')} delay={0.2}>
          <p className="text-bronze-200 text-lg leading-relaxed mb-4">
            {t('section3Intro')}
          </p>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section3Text')}
          </p>
        </Section>

        <Section title={t('section4Title')} delay={0.25}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-effect rounded-lg p-6 border-l-4 border-green-600/60">
              <h4 className="text-green-400 font-bold text-xl mb-3">{t('oldMenTitle')}</h4>
              <ul className="text-bronze-200 space-y-2">
                {(t.raw('oldMenList') as string[]).map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-bronze-300 italic mt-4 text-sm">
                {t('oldMenFooter')}
              </p>
            </div>

            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold text-xl mb-3">{t('newMenTitle')}</h4>
              <ul className="text-iron-400 space-y-2">
                {(t.raw('newMenList') as string[]).map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-iron-300 italic mt-4 text-sm">
                {t('newMenFooter')}
              </p>
            </div>
          </div>
        </Section>

        <Section title={t('section5Title')} delay={0.3}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section5Text')}
          </p>
        </Section>

        <Section title={t('section6Title')} delay={0.35}>
          <p className="text-bronze-200 text-lg leading-relaxed font-semibold">
            {t('section6Text')}
          </p>
        </Section>
      </Chapter>
    </SmartBookLayout>
  );
}
