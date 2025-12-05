'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote } from '@/components/Chapter';
import {useTranslations} from 'next-intl';

export default function Chapter5() {
  const t = useTranslations('chapter5');
  
  return (
    <SmartBookLayout currentChapter={5} totalChapters={5}>
      <Chapter
        number={5}
        title={t('title')}
        subtitle={t('subtitle')}
      >
        <Section title={t('honorTitle')}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('honorText1')}
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            {t('honorText2')}
          </p>
        </Section>

        <Quote
          text={t('honorQuote')}
          author={t('honorQuoteAuthor')}
          delay={0.2}
        />

        <Section title={t('lawsTitle')} delay={0.1}>
          <div className="space-y-6 my-8">
            <div className="glass-effect rounded-lg p-8 border-l-4 border-bronze-600">
              <h3 className="text-3xl font-serif font-bold text-bronze-400 mb-4">
                {t('law1Title')}
              </h3>
              <p className="text-bronze-200 text-lg mb-3">
                {t('law1Text1')}
              </p>
              <p className="text-bronze-200">
                {t('law1Text2')}
              </p>
            </div>

            <div className="glass-effect rounded-lg p-8 border-l-4 border-bronze-600">
              <h3 className="text-3xl font-serif font-bold text-bronze-400 mb-4">
                {t('law2Title')}
              </h3>
              <p className="text-bronze-200 text-lg mb-3">
                {t('law2Text1')}
              </p>
              <p className="text-bronze-200">
                {t('law2Text2')}
              </p>
            </div>

            <div className="glass-effect rounded-lg p-8 border-l-4 border-bronze-600">
              <h3 className="text-3xl font-serif font-bold text-bronze-400 mb-4">
                {t('law3Title')}
              </h3>
              <p className="text-bronze-200 text-lg mb-3">
                {t('law3Text1')}
              </p>
              <p className="text-bronze-200">
                {t('law3Text2')}
              </p>
            </div>
          </div>
        </Section>

        <Section title={t('leadershipTitle')} delay={0.2}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('leadershipText')}
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-bronze-400 font-bold text-xl mb-3">{t('falseLeadersTitle')}</h4>
              <ul className="space-y-2 text-iron-400">
                {(t.raw('falseLeadersList') as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-bronze-400 font-bold text-xl mb-3">{t('trueLeadersTitle')}</h4>
              <ul className="space-y-2 text-bronze-200">
                {(t.raw('trueLeadersList') as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Quote
          text={t('deathQuote')}
          delay={0.3}
        />

        <Section title={t('testTitle')} delay={0.3}>
          <p className="text-bronze-200 text-lg mb-6">
            {t('testText')}
          </p>
          
          <div className="glass-effect rounded-lg p-8 my-8 metal-border">
            <h4 className="text-2xl font-serif text-bronze-400 mb-6 text-center">
              {t('legacyQuestionsTitle')}
            </h4>
            <div className="space-y-4 text-bronze-200 text-lg">
              <p>
                <strong className="text-bronze-300">{t('question1')}</strong><br/>
                {t('question1Text')}
              </p>
              <p>
                <strong className="text-bronze-300">{t('question2')}</strong><br/>
                {t('question2Text')}
              </p>
              <p>
                <strong className="text-bronze-300">{t('question3')}</strong><br/>
                {t('question3Text')}
              </p>
              <p>
                <strong className="text-bronze-300">{t('question4')}</strong><br/>
                {t('question4Text')}
              </p>
              <p>
                <strong className="text-bronze-300">{t('question5')}</strong><br/>
                {t('question5Text')}
              </p>
            </div>
          </div>
        </Section>

        <Section title={t('beginningTitle')} delay={0.4}>
          <p className="text-bronze-200 text-lg mb-4">
            {t('beginningText1')}
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            {t('beginningText2')}
          </p>

          <div className="glass-effect rounded-lg p-8 my-8 metal-border">
            <h4 className="text-2xl font-serif text-bronze-400 mb-6 text-center">
              {t('choiceTitle')}
            </h4>
            <p className="text-bronze-200 text-lg mb-6 text-center">
              {t('choiceText')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
                <h5 className="text-red-400 font-bold mb-3">{t('path1Title')}</h5>
                <p className="text-iron-400">
                  {t('path1Text')}
                </p>
              </div>
              <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
                <h5 className="text-bronze-400 font-bold mb-3">{t('path2Title')}</h5>
                <p className="text-bronze-200">
                  {t('path2Text')}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <div className="glass-effect rounded-lg p-12 my-16 metal-border bg-gradient-to-br from-dark-800 to-dark-900">
          <h3 className="text-4xl font-serif font-bold text-gradient mb-6 text-center">
            {t('callTitle')}
          </h3>
          <div className="space-y-4 text-bronze-200 text-xl text-center leading-relaxed">
            <p>{t('callText1')}</p>
            <p>{t('callText2')}</p>
            <p>{t('callText3')}</p>
            <p className="text-bronze-400 font-bold text-2xl mt-6">
              {t('callQuestion')}
            </p>
          </div>
        </div>

        <div className="glass-effect rounded-lg p-10 my-12 metal-border">
          <h3 className="text-3xl font-serif font-bold text-bronze-400 mb-6 text-center">
            {t('authorTitle')}
          </h3>
          <p className="text-bronze-200 text-lg text-center whitespace-pre-line">
            {t('authorText')}
          </p>
        </div>

        <div className="glass-effect rounded-lg p-8 my-12 metal-border border-bronze-600">
          <h3 className="text-3xl font-serif font-bold text-gradient mb-4 text-center">
            {t('finalLineTitle')}
          </h3>
          <p className="text-bronze-200 text-2xl text-center italic">
            {t('finalLineText')}
          </p>
        </div>
      </Chapter>
    </SmartBookLayout>
  );
}
