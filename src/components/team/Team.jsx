import { teamMembers } from "../../constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Team() {
  return (
    <main className="">
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl uppercase font-bold text-[#283a5ae6] mt-12">
            Team
          </h1>
          <p className="text-xl text-black/40 mt-4 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            magni?
          </p>
        </div>
      </section>

      <section>
        <div>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {teamMembers.map((member, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center p-10 shadow-xl gap-10 w-[40%]"
                >
                  <div>
                    <img
                      src={member.img}
                      alt="member image"
                      style={{ width: "180px", objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h1 className="text-xl font-bold text-[#283a5ae6]">
                      {member.name}
                    </h1>
                    <p className="text-lg font-semibold text-black/80">
                      {member.designation}
                    </p>
                    <p className="text-lg text-black/70 mb-2">
                      {member.description}
                    </p>
                    <div className="flex gap-4 text-black/70">
                      <FacebookIcon />
                      <InstagramIcon />
                      <XIcon />
                      <LinkedInIcon />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;