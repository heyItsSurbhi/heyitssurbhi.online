import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PreviewBanner from './PreviewBanner';
import ConnectDock from './ConnectDock';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PreviewBanner />
      <Navbar />
      <div key={location.pathname} className="page-shift">
        <Outlet />
      </div>
      <Footer />
      <ConnectDock />
    </>
  );
}
