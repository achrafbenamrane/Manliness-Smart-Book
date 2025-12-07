'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section } from '@/components/Chapter';
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
        <Section title="">
          <p className="text-bronze-200 text-lg leading-relaxed mb-4">
            {t('introText')}
          </p>
          <p className="text-bronze-200 text-lg leading-relaxed font-semibold">
            {t('warningText')}
          </p>
        </Section>

        <Section title={t('section1Title')} delay={0.1}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section1Text')}
          </p>
        </Section>

        <Section title={t('section2Title')} delay={0.15}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section2Text')}
          </p>
        </Section>

        <Section title={t('section3Title')} delay={0.2}>
          <p className="text-bronze-200 text-lg leading-relaxed mb-4 italic">
            {t('section3Intro')}
          </p>
          <p className="text-bronze-200 text-lg leading-relaxed mb-4">
            {t('section3Text')}
          </p>
          <div className="glass-effect rounded-lg p-6 border-l-4 border-green-600/60">
            <p className="text-green-300 leading-relaxed">
              {t('section3Footer')}
            </p>
          </div>
        </Section>

        <Section title={t('section4Title')} delay={0.25}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section4Text')}
          </p>
        </Section>

        <Section title={t('section5Title')} delay={0.3}>
          <p className="text-bronze-200 text-lg leading-relaxed mb-4 italic">
            {t('section5Intro')}
          </p>
          <p className="text-bronze-200 text-lg leading-relaxed mb-6">
            {t('section5Text')}
          </p>
          
          <div className="glass-effect rounded-lg p-8 border-l-4 border-bronze-600">
            <h4 className="text-bronze-400 font-bold text-xl mb-4">{t('islamDisciplineTitle')}</h4>
            <ul className="space-y-2 text-bronze-200">
              {(t.raw('islamDisciplineList') as string[]).map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-bronze-300 mt-6 italic">
              {t('disciplineFooter')}
            </p>
          </div>
        </Section>

        <Section title={t('section6Title')} delay={0.35}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section6Text')}
          </p>
        </Section>

        <Section title={t('section7Title')} delay={0.4}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section7Text')}
          </p>
        </Section>

        <Section title="" delay={0.45}>
          <div className="glass-effect rounded-lg p-8 mb-6 metal-border">
            <p className="text-bronze-200 text-lg leading-relaxed">
              {t('conclusionText')}
            </p>
          </div>
          
          <div className="glass-effect rounded-lg p-8 border-l-4 border-red-600/60">
            <p className="text-bronze-100 text-lg leading-relaxed font-bold">
              {t('finalCallText')}
            </p>
          </div>
        </Section>
      </Chapter>
    </SmartBookLayout>
  );
}
