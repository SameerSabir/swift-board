import {
  LayoutGrid,
  ShieldCheck,
  Layers,
  MessageSquare,
  Zap,
  UserPlus,
  UserCog,
} from "lucide-react";
import { b } from "motion/react-client";

export const FEATURES = [
  {
    number: "01",
    title: "One Workspace. Every Board Organized.",
    subtitle: "Create focused boards for every project, client, or idea.",
    description:
      "Admins can create, rename, archive, move boards to trash, or permanently delete them — keeping the workspace clean and organized as projects evolve.",
    bulletsheading:"Create boards with custom names & emojis",
    bullets: [
      "Edit board details anytime",
      "Move inactive boards to trash",
      "Permanently delete when work is complete",
      "Maintain a clean and distraction-free workspace",
    ],
    tagline: "No more messy folders. No more lost discussions.",
    icon: <LayoutGrid size={22} strokeWidth={1.8} />,
  },
  {
    number: "02",
    title: "Controlled Collaboration & Member Management",
    subtitle: "Not everyone should edit everything. SwiftBoard gives you full control over who can access and contribute to each board.",
    description:
      "Admins can invite members, assign roles, and manage permissions so collaboration stays organized and secure.",
      bulletsheading:"Admins manage boards and team members",
    bullets: [
      "Editors add and modify board content",
      "Viewers stay informed without editing",
      "Invite teammates with email-based access",
      "Pending members auto-join after signup",
      "Roles can be updated anytime",
    ],
    tagline: "Structured collaboration without confusion.",
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
  },
  {
    number: "03",
    title: "Rich Content — All In One Place",
    subtitle: "Bring everything your project needs into one organized board.",
    description:
      "From quick notes to important resources, SwiftBoard keeps all content connected so nothing gets lost.",
        bulletsheading:"Add text notes, links, and references",
    bullets: [
      "Upload images, videos, and documents",
      "Record and share audio directly in boards",
      "Keep all project materials in one place",
      "No switching between multiple apps",
    ],
    tagline: "Everything your team needs — organized together.",
    icon: <Layers size={22} strokeWidth={1.8} />,
  },
  {
    number: "04",
    title: "Built-In Messaging For Every Board",
    subtitle: "Discuss work exactly where it happens.",
    description:
      "SwiftBoard includes board-based messaging so team members can collaborate, share updates, and reference content without leaving the workspace.",
      bulletsheading:"Chat directly inside each board",
    bullets: [
      "Share board content instantly in conversations",
      "Keep discussions tied to the project context",
      "Collaborate in real time with teammates",
    ],
    tagline: "Communication stays connected to the work.",
    icon: <MessageSquare size={22} strokeWidth={1.8} />,
  },
  {
    number: "05",
    title: "Real-Time Activity & Complete Account Control",
    subtitle: "SwiftBoard's activity tracking keeps you updated with every change, while profile settings let you manage your account easily.",
    description:
      "SwiftBoard's Activity section tracks all board updates. Latest messages automatically rise to the top using real-time sockets.",
      bulletsheading:"Real-time activity updates across boards",
    bullets: [
      "Latest messages automatically move to the top",
      "Filter activities by board, user, type, or date",
      "Track uploads, edits, and discussions",
      "Update name, email, password, and profile image",
      "Access trash, help resources, or delete account anytime",
    ],
    tagline: "Visibility, control, and transparency — all in one place.",
    icon: <Zap size={22} strokeWidth={1.8} />,
  },
 
];
