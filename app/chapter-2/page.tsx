'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote, Comparison } from '@/components/Chapter';

export default function Chapter2() {
  return (
    <SmartBookLayout currentChapter={2} totalChapters={6}>
      <Chapter
        number={2}
        title="Warrior Discipline & Old Strength"
        subtitle="The Forge of True Masculinity"
      >
        <Section title="The Warrior's Path">
          <p className="text-bronze-200 text-lg mb-4">
            Throughout history, the warrior archetype represented the pinnacle of masculine 
            development. Not because of violence, but because warriors embodied the highest 
            standards of self-discipline, loyalty, and sacrifice.
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            The Spartans, the Samurai, the Roman Legionnaires, the Viking Berserkers—different 
            cultures, same core principles: Train hard. Honor your brothers. Die well if necessary.
          </p>
        </Section>

        <Quote
          text="The more you sweat in training, the less you bleed in battle. This principle applies to every arena of life."
          author="Ancient Military Wisdom"
          delay={0.2}
        />

        <Section title="Physical Strength as Metaphor" delay={0.1}>
          <p className="text-bronze-200 text-lg mb-4">
            Old men understood that building physical strength wasn't about vanity or aesthetics. 
            It was about capability. Could you protect your family? Build shelter? Work the land? 
            Survive hardship?
          </p>
          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-bronze-600">
            <h3 className="text-2xl font-bold text-bronze-400 mb-4">The Iron Truth</h3>
            <p className="text-bronze-200 text-lg mb-3">
              The barbell doesn't care about your feelings. The heavy stone doesn't negotiate. 
              Either you're strong enough to lift it, or you're not.
            </p>
            <p className="text-bronze-200 text-lg">
              This brutal honesty—this immediate feedback—is precisely what modern men avoid. 
              They seek comfort, not challenge. Validation, not victory.
            </p>
          </div>
        </Section>

        <Comparison
          oldMen={[
            "Trained their bodies as tools for survival",
            "Endured pain without complaint",
            "Built calluses, both physical and mental",
            "Defined by what they could do, not how they looked",
            "Strength was functional, earned, necessary"
          ]}
          modernMen={[
            "Train their angles for the perfect gym selfie",
            "Quit when it gets uncomfortable",
            "Build Instagram highlights",
            "Defined by aesthetics and brand partnerships",
            "Strength is performative, rented, optional"
          ]}
          delay={0.3}
        />

        <Section title="Discipline: The Daily Practice" delay={0.2}>
          <p className="text-bronze-200 text-lg mb-4">
            Warriors didn't train when they felt like it. They trained when they were tired, 
            injured, scared, and doubting. They trained because discipline is what separates 
            the warrior from the wanderer.
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🌅</div>
              <h4 className="text-bronze-400 font-bold mb-2">Morning Ritual</h4>
              <p className="text-bronze-200 text-sm">
                Rise before the sun. Train your body. Sharpen your mind. Own the day.
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">⚔️</div>
              <h4 className="text-bronze-400 font-bold mb-2">Daily Training</h4>
              <p className="text-bronze-200 text-sm">
                Physical prowess, mental fortitude, skill refinement. No days off.
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-bronze-400 font-bold mb-2">Evening Study</h4>
              <p className="text-bronze-200 text-sm">
                Reflect on the day. Learn from elders. Plan tomorrow's battles.
              </p>
            </div>
          </div>
        </Section>

        <Quote
          text="The warrior's greatest battle is fought within. Every day you choose discipline over comfort, you win. Every day you choose comfort, the enemy advances."
          author="Bushido Code, Modernized"
          delay={0.4}
        />

        <Section title="Brotherhood Over Ego" delay={0.3}>
          <p className="text-bronze-200 text-lg mb-4">
            Ancient warriors understood that individual glory meant nothing if your brothers fell. 
            The Roman shield wall worked because each man protected the man beside him. The Spartan 
            phalanx was unbreakable because no one wanted to be the weak link.
          </p>
          <p className="text-bronze-200 text-lg">
            Modern "warriors" compete on social media, tear each other down for clout, and celebrate 
            other men's failures. They mistake attention for respect, and followers for brothers.
          </p>
        </Section>
      </Chapter>
    </SmartBookLayout>
  );
}
