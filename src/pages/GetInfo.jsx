import desktop from "@/assets/images/bg-sidebar-desktop.svg";
import mobile from "@/assets/images/bg-sidebar-mobile.svg";
import PersonalInfo from "@/components/GetInfo/Personal";
import SelectPlan from "@/components/GetInfo/SelectPlan";
import PanelContent from "@/components/section";
import { Button } from "@/components/ui/button";
import { getClass } from "@/lib/getClass";
import { useMemo, useState } from "react";

const steps = [
  {
    stepName: "YOUR INFO",
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    content: PersonalInfo,
    id: "personal",
  },

  {
    stepName: "SELECT PLAN",
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
    content: SelectPlan,
    id: "plan",
  },
  {
    stepName: "ADD-ONS",
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    content: () => null,
    id: "addon",
  },
  {
    stepName: "SUMMARY",
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    content: () => null,
    id: "summary",
  },
];

const GetInfo = () => {
  const [selectedId, setSelectedId] = useState("plan");
  const [info, setInfo] = useState({});

  const currentStep = useMemo(() => {
    return steps.find((step) => step.id === selectedId);
  }, [selectedId]);

  const CurrentStepContent = currentStep.content ?? (() => null);

  const currentStepIndex = steps.findIndex(
    (step) => step.id === currentStep.id
  );

  const completionStatus = currentStepIndex / (steps.length - 1);

  const updateInfo = (id) => (data) => {
    setInfo((prev) => ({ ...prev, [id]: data }));
    onNext(); // moves to next step
  };

  const onNext = () => {
    if (completionStatus === 1) return; // no next steps

    const nextId = steps[currentStepIndex + 1].id;
    if (nextId) setSelectedId(nextId);
  };

  return (
    <div className="font-body sm:flex sm:w-full sm:gap-10 sm:bg-white sm:p-5 sm:rounded-2xl sm:max-w-5xl">
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
                onClick={() => setSelectedId(step.id)}
                variant="ghost"
                className={getClass(
                  "p-0 aspect-square w-10 text-white group-hover:bg-primary-100 group-hover:text-primary-800 flex justify-center items-center rounded-full ring-1 ring-white group-hover:ring-[bg-primary-100]",
                  selectedId === step.id && "bg-primary-100 text-primary-800"
                )}
              >
                {i + 1}
              </Button>
              <div className="hidden sm:grid w-full">
                <p className="text-neutral-500 font-thin text-xs">
                  STEP {i + 1}
                </p>
                <Button
                  className="justify-start h-auto p-0 uppercase text-white hover:text-neutral-400 font-bold m-0"
                  onClick={() => setSelectedId(step.id)}
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
        title={currentStep.title}
        description={currentStep.description}
        panelCompletionStatus={completionStatus}
      >
        <CurrentStepContent
          updateInfo={updateInfo(currentStep.id)}
          defaultState={info}
        />
      </PanelContent>
    </div>
  );
};

export default GetInfo;
