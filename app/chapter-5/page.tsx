'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote } from '@/components/Chapter';

export default function Chapter5() {
  return (
    <SmartBookLayout currentChapter={5} totalChapters={6}>
      <Chapter
        number={5}
        title="The Path of Honor: Final Chapter"
        subtitle="Legacy, Leadership, and Living with Purpose"
      >
        <Section title="What Is Honor in 2026?">
          <p className="text-bronze-200 text-lg mb-4">
            Honor is an ancient concept that modern society has forgotten. It's not about being 
            perfect—it's about being consistent. It's about saying what you mean and meaning what you say. 
            It's about being the same person in public as you are in private.
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            In an age where everyone wears a mask, where authenticity is performed rather than lived, 
            honor is revolutionary. It's the willingness to lose opportunities rather than compromise your code.
          </p>
        </Section>

        <Quote
          text="Honor is not negotiable. The moment you compromise it for convenience, you've lost the only thing that truly belonged to you."
          author="The Warrior's Code"
          delay={0.2}
        />

        <Section title="The Three Laws of Honor" delay={0.1}>
          <div className="space-y-6 my-8">
            <div className="glass-effect rounded-lg p-8 border-l-4 border-bronze-600">
              <h3 className="text-3xl font-serif font-bold text-bronze-400 mb-4">
                I. Speak Truth, Face Consequences
              </h3>
              <p className="text-bronze-200 text-lg mb-3">
                Lying is the weapon of the weak. Even when truth costs you, speak it. Your word 
                must be an unbreakable bond.
              </p>
              <p className="text-bronze-200">
                This doesn't mean brutal honesty without wisdom. It means never deceiving for personal gain, 
                never misleading those who trust you, never building your empire on falsehoods.
              </p>
            </div>

            <div className="glass-effect rounded-lg p-8 border-l-4 border-bronze-600">
              <h3 className="text-3xl font-serif font-bold text-bronze-400 mb-4">
                II. Protect the Vulnerable
              </h3>
              <p className="text-bronze-200 text-lg mb-3">
                Strength without compassion is tyranny. Your power exists to shield those who cannot 
                shield themselves.
              </p>
              <p className="text-bronze-200">
                This is not weakness—it's the highest expression of strength. The strong man who uses 
                his power to prey on the weak is not a man at all. He's a coward with muscles.
              </p>
            </div>

            <div className="glass-effect rounded-lg p-8 border-l-4 border-bronze-600">
              <h3 className="text-3xl font-serif font-bold text-bronze-400 mb-4">
                III. Leave It Better Than You Found It
              </h3>
              <p className="text-bronze-200 text-lg mb-3">
                Your legacy is not what you accumulated—it's what you left behind. Every interaction, 
                every project, every relationship: did you add value or extract it?
              </p>
              <p className="text-bronze-200">
                The honorable man plants trees he'll never sit under. He builds institutions that outlast 
                him. He mentors young men who will surpass him. His ego dies so his impact can live forever.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Leadership: The Burden of Honor" delay={0.2}>
          <p className="text-bronze-200 text-lg mb-4">
            True leaders don't seek followers—they develop other leaders. They don't hoard knowledge—they 
            share it freely. They don't demand respect—they earn it through consistent action.
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-bronze-400 font-bold text-xl mb-3">False Leaders</h4>
              <ul className="space-y-2 text-iron-400">
                <li>• Lead from behind, blame from the front</li>
                <li>• Take credit, deflect responsibility</li>
                <li>• Build cults of personality</li>
                <li>• Create dependency, not capability</li>
                <li>• Seek power for its own sake</li>
              </ul>
            </div>
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-bronze-400 font-bold text-xl mb-3">True Leaders</h4>
              <ul className="space-y-2 text-bronze-200">
                <li>• Lead from the front, protect from behind</li>
                <li>• Give credit, accept responsibility</li>
                <li>• Build teams of equals</li>
                <li>• Create independence, not followers</li>
                <li>• Seek impact for its own sake</li>
              </ul>
            </div>
          </div>
        </Section>

        <Quote
          text="A man who dies having built nothing, taught no one, and improved nothing is worse than dead—he never truly lived."
          delay={0.3}
        />

        <Section title="The Final Test" delay={0.3}>
          <p className="text-bronze-200 text-lg mb-6">
            Here is how you measure whether you've walked the path of honor:
          </p>
          
          <div className="glass-effect rounded-lg p-8 my-8 metal-border">
            <h4 className="text-2xl font-serif text-bronze-400 mb-6 text-center">
              The Legacy Questions
            </h4>
            <div className="space-y-4 text-bronze-200 text-lg">
              <p>
                <strong className="text-bronze-300">If you died tomorrow:</strong><br/>
                Would anyone other than your family genuinely mourn?
              </p>
              <p>
                <strong className="text-bronze-300">If your children became exactly like you:</strong><br/>
                Would the world be better or worse?
              </p>
              <p>
                <strong className="text-bronze-300">If everyone knew your private life:</strong><br/>
                Would your public reputation survive?
              </p>
              <p>
                <strong className="text-bronze-300">If you lost everything material:</strong><br/>
                Who would you be without the props?
              </p>
              <p>
                <strong className="text-bronze-300">If you met your 80-year-old self:</strong><br/>
                Would he be proud or disappointed?
              </p>
            </div>
          </div>
        </Section>

        <Section title="The Beginning, Not the End" delay={0.4}>
          <p className="text-bronze-200 text-lg mb-4">
            This book isn't a destination—it's a map. The journey of becoming a man of honor is 
            lifelong, filled with failure and victory in equal measure.
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            You will fall. You will compromise. You will take the easy path when you should take 
            the right one. This is guaranteed. What separates honorable men from the rest is simple: 
            they get back up, they admit their failures, and they try again.
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            The old men we admire weren't perfect. They were persistent. They didn't avoid failure—they 
            learned from it. They didn't achieve honor in a moment—they chose it every single day.
          </p>
        </Section>

        <div className="glass-effect rounded-lg p-12 my-16 metal-border bg-gradient-to-br from-dark-800 to-dark-900">
          <h3 className="text-4xl font-serif font-bold text-gradient mb-6 text-center">
            The Final Message
          </h3>
          <p className="text-bronze-200 text-xl text-center leading-relaxed">
            You are not here by accident. You were meant to read these words. 
            The path is clear. The choice is yours.
            <br/><br/>
            Will you be another fake modern man, performing masculinity for an audience?
            <br/>
            Or will you walk the ancient path, building something real that outlasts you?
            <br/><br/>
            <span className="text-bronze-400 font-bold text-2xl">
              The world needs real men again.
            </span>
            <br/>
            <span className="text-bronze-300 text-lg">
              Will you answer the call?
            </span>
          </p>
        </div>

        <Quote
          text="In the end, the only question that matters: Did you live with honor? Everything else is noise."
          delay={0.5}
        />
      </Chapter>
    </SmartBookLayout>
  );
}
