import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import WhatsAppBot from "@/pages/WhatsAppBot";
import Digiflazz from "@/pages/Digiflazz";
import CaraKerja from "@/pages/CaraKerja";
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  // Auto scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main className="pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/whatsapp-bot" component={WhatsAppBot} />
          <Route path="/digiflazz" component={Digiflazz} />
          <Route path="/cara-kerja" component={CaraKerja} />
          <Route path="/pricing" component={Pricing} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
