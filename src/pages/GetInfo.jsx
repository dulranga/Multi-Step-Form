import desktop from "@/assets/images/bg-sidebar-desktop.svg";
import mobile from "@/assets/images/bg-sidebar-mobile.svg";
import PanelContent from "@/components/section";
import { Button } from "@/components/ui/button";

const steps = [
  { stepName: "YOUR INFO", title: "", description: "", content: "" },
  { stepName: "SELECT PLAN", title: "", description: "", content: "" },
  { stepName: "ADD-ONS", title: "", description: "", content: "" },
  { stepName: "SUMMARY", title: "", description: "", content: "" },
];

const GetInfo = () => {
  return (
    <div className="font-body sm:flex sm:gap-10 sm:bg-white sm:p-5 sm:rounded-2xl sm:max-w-5xl">
      <nav className="z-0 fixed sm:relative   top-0 inset-x-0 isolate flex justify-center sm:justify-between items-center sm:items-start w-full sm:max-w-xs">
        <picture className="w-full sm:h-full sm:rounded-lg sm:overflow-hidden">
          <source media="(max-width: 639px)" srcSet={mobile} />
          <source media="(min-width: 640px)" srcSet={desktop} />
          <img
            className="h-[250px] sm:h-full w-full  block object-cover"
            src={desktop}
            alt={"banner with blobs"}
          />
        </picture>
        <ul className="absolute flex sm:grid gap-4  sm:gap-8 mb-10 sm:m-10">
          {steps.map((step, i) => (
            <li className="group flex items-center gap-3" key={i}>
              <Button
                variant="ghost"
                className="p-0 aspect-square w-10 text-white group-hover:bg-primary-100 group-hover:text-primary-800 flex justify-center items-center rounded-full ring-1 ring-white group-hover:ring-[bg-primary-100]"
              >
                {i + 1}
              </Button>
              <div className="hidden sm:grid w-full">
                <p className="text-neutral-500 font-thin text-xs">
                  STEP {i + 1}
                </p>
                <Button
                  className="justify-start h-auto p-0 uppercase text-white hover:text-neutral-400 font-bold m-0"
                  variant="ghost"
                >
                  {step.stepName}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      <PanelContent
        title={"Lorem, ipsum dolor."}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium?"
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          tempora vero ipsum molestias, officiis reprehenderit pariatur omnis
          soluta veniam, impedit eum hic quasi neque expedita at ratione
          doloribus necessitatibus aut?
        </p>
      </PanelContent>
    </div>
  );
};

export default GetInfo;
