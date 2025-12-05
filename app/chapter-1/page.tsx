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

        <Quote
          text="In the absence of genuine challenge, men create artificial ones. But video game achievements and social media debates are not the arena where real men are made."
          author="Modern Observation"
          delay={0.4}
        />
      </Chapter>
    </SmartBookLayout>
  );
}
