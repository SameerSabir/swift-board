import Carousel from "@/components/carousel";
import FAQs from "@/components/Faqs";
import { Hero, Problem, Solution, Pricing } from "@/components/sections/Home";
import Features from "@/components/sections/Home/Features";
const faqData = {
  title: "Frequently Asked Questions",
  description:
    "If you can’t find what you’re looking for, feel free to reach out to our team.",
  data: [
    {
      question: "Can I create multiple boards for different projects?",
      answer:
        "Yes. You can create unlimited boards for projects, clients, teams, or ideas. Each board stays organized and independent, so work never overlaps or gets messy.",
    },
    {
      question: "How does role-based access work?",
      answer:
        "SwiftBoard uses three roles: Admin, Editor, and Viewer. Admins manage boards and members, Editors add and update content, and Viewers can only view. Roles can be changed anytime.",
    },
    {
      question: "Can I add different types of content inside a board?",
      answer:
        "Absolutely. You can add text, links, images, videos, documents, and recordings — all organized within a structured board.",
    },
    {
      question: "Does SwiftBoard include messaging?",
      answer:
        "Yes. Each board has built-in messaging, so discussions stay connected to the actual work. You can also share board content directly into the chat.",
    },
    {
      question: "How do activity updates work?",
      answer:
        "Our real-time activity system shows the latest updates instantly. Messages, edits, and uploads appear automatically, and you can filter by board, user, type, or date.",
    },
    {
      question: "What happens when I invite someone to a board?",
      answer:
        "If they already use SwiftBoard, they’re added instantly. If not, they receive an email invite and automatically join the board once they sign up.",
    },
    {
      question: "Can I manage or delete boards later?",
      answer:
        "Yes. Admins can rename boards, move them to trash, restore them, or permanently delete them whenever needed.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We prioritize data security and controlled access. Only assigned members can access board content based on their role permissions.",
    },
    {
      question: "Can I update my account details anytime?",
      answer:
        "Of course. You can update your name, email, password, profile image, access your trash, or delete your account from the profile section.",
    },
    {
      question: "What if SwiftBoard isn’t the right fit for my team?",
      answer:
        "We’re confident you’ll love the structured collaboration experience. If you ever need help, our support team is here to assist you.",
    },
  ],
};
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Carousel />
      <Problem />
      <Solution />
      <Pricing />
      <FAQs
        title={faqData.title}
        description={faqData.description}
        data={faqData.data}
      />
    </>
  );
}
