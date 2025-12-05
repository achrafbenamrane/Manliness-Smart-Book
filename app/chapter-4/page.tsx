'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote, Comparison } from '@/components/Chapter';

export default function Chapter4() {
  return (
    <SmartBookLayout currentChapter={4} totalChapters={6}>
      <Chapter
        number={4}
        title="Rebuilding Real Manhood in 2026"
        subtitle="The Practical Path Forward"
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

        <Quote
          text="Nobody is coming to save you. No course will fix you. No guru has the answer. The only person who can rebuild you is the man in the mirror."
          author="The Final Truth"
          delay={0.4}
        />
      </Chapter>
    </SmartBookLayout>
  );
}
