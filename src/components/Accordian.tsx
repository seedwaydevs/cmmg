import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordianProps = {
  services: {
    id: number;
    title: string;
    content: string;
    bullets: string[];
  }[];
};

export function AccordionDemo({ services }: AccordianProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {services.map((service, i) => (
        <AccordionItem
          key={service.id}
          value={`item-${service.id}`}
          className="hover:shadow-white/10"
        >
          <AccordionTrigger className="font-light text-lg text-neutral-100">
            {service.title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-50">
            <p>{service.content}</p>
            <ul className="list-disc list-inside marker:text-orange-500">
              {service.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
