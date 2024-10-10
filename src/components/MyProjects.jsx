
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

const MyProjects = () => {
  return (
    <main className="max-w-[1480px] mx-auto">
      <div className="flex flex-col items-center justify-center font-poppins ">
        <h1 className="font-semibold text-8xl mb-4">My Projects</h1>
        <p className="w-3/5 text-center">
          Design process involves thorough research, wireframing, prototyping,
          and user testing to ensure that each product not only looks appealing
          but also provides meaningful interactions.
        </p>
      </div>

      <div className="flex items-center justify-center my-16">
        <Tabs>
          <TabList className="flex items-center justify-center gap-8 mb-8">
            {["All", "UI/UX", "Web Design", "App Design", "Graphic Design"].map(
              (tabName) => (
                <Tab
                  key={tabName}
                  className="font-poppins border-2 border-[#8a8a8a] hover:cursor-pointer text-2xl font-normal text-black px-4 py-2 rounded-md transition-colors duration-300"
                  selectedClassName="bg-orange"
                >
                  {tabName}
                </Tab>
              )
            )}
          </TabList>

          <TabPanel className="text-center flex gap-2">
            <img src={project1} alt={project1} />
            <img src={project2} alt={project2} />
            <img src={project3} alt={project3} />
          </TabPanel>
          <TabPanel className="text-center flex gap-2">
            <img src={project2} alt={project2} />
            <img src={project2} alt={project2} />
            <img src={project2} alt={project2} />
          </TabPanel>
          <TabPanel className="text-center flex gap-2">
            <img src={project3} alt={project3} />
            <img src={project3} alt={project3} />
            <img src={project3} alt={project3} />
          </TabPanel>
          <TabPanel className="text-center flex gap-2">
            <img src={project1} alt={project1} />
            <img src={project2} alt={project2} />
            <img src={project3} alt={project3} />
          </TabPanel>
          <TabPanel className="text-center flex gap-2">
            <img src={project3} alt={project3} />
            <img src={project2} alt={project2} />
            <img src={project1} alt={project1} />
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
};

export default MyProjects;
