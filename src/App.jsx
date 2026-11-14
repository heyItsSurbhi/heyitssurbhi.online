import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './theme';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Engagement from './pages/Engagement';
import NotFound from './pages/NotFound';
import { engagements } from './data/engagements';

function WorkDetail() {
  const { slug } = useParams();
  if (engagements.some((item) => item.slug === slug)) return <Engagement />;
  return <CaseStudy />;
}

export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/experience" element={<Navigate to="/#experience" replace />} />
          <Route path="/skills" element={<Navigate to="/#skills" replace />} />
          <Route path="/education" element={<Navigate to="/#education" replace />} />
          <Route path="/work" element={<Navigate to="/#work" replace />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}
