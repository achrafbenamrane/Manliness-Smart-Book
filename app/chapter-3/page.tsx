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

        <Section title="The Media Propaganda Machine" delay={0.3}>
          <p className="text-bronze-200 text-lg mb-4">
            But the influencers are just symptoms. The real disease is deeper: a systematic propaganda 
            campaign through media to feminize, weaken, and confuse men about their identity.
          </p>
          
          <div className="space-y-6 my-8">
            <div className="glass-effect rounded-lg p-8 border-l-4 border-red-600/60">
              <h4 className="text-xl font-bold text-red-400 mb-4">🎮 VIDEO GAMES: Then vs Now</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-bronze-400 font-bold mb-2">Old Games (1990s-2000s)</h5>
                  <ul className="text-bronze-200 text-sm space-y-1">
                    <li>• Heroes were strong, decisive men</li>
                    <li>• You saved princesses, fought evil</li>
                    <li>• Rewards came from skill and mastery</li>
                    <li>• Male characters: warriors, leaders, protectors</li>
                    <li>• Clear good vs evil narratives</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-bold mb-2">New Games (2020s)</h5>
                  <ul className="text-iron-400 text-sm space-y-1">
                    <li>• Male heroes replaced or made weak</li>
                    <li>• Endless microtransactions, pay-to-win</li>
                    <li>• Addictive loops designed to waste time</li>
                    <li>• Male characters: emotional, uncertain, secondary</li>
                    <li>• Moral relativism, no clear values</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-lg p-8 border-l-4 border-red-600/60">
              <h4 className="text-xl font-bold text-red-400 mb-4">🎵 MUSIC: Then vs Now</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-bronze-400 font-bold mb-2">Old Music (70s-90s)</h5>
                  <ul className="text-bronze-200 text-sm space-y-1">
                    <li>• Lyrics about strength, struggle, meaning</li>
                    <li>• Real instruments, musical talent</li>
                    <li>• Songs about building, creating, loving</li>
                    <li>• Male artists: confident, masculine energy</li>
                    <li>• Inspired action and reflection</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-bold mb-2">New Music (2020s)</h5>
                  <ul className="text-iron-400 text-sm space-y-1">
                    <li>• Lyrics glorify drugs, materialism, betrayal</li>
                    <li>• Auto-tune replaces skill</li>
                    <li>• Songs about using, consuming, destroying</li>
                    <li>• Male artists: confused gender signals</li>
                    <li>• Promotes depression and nihilism</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-lg p-8 border-l-4 border-red-600/60">
              <h4 className="text-xl font-bold text-red-400 mb-4">🎬 MOVIES: Then vs Now</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-bronze-400 font-bold mb-2">Old Movies (80s-90s)</h5>
                  <ul className="text-bronze-200 text-sm space-y-1">
                    <li>• Male heroes solved problems through action</li>
                    <li>• Father figures were wise and strong</li>
                    <li>• Men protected families and communities</li>
                    <li>• Masculinity celebrated, not mocked</li>
                    <li>• Heroes earned respect through deeds</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-bold mb-2">New Movies (2020s)</h5>
                  <ul className="text-iron-400 text-sm space-y-1">
                    <li>• Male heroes incompetent or villains</li>
                    <li>• Fathers absent, stupid, or evil</li>
                    <li>• Men need saving by female characters</li>
                    <li>• Masculinity portrayed as toxic</li>
                    <li>• Male characters are jokes or threats</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="text-bronze-200 text-lg mt-8 mb-4">
            This isn't evolution—it's deliberate programming. Three generations exposed to media 
            that tells them: being a strong man is bad, protecting is oppression, leadership is 
            tyranny, and traditional masculinity is toxic.
          </p>
        </Section>

        <Quote
          text="When a society systematically attacks masculinity in every form of media, don't be surprised when you end up with broken, confused, weak men. This is the intended result."
          delay={0.4}
        />

        <Section title="The Antidote" delay={0.5}>
          <p className="text-bronze-200 text-lg mb-4">
            Unfollow the grifters. Stop consuming modern propaganda disguised as entertainment. 
            Find real mentors—men who've built things that last, who have families that respect them, 
            who don't need to sell you a course because they're actually busy living the life they preach.
          </p>
          <p className="text-bronze-200 text-lg">
            The path to real manhood has never changed. It's just been obscured by noise and 
            deliberate cultural subversion.
          </p>
        </Section>
      </Chapter>
    </SmartBookLayout>
  );
}
