import { Button } from "./ui/button";

const PanelContent = ({ title, description, children }) => {
  return (
    <article className="z-10 absolute sm:relative left-0 right-0 top-[12rem] sm:top-0 mx-auto  p-10 bg-white w-11/12 sm:w-full  rounded-2xl sm:rounded-none min-h-fit">
      <h2 className="text-primary-800 text-4xl font-bold leading-tight mb-2 ">
        {title}
      </h2>

      <p className="text-neutral-500 mb-10">{description}</p>

      <div className="mb-10">{children}</div>

      <div className="fixed sm:absolute bottom-0 left-0 p-5 bg-white w-full flex justify-between align-middle">
        <Button tabIndex="2" variant="ghost">
          Go Back
        </Button>
        <Button tabIndex="1">Next Step</Button>
      </div>
    </article>
  );
};

export default PanelContent;