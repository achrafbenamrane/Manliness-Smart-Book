'use client';

import { useTranslations } from 'next-intl';
import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section } from '@/components/Chapter';

export default function Chapter5() {
  const t = useTranslations('chapter5');

  return (
    <SmartBookLayout currentChapter={5} totalChapters={5}>
      <Chapter
        number={5}
        title={t('title')}
        subtitle={t('subtitle')}
      >
        {/* Introduction - Who I Am */}
        <Section title={t('introTitle')} delay={0.2}>
          <p className="text-lg leading-relaxed">
            {t('introText')}
          </p>
        </Section>

        {/* Honesty - My Truth */}
        <Section title={t('honestyTitle')} delay={0.3}>
          <p className="text-lg leading-relaxed">
            {t('honestyText')}
          </p>
        </Section>

        {/* Why I Wrote This */}
        <Section title={t('whyTitle')} delay={0.4}>
          <p className="text-lg leading-relaxed">
            {t('whyText')}
          </p>
        </Section>

        {/* Our Heritage */}
        <Section title={t('heritageTitle')} delay={0.5}>
          <p className="text-lg leading-relaxed">
            {t('heritageText')}
          </p>
        </Section>

        {/* Not Preaching */}
        <Section title={t('notPreachingTitle')} delay={0.6}>
          <p className="text-lg leading-relaxed">
            {t('notPreachingText')}
          </p>
        </Section>

        {/* If This Book Moved You */}
        <Section title={t('ifThisBookTitle')} delay={0.7}>
          <p className="text-lg leading-relaxed">
            {t('ifThisBookText')}
          </p>
        </Section>

        {/* Now Stand Up */}
        <Section title={t('standUpTitle')} delay={0.8}>
          <p className="text-lg leading-relaxed">
            {t('standUpText')}
          </p>
        </Section>

        {/* Final Message - Man to Man */}
        <Section title={t('finalMessageTitle')} delay={0.9}>
          <p className="text-lg leading-relaxed mb-6">
            {t('finalMessageText')}
          </p>
        </Section>

        {/* Walk as a Man */}
        <Section title={t('walkTitle')} delay={1.0}>
          <p className="text-lg leading-relaxed">
            {t('walkText')}
          </p>
        </Section>

        {/* Go. Not gently. Not slowly. */}
        <Section title={t('goTitle')} delay={1.1}>
          <p className="text-lg leading-relaxed">
            {t('goText')}
          </p>
        </Section>

        {/* Thank You, Brother */}
        <Section title={t('thankYouTitle')} delay={1.2}>
          <p className="text-lg leading-relaxed">
            {t('thankYouText')}
          </p>
        </Section>

        {/* Final Line - Forward, brother. Always forward. */}
        <div className="mt-12 p-8 rounded-lg border-2 border-bronze-400/60 bg-gradient-to-br from-bronze-900/30 to-iron-900/30 backdrop-blur-sm">
          <p className="text-2xl font-bold text-center text-bronze-400 tracking-wide">
            {t('forwardText')}
          </p>
        </div>
      </Chapter>
    </SmartBookLayout>
  );
}
