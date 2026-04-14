import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BusinessServices from "./pages/BusinessServices";
import PersonalServices from "./pages/PersonalServices";
import WhyImatec from "./pages/WhyImatec";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import FloatingSupport from "./components/FloatingSupport";

// SEO-friendly URL structure:
// /it-support-matamata-tauranga        → Business IT Services
// /computer-repairs-matamata-tauranga  → Personal / Home Repairs
// /why-choose-imatec                   → Why Imatec (trust/brand)
// /computer-repair-shop-matamata       → Locations
// /contact-imatec-it-support           → Contact Us

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* SEO keyword URLs */}
      <Route path="/it-support-matamata-tauranga" component={BusinessServices} />
      <Route path="/computer-repairs-matamata-tauranga" component={PersonalServices} />
      <Route path="/why-choose-imatec" component={WhyImatec} />
      <Route path="/computer-repair-shop-matamata" component={Locations} />
      <Route path="/contact-imatec-it-support" component={Contact} />
      {/* Legacy redirects — keep old URLs working */}
      <Route path="/business-services" component={BusinessServices} />
      <Route path="/personal-services" component={PersonalServices} />
      <Route path="/why-imatec" component={WhyImatec} />
      <Route path="/locations" component={Locations} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <FloatingSupport />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
