import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Technology from './pages/Technology'
import ModelMultiplexing from './pages/features/ModelMultiplexing'
import HybridTraining from './pages/features/HybridTraining'
import InferenceHA from './pages/features/InferenceHA'
import GuardrailsCompliance from './pages/features/GuardrailsCompliance'
import InstantModelDeployment from './pages/features/InstantModelDeployment'
import NeoClouds from './pages/use-cases/NeoClouds'
import PrivateEnterprise from './pages/use-cases/PrivateEnterprise'
import EdgeComputing from './pages/use-cases/EdgeComputing'
import Universities from './pages/use-cases/Universities'
import Government from './pages/use-cases/Government'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="technology" element={<Technology />} />
          <Route path="features">
            <Route path="model-multiplexing" element={<ModelMultiplexing />} />
            <Route path="hybrid-training" element={<HybridTraining />} />
            <Route path="inference-ha" element={<InferenceHA />} />
            <Route path="guardrails-compliance" element={<GuardrailsCompliance />} />
            <Route path="instant-model-deployment" element={<InstantModelDeployment />} />
          </Route>
          <Route path="use-cases">
            <Route path="neoclouds" element={<NeoClouds />} />
            <Route path="private-enterprise" element={<PrivateEnterprise />} />
            <Route path="edge-computing" element={<EdgeComputing />} />
            <Route path="universities" element={<Universities />} />
            <Route path="government" element={<Government />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
