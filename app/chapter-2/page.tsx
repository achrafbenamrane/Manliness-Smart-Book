'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section } from '@/components/Chapter';
import {useTranslations} from 'next-intl';

export default function Chapter2() {
  const t = useTranslations('chapter2');
  
  return (
    <SmartBookLayout currentChapter={2} totalChapters={5}>
      <Chapter
        number={2}
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
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section2Text')}
          </p>
        </Section>

        <Section title={t('section3Title')} delay={0.2}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section3Text')}
          </p>
        </Section>

        <Section title={t('section4Title')} delay={0.25}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section4Text')}
          </p>
        </Section>

        <Section title={t('section5Title')} delay={0.3}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section5Text')}
          </p>
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

        <Section title={t('section8Title')} delay={0.45}>
          <p className="text-bronze-200 text-lg leading-relaxed">
            {t('section8Text')}
          </p>
        </Section>

        <Section title={t('section9Title')} delay={0.5}>
          <p className="text-bronze-200 text-lg leading-relaxed font-semibold">
            {t('section9Text')}
          </p>
        </Section>
      </Chapter>
    </SmartBookLayout>
  );
}
