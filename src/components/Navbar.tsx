"use client";

export default NavigationMenuDemo;

import * as React from "react";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
// import RootLayout from './layout.tsx';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import RootLayout from "@";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo(props: any) {
  return (

    <NavigationMenu viewport={false} className="flex justify-center z-50 relative pace-x-0 cursor-pointer items-center w-full">
      <NavigationMenuList className="gap-8">
      <NavigationMenuItem className="relative z-50 hover:bg-gray-50/4 p-2 py-4 h-full rounded-lg">
        <a href='/' className="flex cursor-pointer hover:font-semibold">Home</a>
        </NavigationMenuItem>
        
        <NavigationMenuItem className="">
          
            <a href="/" className="">About</a>
          
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          
            <a href="/docs" className="">Blog</a>
          
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          
            <a href="/docs" className="">Projects</a>
          
        </NavigationMenuItem>
       
        <NavigationMenuItem>
          <NavigationMenuTrigger >Tools & Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          
            <a href="/docs" className="">Contact</a>
          
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
   
            
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  
  )
}
        
