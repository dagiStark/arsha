import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div className="flex flex-col gap-4">
      <Accordion className=" text-[17px] leading-[24px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="text-[#47b2e4] font-[500]">
            <span className="mr-2">01</span>
            Non consectetur a erat nam at lectus urna duis?
          </p>
        </AccordionSummary>
        <AccordionDetails className="text-[#444444]">
          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat
          lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla
          urna porttitor rhoncus dolor purus non.
        </AccordionDetails>
      </Accordion>
      <Accordion className=" text-[17px] leading-[24px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className="text-[#47b2e4] font-[500]">
            <span className="mr-2">02</span>
            Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
          </p>
        </AccordionSummary>
        <AccordionDetails className="text-[#444444]">
          Dolor sit amet consectetur adipiscing elit pellentesque habitant
          morbi. Id interdum velit laoreet id donec ultrices. Fringilla
          phasellus faucibus scelerisque eleifend donec pretium. Est
          pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
          cursus turpis massa tincidunt dui.
        </AccordionDetails>
      </Accordion>
      <Accordion className=" text-[17px] leading-[24px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <p className="text-[#47b2e4] font-[500]">
            <span className="mr-2">03</span>
            Dolor sit amet consectetur adipiscing elit pellentesque?
          </p>
        </AccordionSummary>
        <AccordionDetails className="text-[#444444]">
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
          orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
          diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
          Lectus urna duis convallis convallis tellus. Urna molestie at
          elementum eu facilisis sed odio morbi quis
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
