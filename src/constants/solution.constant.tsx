import {
  LayoutGrid,
  ShieldCheck,
  Layers,
  MessageSquare,
  Zap,
  UserPlus,
  UserCog,
} from "lucide-react";

export const FEATURES = [
  {
    number: "01",
    title: "One Workspace. Every Board Organized.",
    subtitle: "Create focused boards for every project, client, or idea.",
    description:
      "Admins can create, rename, archive, move to trash, or permanently delete boards — keeping workspaces clean and intentional.",
    bullets: [
      "Create boards with custom names & emojis",
      "Edit or move boards to trash anytime",
      "Permanently delete when work is done",
      "Clean structure, zero clutter",
    ],
    tagline: "No more messy folders. No more lost discussions.",
    icon: <LayoutGrid size={22} strokeWidth={1.8} />,
  },
  {
    number: "02",
    title: "Smart Role-Based Access",
    subtitle: "Not everyone should edit everything.",
    description:
      "SwiftBoard gives you complete control with Admin, Editor, and Viewer roles — so collaboration stays structured.",
    bullets: [
      "Admins manage boards & members",
      "Editors add and modify content",
      "Viewers stay informed without changing anything",
      "Roles can be updated anytime",
    ],
    tagline: "Collaboration with clarity and control.",
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
  },
  {
    number: "03",
    title: "Rich Content — All In One Place",
    subtitle: "Add everything your project needs inside a board.",
    description:
      "Text, links, videos, images, recordings, documents — all organized together so context is never lost.",
    bullets: [
      "Multimedia support",
      "Structured content inside boards",
      "No switching between apps",
      "Everything connected to one discussion",
    ],
    tagline: "Ideas stay where they belong.",
    icon: <Layers size={22} strokeWidth={1.8} />,
  },
  {
    number: "04",
    title: "Built-In Board Messaging",
    subtitle: "Discuss directly inside each board.",
    description:
      "Anyone in the board can message, share content from the board into chat, and collaborate in real time — without jumping to another tool.",
    bullets: [
      "Context-based chat",
      "Share board content instantly",
      "Messages always connected to the project",
    ],
    tagline: "Communication without fragmentation.",
    icon: <MessageSquare size={22} strokeWidth={1.8} />,
  },
  {
    number: "05",
    title: "Real-Time Activity & Live Updates",
    subtitle: "Know exactly what's happening — instantly.",
    description:
      "SwiftBoard's Activity section tracks all board updates. Latest messages automatically rise to the top using real-time sockets.",
    bullets: [
      "Live updates",
      "Filter by board name, user, type, or date",
      "Track edits, uploads, and messages",
      "Never miss important changes",
    ],
    tagline: "Visibility replaces confusion.",
    icon: <Zap size={22} strokeWidth={1.8} />,
  },
  {
    number: "06",
    title: "Seamless Member Management",
    subtitle: "Invite teammates with full control.",
    description:
      "Admins can assign members as Editors or Viewers. If they already use SwiftBoard — they're added instantly. If not — they receive an invite and auto-join when they sign up.",
    bullets: [
      "Smart invite system",
      "Pending invites by email",
      "Auto-join after signup",
      "Change roles anytime",
    ],
    tagline: "Onboarding without friction.",
    icon: <UserPlus size={22} strokeWidth={1.8} />,
  },
  {
    number: "07",
    title: "Complete Profile & Account Control",
    subtitle: "Users stay in control of their experience.",
    description:
      "Update profile details, manage password, view trash, access help resources, or delete account — all in one place.",
    bullets: [
      "Update name, email, image",
      "Secure password management",
      "Trash box access",
      "Help & resources",
      "Account deletion option",
    ],
    tagline: "Simple. Transparent. User-first.",
    icon: <UserCog size={22} strokeWidth={1.8} />,
  },
];
