import { Helmet } from 'react-helmet-async'
import { Hero, CTA, Container } from '../../components'

export default function HybridTraining() {
  return (
    <>
      <Helmet>
        <title>Hybrid Training - GreenThread</title>
        <meta name="description" content="Train and fine-tune models across distributed GPU resources with seamless hybrid capabilities." />
      </Helmet>

      <Hero
        title={
          <>
            Hybrid <span className="italic font-normal">Training</span>
          </>
        }
        subtitle="Train and fine-tune models across distributed GPU resources. Seamlessly combine cloud, on-premise, and edge compute for optimal training efficiency."
      />

      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our hybrid training capabilities are currently in development. Contact our sales team to learn more about our roadmap and early access programs.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        title="Interested in hybrid training?"
        subtitle="Get in touch to discuss your training requirements and learn about our upcoming capabilities."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
