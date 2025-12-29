import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my ADA locked when I delegate?",
    answer: "No. Your ADA is never locked and never leaves your wallet. You can spend, transfer, or re-delegate at any time with no penalties.",
  },
  {
    question: "When will I start earning rewards?",
    answer: "Rewards begin after a brief warm-up period of 15-20 days (3-4 epochs). After that, rewards are distributed every 5 days automatically.",
  },
  {
    question: "What are the fees?",
    answer: "NACHO charges a 1.5% margin on rewards plus the standard 340 ADA fixed fee per block minted. These fees sustain reliable infrastructure and operations.",
  },
  {
    question: "Why should I delegate to a smaller pool like NACHO?",
    answer: "Delegating to smaller, independent pools strengthens Cardano's decentralization. Large pools concentrate power; distributed delegation keeps the network resilient and censorship-resistant.",
  },
  {
    question: "What is the pledge and why does it matter?",
    answer: "Our 10,000 ADA pledge is the operator's own stake committed to the pool. It demonstrates our investment in NACHO's success and aligns our interests with our delegators.",
  },
  {
    question: "Where is the pool located?",
    answer: "NACHO operates from self-hosted infrastructure in the United States. This contributes to the geographic distribution of Cardano's network.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about delegating to NACHO
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
