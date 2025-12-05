'use client';

import SmartBookLayout from '@/components/SmartBookLayout';
import Chapter, { Section, Quote, Comparison } from '@/components/Chapter';

export default function Chapter3() {
  return (
    <SmartBookLayout currentChapter={3} totalChapters={6}>
      <Chapter
        number={3}
        title="Modern Confusion & Fake Influencers"
        subtitle="The Age of Manufactured Masculinity"
      >
        <Section title="The Great Deception">
          <p className="text-bronze-200 text-lg mb-4">
            In 2026, masculinity has become a commodity. Rent a Lamborghini for the day, pose 
            shirtless with rented abs, film a 60-second motivation speech in a luxury hotel lobby, 
            and suddenly you're a "success coach" with a course to sell.
          </p>
          <p className="text-bronze-200 text-lg mb-4">
            This is not masculinity. This is marketing. These aren't men—they're brands. 
            And like all brands, when the money stops flowing, the facade crumbles.
          </p>
        </Section>

        <Quote
          text="When everyone is selling the dream, nobody is living it. True power doesn't need to be advertised—it's felt in presence, proven in action."
          author="Street Wisdom, 2026"
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

        <Section title="The Antidote" delay={0.3}>
          <p className="text-bronze-200 text-lg mb-4">
            Unfollow the grifters. Stop consuming motivational content and start creating actual results. 
            Find real mentors—men who've built things that last, who have families that respect them, 
            who don't need to sell you a course because they're actually busy living the life they preach.
          </p>
          <p className="text-bronze-200 text-lg">
            The path to real manhood has never changed. It's just been obscured by noise.
          </p>
        </Section>
      </Chapter>
    </SmartBookLayout>
  );
}
