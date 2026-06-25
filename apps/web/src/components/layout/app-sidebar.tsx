"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, SidebarSeparator } from "@/components/ui/sidebar";
import { Logo } from "@/components/ui/logo";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, SettingsIcon, UsersIcon, FolderIcon, MailIcon, BarChart3Icon, HelpCircleIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboardIcon,
  },
];

const secondary = [
  {
    title: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="bg-[#006020] text-white border-r border-[#006020]/20">
      <SidebarHeader className="bg-[#006020] border-b border-[#006020]/20 text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg" className="hover:bg-[#00A040]/10 text-white">
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#00A040] text-white">
                  <Logo className="size-4 fill-current" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight text-white">
                  <span className="truncate font-semibold">TAHAQAQ</span>
                  <span className="truncate text-xs text-white/60">Civic Platform</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-[#006020] text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/40">Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    className={cn(
                      "relative rounded-md transition-colors",
                      pathname === item.href 
                        ? "bg-[#00A040] text-white hover:bg-[#00A040] hover:text-white" 
                        : "text-white/80 hover:bg-[#00A040]/10 hover:text-white"
                    )}
                  >
                    <Link href={item.href} className="flex items-center gap-2 w-full">
                      <item.icon className="size-4 shrink-0 fill-current" />
                      <span>{item.title}</span>
                      {pathname === item.href && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#F2C94C] rounded-full" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-white/10" />

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {secondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    className={cn(
                      "relative rounded-md transition-colors",
                      pathname === item.href 
                        ? "bg-[#00A040] text-white hover:bg-[#00A040] hover:text-white" 
                        : "text-white/80 hover:bg-[#00A040]/10 hover:text-white"
                    )}
                  >
                    <Link href={item.href} className="flex items-center gap-2 w-full">
                      <item.icon className="size-4 shrink-0 fill-current" />
                      <span>{item.title}</span>
                      {pathname === item.href && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#F2C94C] rounded-full" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-[#006020] border-t border-[#006020]/20 text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-[#00A040]/10 text-white">
              <a 
                href="#"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#00A040]/20 text-[#F2C94C]">
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight text-white">
                  <span className="truncate font-medium">Royaume du Maroc</span>
                  <span className="truncate text-xs text-white/60">Services Publics</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
