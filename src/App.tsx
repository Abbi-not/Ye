import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="dark min-h-screen bg-background">
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              
              {/* Global trigger in header */}
              <div className="flex-1 flex flex-col">
                <header className="h-16 border-b border-sidebar-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                  <div className="flex items-center h-full px-4 sm:px-6">
                    <SidebarTrigger className="text-sidebar-foreground hover:text-sidebar-accent-foreground flex-shrink-0" />
                    <div className="ml-4 min-w-0">
                      <h1 className="text-base sm:text-lg font-semibold text-foreground truncate">Abinet Argaw</h1>
                    </div>
                  </div>
                </header>
                
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
