import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div className="flex flex-col gap-4">
      <Accordion className="text-[17px] leading-[24px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="text-[#47b2e4] font-[500]">
            <span className="mr-2">01</span>
            How do we ensure quality in our services?
          </p>
        </AccordionSummary>
        <AccordionDetails className="text-[#444444]">
          Our team follows a strict quality assurance process, combining expert
          reviews with real-time feedback to deliver exceptional results
          tailored to your needs.
        </AccordionDetails>
      </Accordion>

      <Accordion className="text-[17px] leading-[24px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className="text-[#47b2e4] font-[500]">
            <span className="mr-2">02</span>
            What industries do we cater to?
          </p>
        </AccordionSummary>
        <AccordionDetails className="text-[#444444]">
          We specialize in providing solutions across various sectors, including
          technology, healthcare, retail, and finance, ensuring customized
          services for each industry.
        </AccordionDetails>
      </Accordion>

      <Accordion className="text-[17px] leading-[24px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <p className="text-[#47b2e4] font-[500]">
            <span className="mr-2">03</span>
            Why choose us over competitors?
          </p>
        </AccordionSummary>
        <AccordionDetails className="text-[#444444]">
          Our client-first approach, innovative solutions, and commitment to
          excellence set us apart from competitors. Partner with us to
          experience unmatched dedication and expertise.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
