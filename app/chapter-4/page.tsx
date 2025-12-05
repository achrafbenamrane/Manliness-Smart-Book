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
        <Section title="Start With Brutal Honesty">
          <p className="text-bronze-200 text-lg mb-4">
            You cannot build a foundation on lies. Before you can become the man you want to be, 
            you must face the man you currently are. No filters, no excuses, no narratives.
          </p>
          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-bronze-600">
            <h4 className="text-bronze-400 font-bold text-xl mb-4">The Assessment</h4>
            <ul className="space-y-3 text-bronze-200">
              <li>• Are you physically capable? Can you defend yourself and others?</li>
              <li>• Are you financially independent? Or one paycheck from disaster?</li>
              <li>• Are you mentally resilient? Or do minor setbacks destroy you?</li>
              <li>• Are you emotionally mature? Or ruled by impulse and ego?</li>
              <li>• Are you building something that matters? Or consuming someone else's dream?</li>
            </ul>
          </div>
        </Section>

        <Quote
          text="The first step toward becoming dangerous is admitting you're currently harmless. The first step toward strength is acknowledging weakness."
          author="Modern Stoicism"
          delay={0.2}
        />

        <Section title="The Four Pillars of Modern Masculinity" delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">💪 Physical Dominance</h3>
              <p className="text-bronze-200 mb-4">
                Not for show. For capability. Train your body to be a weapon and a tool.
              </p>
              <ul className="text-bronze-200 text-sm space-y-2">
                <li>• Lift heavy things repeatedly</li>
                <li>• Learn to fight (boxing, BJJ, wrestling)</li>
                <li>• Build endurance (run, swim, ruck)</li>
                <li>• Master your sleep, diet, discipline</li>
              </ul>
            </div>

            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">💰 Financial Freedom</h3>
              <p className="text-bronze-200 mb-4">
                Money isn't everything, but poverty is a prison. Build your economic castle.
              </p>
              <ul className="text-bronze-200 text-sm space-y-2">
                <li>• Develop high-income skills</li>
                <li>• Build multiple revenue streams</li>
                <li>• Invest in assets, not liabilities</li>
                <li>• Live below your means until you can't</li>
              </ul>
            </div>

            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">🧠 Mental Fortress</h3>
              <p className="text-bronze-200 mb-4">
                Your mind is either your greatest weapon or your worst enemy. Train it.
              </p>
              <ul className="text-bronze-200 text-sm space-y-2">
                <li>• Read philosophy (Stoics, Samurai, Warriors)</li>
                <li>• Practice meditation and breath work</li>
                <li>• Embrace discomfort deliberately</li>
                <li>• Control your emotional responses</li>
              </ul>
            </div>

            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">🎯 Purpose & Legacy</h3>
              <p className="text-bronze-200 mb-4">
                You must stand for something, or you'll fall for anything. Define your mission.
              </p>
              <ul className="text-bronze-200 text-sm space-y-2">
                <li>• Build something that outlasts you</li>
                <li>• Mentor the next generation</li>
                <li>• Protect and provide for your tribe</li>
                <li>• Live by a code you'd die to defend</li>
              </ul>
            </div>
          </div>
        </Section>

        <Comparison
          oldMen={[
            "Showed up every day, regardless of feelings",
            "Sacrificed present comfort for future strength",
            "Measured progress in years, not weeks",
            "Valued substance over appearance",
            "Built in silence, let success make noise"
          ]}
          modernMen={[
            "Show up when motivated, quit when it's hard",
            "Sacrifice future potential for instant gratification",
            "Measure progress in likes and shares",
            "Value appearance over substance",
            "Announce every small win, quit in silence"
          ]}
          delay={0.3}
        />

        <Section title="The Daily Practice" delay={0.2}>
          <p className="text-bronze-200 text-lg mb-6">
            Becoming a man isn't a destination—it's a daily practice. Here's the non-negotiable foundation:
          </p>
          
          <div className="glass-effect rounded-lg p-8 my-8 metal-border">
            <h4 className="text-2xl font-serif text-bronze-400 mb-6 text-center">
              The Warrior's Daily Routine
            </h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-bronze-300 font-bold mb-2">Morning (5:00-7:00 AM)</h5>
                <p className="text-bronze-200">
                  Wake before sunrise. No phone for first hour. Physical training. Cold shower. 
                  Plan your day like a military operation.
                </p>
              </div>
              <div>
                <h5 className="text-bronze-300 font-bold mb-2">Work Block (7:00 AM-6:00 PM)</h5>
                <p className="text-bronze-200">
                  Deep work on your mission. Build, create, solve problems. No distractions. 
                  No social media scrolling. Your legacy is built here.
                </p>
              </div>
              <div>
                <h5 className="text-bronze-300 font-bold mb-2">Evening (6:00-9:00 PM)</h5>
                <p className="text-bronze-200">
                  Skill development. Read. Train a martial art. Connect with your tribe. 
                  Review the day's victories and failures.
                </p>
              </div>
              <div>
                <h5 className="text-bronze-300 font-bold mb-2">Night (9:00-10:00 PM)</h5>
                <p className="text-bronze-200">
                  Wind down. Prepare tomorrow's battleplan. Sleep like you'll need the energy 
                  to survive a war—because you might.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Learn from Men Who Resisted" delay={0.3}>
          <p className="text-bronze-200 text-lg mb-4">
            While Western masculinity was being systematically dismantled, certain communities 
            maintained their standards. Algerian men, Muslim men worldwide—they didn't fall for 
            the propaganda because they had something stronger: faith-based identity.
          </p>

          <div className="glass-effect rounded-lg p-8 my-8 metal-border">
            <h4 className="text-2xl font-serif text-bronze-400 mb-6 text-center">
              Why Muslim Men Resisted Cultural Subversion
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-bronze-400 font-bold mb-3">🕌 Spiritual Foundation</h5>
                <p className="text-bronze-200 mb-4">
                  Islam provided an unshakeable framework. When media said "masculinity is toxic," 
                  the Quran said "men are protectors and maintainers." No debate. No confusion.
                </p>
                <p className="text-bronze-200 text-sm italic">
                  "The best of you are those who are best to their families" - Prophet Muhammad (PBUH)
                </p>
              </div>
              <div>
                <h5 className="text-bronze-400 font-bold mb-3">👴 Elder Authority</h5>
                <p className="text-bronze-200 mb-4">
                  Algerian grandfathers didn't watch Hollywood's version of masculinity. They lived it. 
                  Young men learned by example, not Netflix. Authority figures were respected, not ridiculed.
                </p>
                <p className="text-bronze-200 text-sm italic">
                  "He who does not respect the elders is not one of us" - Islamic Wisdom
                </p>
              </div>
              <div>
                <h5 className="text-bronze-400 font-bold mb-3">⚖️ Clear Roles</h5>
                <p className="text-bronze-200 mb-4">
                  No gender confusion. Men protect and provide. Women nurture and educate. 
                  Both roles honored, both essential. No competition—complementary design.
                </p>
              </div>
              <div>
                <h5 className="text-bronze-400 font-bold mb-3">🛡️ Community Defense</h5>
                <p className="text-bronze-200 mb-4">
                  Muslim communities protected their youth from cultural poison. Limited media exposure. 
                  Strong family bonds. Mosque networks. Brothers keeping brothers accountable.
                </p>
              </div>
            </div>
          </div>

          <p className="text-bronze-200 text-lg mb-4">
            This isn't about religion—it's about having a framework that can't be deconstructed by 
            trends. When your identity comes from eternal truths instead of cultural winds, you become 
            immune to propaganda.
          </p>

          <div className="glass-effect rounded-lg p-6 my-8 border-l-4 border-bronze-600">
            <h4 className="text-bronze-400 font-bold text-xl mb-4">The Algerian Model of Rebuilding</h4>
            <ol className="space-y-3 text-bronze-200">
              <li><strong>1. Faith First:</strong> Anchor your identity in something bigger than culture. 
              Whether Islamic, Christian, or philosophical—find unchangeable principles.</li>
              <li><strong>2. Respect Elders:</strong> Find older men who lived through hardship. 
              Learn from their scars, not influencers' filters.</li>
              <li><strong>3. Reject Consumption:</strong> Stop consuming Western media designed to confuse you. 
              Read books. Learn skills. Build things.</li>
              <li><strong>4. Protect the Next:</strong> Once you become strong, guard younger men from 
              the same traps. Be the elder you wish you had.</li>
              <li><strong>5. Live the Code:</strong> Don't just talk about honor and discipline—embody it. 
              Every. Single. Day.</li>
            </ol>
          </div>
        </Section>

        <Quote
          text="Nobody is coming to save you. No course will fix you. No guru has the answer. The only person who can rebuild you is the man in the mirror."
          author="The Final Truth"
          delay={0.4}
        />
      </Chapter>
    </SmartBookLayout>
  );
}
