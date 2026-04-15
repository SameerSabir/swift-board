import {
  LayoutGrid,
  ShieldCheck,
  Layers,
  MessageSquare,
  Zap,
} from "lucide-react";

export const FEATURES = [
  {
    number: "01",
    title: "Structured Boards on One Workspace.",
    description:
      "Create specific boards for each client, project, or an idea.  Stay focused and keep your workspace organised.",
    // description:
    //   "Create focused boards for every project, client, or idea. Keep your workspace clean and intentional.",
    // bulletsheading:"Create boards with custom names & emojis",
    bullets: [
      "Name your boards",
      "Edit board details",
      "Delete inactive boards",
    ],
    tagline:
      "Keep track of every completed project via boards. Organised data with structured workspace.",
    icon: <LayoutGrid size={22} strokeWidth={1.8} />,
  },
  {
    number: "02",
    title: "Team Collaboration & Access Management",
    description:
      "Keep track of assigned roles, completed tasks, and level of team engagement in every project.",
    // description:
    //   "Admins can invite members, assign roles, and manage permissions so collaboration stays organized and secure.",
    //   bulletsheading:"Admins manage boards and team members",
    bullets: [
      "Manage team members and boards",
      "Control level of access to each member",
      "Update tasks progress and track productivity",
    ],
    tagline: "Enhance team collaboration for impactful performance.",
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
  },
  {
    number: "03",
    title: "Organise Content at One Place",
    description:
      "Upload all the relevant material of the project on the designated board and provide access to team members for organised working.",
    // description:
    //   "From quick notes to important resources, SwiftBoard keeps all content connected so nothing gets lost.",
    //     bulletsheading:"Add text notes, links, and references",
    bullets: [
      "Add text, documents, videos, links, and notes",
      "Record audio and share with team members",
      "Connect everything for enhanced productivity",
    ],
    tagline: "Structured content, increased performance.",
    icon: <Layers size={22} strokeWidth={1.8} />,
  },
  {
    number: "04",
    title: "Onboard Discussion for Team Engagement",
    description:
      "Brainstorm ideas, discuss with your team members and keep communication connected with the relevant project.",
    // description:
    //   "SwiftBoard includes board-based messaging so team members can collaborate, share updates, and reference content without leaving the workspace.",
    //   bulletsheading:"Chat directly inside each board",
    bullets: [
      "Chat via in-built messaging",
      "Keep track of discussions context",
      "Real-time collaboration with team members",
    ],
    tagline: "Align your conversations with the work.",
    icon: <MessageSquare size={22} strokeWidth={1.8} />,
  },
  {
    number: "05",
    title: "Track Activity & Control Account",
    description:
      "Customise the setting of your account and keep track of activities across the boards.",
    // description:
    //   "SwiftBoard's Activity section tracks all board updates. Latest messages automatically rise to the top using real-time sockets.",
    //   bulletsheading:"Real-time activity updates across boards",
    bullets: [
      "Edit profile details, manage unnecessary data, access help",
      "Filter activities smartly across the boards",
      "Real-time updates with notifications",
    ],
    tagline:
      "Maintain transparency, proper control, and visibility in the workspace.",
    icon: <Zap size={22} strokeWidth={1.8} />,
  },
];
