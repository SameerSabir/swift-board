import Blog1 from "@/assets/blogs/blog1.png";
import Blog2 from "@/assets/blogs/blog2.png";
import Blog3 from "@/assets/blogs/blog3.png";
import { StaticImageData } from "next/image";

export interface BlogTheme {
  bgColor: string;
  dateColor: string;
}

export interface BlogPost {
  image: StaticImageData;
  date: string;
  title: string;
  description: string;
  slug: string;
  content: string;
}

export const BLOG_THEMES: BlogTheme[] = [
  { bgColor: "bg-[#e8d3f9]", dateColor: "text-[#b960e2]" },
  { bgColor: "bg-[#e7fbf2]", dateColor: "text-[#3cc583]" },
  { bgColor: "bg-[#e8f9ff]", dateColor: "text-[#17aee1]" },
];

export const BLOG_DATA: BlogPost[] = [
  {
    image: Blog1,
    date: "February 26th, 2026",
    title: "AI-Powered Data Charting: Turn Numbers Into Stories in Seconds",
    description:
      "Paste your data, let AI figure out the best chart. Napkin reads your data, detects patterns, and generates multiple visual options...",
    slug: "ai-powered-data-charting",
    content: `
      <p>Data visualization is one of the most powerful tools in a communicator's arsenal. However, creating meaningful charts from raw data can be a time-consuming and technically challenging task. That's where AI-powered data charting comes in.</p>
      
      <h2>The Problem with Traditional Charting</h2>
      <p>For most people, the process of creating a chart involves wrestling with spreadsheets, choosing between dozens of chart types, and manually adjusting colors, labels, and scales. This process often takes hours and results in charts that are either too complex or fail to tell a clear story.</p>
      
      <h2>How AI Changes the Game</h2>
      <p>Napkin's new AI-powered charting tool simplifies this process. By pasting your raw data directly into the app, our AI analyzes the patterns and automatically suggests the most effective visual representation. Whether it's a bar chart for comparisons, a line graph for trends, or a pie chart for proportions, the AI does the heavy lifting for you.</p>
      
      <h3>Key Benefits:</h3>
      <ul>
        <li><strong>Speed:</strong> Turn raw numbers into visuals in seconds.</li>
        <li><strong>Accuracy:</strong> AI detects data patterns that humans might miss.</li>
        <li><strong>Storytelling:</strong> Every chart is designed to highlight the most important insights.</li>
      </ul>
      
      <p>Ready to start telling better stories with your data? Try Napkin's AI charting tool today and see the difference for yourself.</p>
    `,
  },
  {
    image: Blog2,
    date: "September 9th, 2025",
    title: "Introducing New Mindmaps in Napkin",
    description:
      "We're excited to share a massive upgrade to one of your most-loved visuals: Mindmaps. As our most generated visual type, man...",
    slug: "new-mindmaps-in-napkin",
    content: `
      <p>Mindmapping is an essential technique for brainstorming, organizing thoughts, and visualizing complex ideas. Today, we're thrilled to introduce a significant upgrade to Napkin's Mindmaps, making them more flexible, intuitive, and visually stunning than ever before.</p>
      
      <h2>Why Mindmaps Matter</h2>
      <p>At their core, mindmaps mimic the way our brains work—non-linearly. They allow us to explore ideas from a central theme and branch out into related concepts, creating a visual hierarchy that's easy to understand at a glance.</p>
      
      <h2>What's New in Napkin Mindmaps?</h2>
      <p>We've listened to your feedback and added several key features to our Mindmapping tool:</p>
      
      <ul>
        <li><strong>Smart Auto-Layout:</strong> Our new algorithm automatically organizes your branches for maximum clarity, so you don't have to spend time manually repositioning nodes.</li>
        <li><strong>Dynamic Styling:</strong> Customize your mindmaps with a wide range of colors, shapes, and line styles to match your brand or project theme.</li>
        <li><strong>Real-time Collaboration:</strong> Work with your team on a single mindmap simultaneously, seeing changes as they happen.</li>
      </ul>
      
      <p>Mindmaps have always been our most generated visual type, and this upgrade ensures they continue to be the best tool for your creative process. Start exploring your ideas today with Napkin's new and improved Mindmaps.</p>
    `,
  },
  {
    image: Blog3,
    date: "June 25th, 2025",
    title: "Introducing Custom Generation – Get the Visual You Want, Faster",
    description:
      "Today we're launching Custom Generation to give you more control over visuals - so you can get the visual you want, faster...",
    slug: "custom-generation-in-napkin",
    content: `
      <p>Efficiency is the key to any successful project. In the world of visual design, getting the exact graphic you need can often be a slow process of trial and error. Today, we're changing that with the launch of <strong>Custom Generation</strong> in Napkin.</p>
      
      <h2>More Control, Better Results</h2>
      <p>Custom Generation gives you direct control over the parameters of our AI visual engine. Instead of relying on general prompts, you can now specify the exact style, complexity, and focus of the visuals you want to create.</p>
      
      <h2>How Custom Generation Works</h2>
      <p>The new interface allows you to toggle specific settings before the AI begins generating your visual. This means you can:</p>
      
      <ul>
        <li><strong>Define the Style:</strong> Choose from various artistic and technical styles to fit your project's aesthetic.</li>
        <li><strong>Adjust Complexity:</strong> Control the amount of detail in your visuals, from simple icons to complex diagrams.</li>
        <li><strong>Focus on Key Elements:</strong> Tell the AI which parts of your data or prompt are the most important to visualize.</li>
      </ul>
      
      <p>This update is all about speed and precision. By giving you more control over the generation process, we're helping you get the high-quality visuals you need in a fraction of the time. Explore Custom Generation today and see how it can transform your workflow.</p>
    `,
  },
];
