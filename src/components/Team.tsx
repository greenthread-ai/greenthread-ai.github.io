import { motion } from 'framer-motion'
import Container from './Container'

interface TeamMember {
  name: string
  title: string
  photo: string
  quote?: string
}

interface TeamGroup {
  title: string
  members: TeamMember[]
}

interface TeamProps {
  title: string
  subtitle: string
  groups: TeamGroup[]
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {member.quote && (
          <div className="absolute inset-0 bg-brand-primary/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm text-center italic">"{member.quote}"</p>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-gray-900">{member.name}</h3>
      <p className="text-gray-600 text-sm">{member.title}</p>
    </motion.div>
  )
}

export default function Team({ title, subtitle, groups }: TeamProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16 last:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-8 text-center">{group.title}</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {group.members.map((member, memberIndex) => (
                <div key={member.name} className="w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)]">
                  <TeamCard member={member} index={memberIndex} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}
