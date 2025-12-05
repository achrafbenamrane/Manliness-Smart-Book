'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote, Comparison } from '@/components/Chapter';

export default function Chapter1() {
  return (
    <SmartBookLayout currentChapter={1} totalChapters={6}>
      <Chapter
        number={1}
        title="Ancient Masculine Principles"
        subtitle="The Foundation of Timeless Strength"
      >
        <Section title="The Pillars of Ancient Manhood">
          <p className="text-bronze-200 text-lg mb-4">
            Before the age of social media validation, before the era of manufactured personas, 
            men were forged in the fires of reality. They built civilizations, protected their tribes, 
            and passed down wisdom through generations.
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            The ancient masculine principles weren't theories or trends—they were survival mechanisms 
            that evolved into virtues. Honor wasn't optional; it was currency. Strength wasn't vanity; 
            it was necessity.
          </p>
        </Section>

        <Quote
          text="A man's worth was measured not by his words, but by his ability to endure hardship and protect those who couldn't protect themselves."
          author="Ancient Stoic Philosophy"
          delay={0.2}
        />

        <Section title="The Four Cornerstones" delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">⚔️ Courage</h3>
              <p className="text-bronze-200">
                Not the absence of fear, but the mastery of it. Ancient warriors faced death with 
                dignity, knowing their legacy would outlive their flesh.
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">🛡️ Honor</h3>
              <p className="text-bronze-200">
                Your word was your bond. A handshake meant more than any contract. Reputation 
                was built over decades and could be lost in a moment.
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">💪 Discipline</h3>
              <p className="text-bronze-200">
                Self-mastery before mastery of others. The ability to delay gratification, 
                endure suffering, and pursue excellence without external validation.
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h3 className="text-2xl font-bold text-bronze-400 mb-3">🏛️ Wisdom</h3>
              <p className="text-bronze-200">
                Not merely knowledge, but the application of experience. Understanding 
                consequences, reading human nature, and making decisions that echo through time.
              </p>
            </div>
          </div>
        </Section>

        <Comparison
          oldMen={[
            "Built empires that lasted centuries",
            "Sacrificed comfort for legacy",
            "Mentored the next generation",
            "Earned respect through action",
            "Lived by a code bigger than themselves"
          ]}
          modernMen={[
            "Build Instagram profiles that last until the algorithm changes",
            "Sacrifice authenticity for likes",
            "Sell courses to get-rich-quick seekers",
            "Buy respect through flashy displays",
            "Live by whatever is trending this week"
          ]}
          delay={0.3}
        />

        <Section title="The Death of Initiation" delay={0.2}>
          <p className="text-bronze-200 text-lg mb-4">
            Every ancient culture had rituals that transformed boys into men. These weren't 
            participation trophies—they were trials by fire. Vision quests, warrior training, 
            tests of endurance that broke the weak and forged the strong.
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            Modern society eliminated these rites of passage, replacing them with... nothing. 
            No challenge, no transformation, no moment where society says: "You are now a man."
          </p>
          <p className="text-bronze-200 text-lg">
            And so we have 35-year-old "boys" who never faced hardship, never tested themselves, 
            never earned the title they claim by birthright.
          </p>
        </Section>

        <Section title="Algerian & Muslim Men: The Last Guardians" delay={0.3}>
          <p className="text-bronze-200 text-lg mb-4">
            While the West was busy deconstructing masculinity, Algerian men—particularly the old 
            generation—remained unshakeable pillars of traditional manhood. These men who fought 
            for independence, who built families with nothing, who commanded respect through presence alone.
          </p>
          
          <div className="glass-effect rounded-lg p-8 my-8 border-l-4 border-bronze-600">
            <h4 className="text-2xl font-serif font-bold text-bronze-400 mb-4">
              The Algerian Elder: A Study in Manhood
            </h4>
            <div className="space-y-4 text-bronze-200">
              <p>
                <strong className="text-bronze-300">Silent Strength:</strong> An Algerian grandfather 
                doesn't need to announce his authority. His children stand when he enters. His grandchildren 
                kiss his hand. His word ends discussions not because he shouts, but because he's earned that weight.
              </p>
              <p>
                <strong className="text-bronze-300">Provider Mindset:</strong> He worked jobs that would 
                break modern men—construction in the desert heat, farms from sunrise to sunset—never complaining, 
                never seeking sympathy. His family ate before he did. His comfort came last, always.
              </p>
              <p>
                <strong className="text-bronze-300">Faith as Foundation:</strong> Five prayers a day, 
                rain or shine, war or peace. His religion wasn't a weekend hobby—it was the architecture 
                of his character. Islam gave him discipline, purpose, and a code that couldn't be bought or broken.
              </p>
              <p>
                <strong className="text-bronze-300">Community Over Self:</strong> He knew every neighbor. 
                Protected widows without being asked. Mentored young men who weren't his sons. His legacy 
                wasn't in bank accounts—it was in the men he shaped.
              </p>
            </div>
          </div>

          <p className="text-bronze-200 text-lg mb-4">
            Muslim men, when they follow their faith authentically, embody principles the modern world 
            desperately needs: submission to something greater than ego, responsibility over rights, 
            duty over desire, legacy over luxury.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="glass-effect rounded-lg p-6 border-l-4 border-bronze-600">
              <h4 className="text-bronze-400 font-bold text-xl mb-3">Traditional Muslim Man</h4>
              <ul className="space-y-2 text-bronze-200">
                <li>• Prays 5 times daily—discipline before desires</li>
                <li>• Provides and protects—family comes first</li>
                <li>• Modest in success, patient in hardship</li>
                <li>• Respects elders, mentors youth</li>
                <li>• Character defined by faith, not fashion</li>
                <li>• Loyalty to God, family, community</li>
                <li>• Strength in service, honor in humility</li>
              </ul>
            </div>
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-600/60">
              <h4 className="text-red-400 font-bold text-xl mb-3">Westernized "Modern" Man</h4>
              <ul className="space-y-2 text-iron-400">
                <li>• Spiritually empty—no anchor, no purpose</li>
                <li>• Takes and consumes—family is burden</li>
                <li>• Arrogant in success, broken in hardship</li>
                <li>• Disrespects elders, corrupts youth</li>
                <li>• Character defined by trends and brands</li>
                <li>• Loyalty to whoever pays most</li>
                <li>• Weakness disguised as "authenticity"</li>
              </ul>
            </div>
          </div>

          <p className="text-bronze-200 text-lg">
            The Algerian elder, the Muslim man of faith—these aren't relics of the past. They're 
            proof that masculinity doesn't evolve or expire. True manhood is timeless because it's 
            built on eternal principles, not temporary trends.
          </p>
        </Section>

        <Quote
          text="When Western men were learning about 'toxic masculinity,' Algerian grandfathers were still building empires of character with nothing but faith, work, and honor. The old ways aren't outdated—they're bulletproof."
          delay={0.4}
        />

        <Quote
          text="In the absence of genuine challenge, men create artificial ones. But video game achievements and social media debates are not the arena where real men are made."
          author="Modern Observation"
          delay={0.4}
        />
      </Chapter>
    </SmartBookLayout>
  );
}
