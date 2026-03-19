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
    description: "Create focused boards for every project, client, or idea. Keep your workspace clean and intentional.",
    // description:
    //   "Create focused boards for every project, client, or idea. Keep your workspace clean and intentional.",
    // bulletsheading:"Create boards with custom names & emojis",
    bullets: [
      "Create boards with custom names & emojis",
      "Edit board details anytime",
      "Move inactive boards to trash or permanently delete",
    ],
    tagline: "No more messy folders. No more lost discussions.",
    icon: <LayoutGrid size={22} strokeWidth={1.8} />,
  },
  {
    number: "02",
    title: "Controlled Collaboration & Member Management",
    description: "Keep control over who can access and contribute, so teamwork stays organized and secure.",
    // description:
    //   "Admins can invite members, assign roles, and manage permissions so collaboration stays organized and secure.",
    //   bulletsheading:"Admins manage boards and team members",
    bullets: [
      "Admins manage boards and members",
      "Editors modify content; viewers stay informed",
      "Invite teammates and update roles anytime",
    ],
    tagline: "Structured collaboration without confusion.",
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
  },
  {
    number: "03",
    title: "Rich Content All In One Place",
    description: "Bring all your project materials together in one organized board, so nothing is ever lost.",
    // description:
    //   "From quick notes to important resources, SwiftBoard keeps all content connected so nothing gets lost.",
    //     bulletsheading:"Add text notes, links, and references",
    bullets: [
      "Add notes, links, images, videos, and files",
      "Record and share audio directly",
      "Keep everything connected in one place",
    ],
    tagline: "All your content, organized together.",
    icon: <Layers size={22} strokeWidth={1.8} />,
  },
  {
    number: "04",
    title: "Built In Messaging For Every Board",
    description: "Discuss work exactly where it happens, keeping communication tied to projects.",
    // description:
    //   "SwiftBoard includes board-based messaging so team members can collaborate, share updates, and reference content without leaving the workspace.",
    //   bulletsheading:"Chat directly inside each board",
    bullets: [
      "Chat inside each board and share content instantly",
      "Keep discussions in context",
      "Collaborate in real time with teammates",
    ],
    tagline: "Communication stays connected to the work.",
    icon: <MessageSquare size={22} strokeWidth={1.8} />,
  },
  {
    number: "05",
    title: "Real Time Activity & Complete Account Control",
    description: "Stay informed about every change across boards while managing your account and settings with ease.",
    // description:
    //   "SwiftBoard's Activity section tracks all board updates. Latest messages automatically rise to the top using real-time sockets.",
    //   bulletsheading:"Real-time activity updates across boards",
    bullets: [
      "Real-time updates across boards",
      "Filter activities by board, user, or type",
      "Update profile info, access help, or manage trash",
    ],
    tagline: "Visibility, control, and transparency all in one place.",
    icon: <Zap size={22} strokeWidth={1.8} />,
  },
 
];
