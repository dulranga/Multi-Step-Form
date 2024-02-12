import { useMemo } from "react";
import { Button } from "../ui/button";
import { addons as allAddons } from "./Addon";
import { plans } from "./SelectPlan";
import { PanelNavigation } from "../section";

const Summary = ({ defaultState, goto }) => {
  const plan = plans.find((plan) => plan.id === defaultState.plan?.id);
  console.log(plan);
  const selectedAddons = allAddons.filter((addon) =>
    defaultState.addon.has(addon.id)
  );

  const total = useMemo(() => {
    if (defaultState.plan?.isYearly) {
      return (
        plan.priceYearly +
        selectedAddons
          .map((addon) => addon.priceYearly)
          .reduce((acc, current) => acc + current, 0)
      );
    } else {
      return (
        plan.priceMonthly +
        selectedAddons
          .map((addon) => addon.priceMonthly)
          .reduce((acc, current) => acc + current, 0)
      );
    }
  }, [
    defaultState.plan?.isYearly,
    plan.priceMonthly,
    plan.priceYearly,
    selectedAddons,
  ]);

  return (
    <div>
      <div className="container bg-neutral-300 rounded-lg py-5">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-primary-800 font-bold">
              {plan.name} ({defaultState.plan?.isYearly ? "Yearly" : "Monthly"})
            </p>
            <Button
              variant="link"
              className="px-0 h-auto text-neutral-500 underline"
              onClick={() => goto("plan")}
            >
              Change
            </Button>
          </div>
          <p className="text-primary-800 font-semibold">
            {defaultState.plan?.isYearly
              ? `$${plan.priceYearly}/yr`
              : `$${plan.priceMonthly}/mo`}
          </p>
        </div>
        <hr className="my-3" />
        <ul className="grid gap-3">
          {selectedAddons.map((addon) => (
            <li key={addon.id} className="flex justify-between items-center">
              <p className="text-neutral-500">{addon.name}</p>
              <p className="text-primary-800 font-thin">
                +
                {defaultState.plan?.isYearly
                  ? `$${addon.priceYearly}/yr`
                  : `$${addon.priceMonthly}/mo`}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mt-5 flex justify-between items-center">
        <p className="text-neutral-500">
          Total {defaultState.plan?.isYearly ? "(per year)" : "(per month)"}
        </p>
        <p className="text-primary-400 font-semibold">
          {defaultState.plan?.isYearly ? `$${total}/yr` : `$${total}/mo`}
        </p>
      </div>

      <PanelNavigation panelCompletionStatus={1} />
    </div>
  );
};

export default Summary;
