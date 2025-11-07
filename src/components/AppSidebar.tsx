import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Disc3, 
  ListMusic, 
  User, 
  Calendar,
  Play,
  Heart,
  Search,
  Library
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  { title: "Home", url: "#now-playing", icon: Home },
  { title: "About", url: "#about", icon: User },
  { title: "Recent Work", url: "#albums", icon: Disc3 },
  { title: "Skills", url: "#genres", icon: ListMusic },
  { title: "Contact", url: "#contact", icon: Calendar },
];

const libraryItems = [
  { title: "Liked Projects", icon: Heart },
  { title: "Recent Work", icon: Play },
  { title: "Following", icon: Library },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNavClass = () => "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-4 py-3">
          {!collapsed && (
            <>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="text-sidebar-accent-foreground font-bold text-lg">
                Portfolio
              </span>
            </>
          )}
          {collapsed && (
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Play className="w-4 h-4 text-primary-foreground fill-current" />
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    className={`h-10 ${getNavClass()}`}
                    onClick={() => scrollToSection(item.url)}
                  >
                    <item.icon className="w-5 h-5" />
                    {!collapsed && <span className="ml-3">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="text-sidebar-foreground text-xs font-bold uppercase tracking-widest px-3 mb-2">
              Your Library
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {libraryItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className="h-10 text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground">
                      <item.icon className="w-5 h-5" />
                      <span className="ml-3">{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}