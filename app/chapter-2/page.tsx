'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote, Comparison } from '@/components/Chapter';
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
        <Section title={t('warriorTitle')}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('warriorText')}
          </p>
        </Section>

        <Section title={t('romanTitle')} delay={0.1}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('romanText')}
          </p>
        </Section>

        <Quote
          text={t('romanQuote')}
          author={t('romanQuoteAuthor')}
          delay={0.2}
        />

        <Section title={t('strengthTitle')} delay={0.1}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('strengthText')}
          </p>
          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-bronze-600">
            <h3 className="text-2xl font-bold text-bronze-400 mb-4">{t('ironTruthTitle')}</h3>
            <p className="text-bronze-200 text-lg mb-3">
              {t('ironTruthText1')}
            </p>
            <p className="text-bronze-200 text-lg">
              {t('ironTruthText2')}
            </p>
          </div>
        </Section>

        <Comparison
          oldMen={t.raw('comparisonOldMen')}
          modernMen={t.raw('comparisonModernMen')}
          delay={0.3}
        />

        <Section title={t('dailyPracticeTitle')} delay={0.2}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('dailyPracticeText')}
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🌅</div>
              <h4 className="text-bronze-400 font-bold mb-2">{t('morningRitual')}</h4>
              <p className="text-bronze-200 text-sm">
                {t('morningRitualText')}
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">⚔️</div>
              <h4 className="text-bronze-400 font-bold mb-2">{t('dailyTraining')}</h4>
              <p className="text-bronze-200 text-sm">
                {t('dailyTrainingText')}
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-bronze-400 font-bold mb-2">{t('eveningStudy')}</h4>
              <p className="text-bronze-200 text-sm">
                {t('eveningStudyText')}
              </p>
            </div>
          </div>
        </Section>

        <Quote
          text={t('warriorQuote')}
          author={t('warriorQuoteAuthor')}
          delay={0.4}
        />

        <Section title={t('brotherhoodTitle')} delay={0.3}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('brotherhoodText1')}
          </p>
          <p className="text-bronze-200 text-lg">
            {t('brotherhoodText2')}
          </p>
        </Section>

        <Section title={t('mujahideenTitle')} delay={0.4}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('mujahideenText')}
          </p>

          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-bronze-600">
            <h4 className="text-2xl font-serif font-bold text-bronze-400 mb-4">
              {t('faithWarrior')}
            </h4>
            <p className="text-bronze-200">
              {t('faithWarriorText')}
            </p>
          </div>

          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-bronze-600">
            <h4 className="text-2xl font-serif font-bold text-bronze-400 mb-4">
              {t('disciplineTitle')}
            </h4>
            <p className="text-bronze-200">
              {t('disciplineText')}
            </p>
          </div>
        </Section>
      </Chapter>
    </SmartBookLayout>
  );
}
