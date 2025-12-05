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
          oldMen={[
            "Built businesses that employed communities",
            "Suffered in silence, celebrated in private",
            "Created value, solved problems",
            "Reputation earned over decades",
            "Legacy measured in generations"
          ]}
          modernMen={[
            "Build personal brands that employ video editors",
            "Monetize their suffering, celebrate everything publicly",
            "Create content, manufacture problems to solve",
            "Reputation rented through paid ads",
            "Legacy measured in stories that disappear in 24 hours"
          ]}
          delay={0.3}
        />

        <Section title="The Influencer Industrial Complex" delay={0.1}>
          <p className="text-bronze-200 text-lg mb-4">
            The modern fake masculinity playbook is predictable:
          </p>
          <div className="space-y-4 my-8">
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold mb-2">Step 1: Rent Success</h4>
              <p className="text-iron-400">
                Lease a supercar, book a penthouse for photos, hire models as "girlfriends." 
                Create the illusion of achievement without the years of actual work.
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold mb-2">Step 2: Manufacture Authority</h4>
              <p className="text-iron-400">
                Post generic "alpha male" quotes. Screenshot fake DMs. Buy followers and engagement. 
                Pretend everyone wants what you have.
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold mb-2">Step 3: Sell the Dream</h4>
              <p className="text-iron-400">
                Launch a course. Host a mastermind. Create a mentorship program. Charge desperate 
                young men thousands for "secrets" that are either obvious or false.
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold mb-2">Step 4: Repeat Until Exposed</h4>
              <p className="text-iron-400">
                Eventually the rented lifestyle can't be maintained. The lies catch up. But by then, 
                you've moved on to the next scheme, the next audience, the next grift.
              </p>
            </div>
          </div>
        </Section>

        <Quote
          text="A generation of men who would rather look successful than be successful. Who mistake attention for respect, and followers for friends."
          delay={0.4}
        />

        <Section title="The Victims of Fake Masculinity" delay={0.2}>
          <p className="text-bronze-200 text-lg mb-4">
            But the real tragedy isn't the grifters—every era has con men. The tragedy is the 
            young men who believe them. Who think that buying a course will fix their lives. 
            Who believe that masculinity can be purchased with a credit card.
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            These young men are searching for fathers they never had, mentors who actually care, 
            and a path to becoming something real. Instead, they find salesmen.
          </p>
        </Section>

        <div className="glass-effect rounded-lg p-8 my-12 metal-border">
          <h3 className="text-2xl font-serif font-bold text-bronze-400 mb-4 text-center">
            The Hard Truth
          </h3>
          <p className="text-bronze-200 text-lg text-center">
            If someone's main "business" is teaching others how to get rich, they're not actually rich. 
            <br/><br/>
            If someone's constantly posting about how alpha they are, they're insecure.
            <br/><br/>
            If someone needs to tell you they're a leader, they're not.
            <br/><br/>
            Real recognize real. And fake eventually falls apart.
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
