import { Button } from "./ui/button";

const PanelContent = ({ title, description, children }) => {
  return (
    <article className="z-10 absolute sm:relative left-0 right-0 top-[12rem] sm:top-0 mx-auto  p-10 bg-white w-11/12 sm:w-full  rounded-2xl sm:rounded-none min-h-fit pb-0">
      <h2 className="text-primary-800 text-4xl font-bold leading-tight mb-2 ">
        {title}
      </h2>

      <p className="text-neutral-500 mb-10">{description}</p>

      <div className="mb-10">{children}</div>
    </article>
  );
};

export function PanelNavigation({
  panelCompletionStatus /* 0 => first step, 1 => lastStep */,
  onGoBack,
  onNext,
  onComplete,
}) {
  return (
    <div className="fixed sm:absolute bottom-0 left-0 py-5 px-10 bg-white w-full flex justify-between align-middle flex-row-reverse">
      {panelCompletionStatus === 1 && (
        <Button className="bg-primary-400" onClick={onComplete} tabIndex="1">
          Confirm
        </Button>
      )}
      {panelCompletionStatus < 1 && (
        <Button type="submit" onClick={onNext} tabIndex="1">
          Next Step
        </Button>
      )}
      {panelCompletionStatus > 0 && (
        <Button onClick={onGoBack} tabIndex="2" variant="ghost">
          Go Back
        </Button>
      )}
    </div>
  );
}

export default PanelContent;
