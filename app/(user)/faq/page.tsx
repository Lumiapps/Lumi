import { EAPTransactionChecker } from '@/components/eap-transaction-checker';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    id: 'item-1',
    question: 'I paid for Early Access Program, but still not showing up?',
    answer: (
      <div className="space-y-4">
        <span>
          It usually takes 5~30 seconds for the EAP to be granted to your
          account.
          <br />
          If the EAP is not granted, please paste your transaction hash into the
          transaction checker below.
        </span>
        <EAPTransactionChecker />
      </div>
    ),
  },
  {
    id: 'item-2',
    question: 'Can I export my embedded wallet?',
    answer: (
      <div className="space-y-4">
        <span>
          Unfortunately, to ensure a maximum level of security, we currently do
          not support exporting your embedded wallet.
          <br />
          We will be integrating with famous Embedded Wallet providers soon so
          you can have absolute control over your wallet.
        </span>
      </div>
    ),
  },
  {
    id: 'item-3',
    question: 'How can I become EAP Verified in Discord?',
    answer: (
      <div className="space-y-4">
        <span>
          On the bottom left, tap your wallet, then tap `Account`. Next, you
          should see a `Connect` button next to Discord. Tap on that and connect
          to the Discord server.
          <br />
          Once that is completed, you should now be `EAP VERIFIED` and see
          custom Discord channels for EAP users. Your name will also be color
          differentiated from other users.
        </span>
      </div>
    ),
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex flex-1 flex-col py-8">
        <div className="w-full px-8">
          <h1 className="text-lg font-medium">FAQ</h1>
        </div>
      </div>

      <Accordion type="single" collapsible className="mx-8">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
