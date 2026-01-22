import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="flex-1">
            <div className="mb-6">
              <img
                src="/images/GreenThread-logo_white@2x.png"
                alt="GreenThread"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 max-w-sm">
              Distributed AI inference at scale. Deploy anywhere, scale effortlessly.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <a
              href="mailto:sales@greenthread.ai"
              className="text-gray-400 hover:text-brand-primary transition-colors"
            >
              sales@greenthread.ai
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">&copy; 2025 GreenThread. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
