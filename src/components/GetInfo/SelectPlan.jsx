import arcade from "@/assets/images/icon-arcade.svg";
import advanced from "@/assets/images/icon-advanced.svg";
import pro from "@/assets/images/icon-pro.svg";
import { PanelNavigation } from "../section";
import { Label } from "@radix-ui/react-label";
import { DoubleSwitch } from "../ui/DoubleSwitch";
import { getClass } from "@/lib/getClass";
import { useState } from "react";

const SelectPlan = ({ defaultState, updateInfo, onGoBack }) => {
  const [plan, setPlan] = useState(defaultState.plan ?? {});

  const updateDuration = (isYearly) => {
    setPlan((prev) => ({ ...prev, isYearly }));
  };

  const selectPlan = (id) => {
    setPlan((prev) => ({ ...prev, id }));
  };

  return (
    <div className="grid gap-5">
      <ul className="grid gap-5 items-stretch sm:grid-cols-3">
        {plans.map((p) => (
          <li
            key={p.id}
            className={getClass(
              "w-full p-5 ring-2  hover:ring-primary-400 ring-offset-0  flex sm:grid gap-4 rounded-md hover:bg-neutral-300",
              p.id === plan?.id
                ? "ring-primary-400 bg-neutral-300"
                : "ring-neutral-400"
            )}
            onClick={() => selectPlan(p.id)}
            tabIndex={2}
          >
            <img
              className="aspect-square sm:w-10"
              width={50}
              height={50}
              src={p.icon}
              alt={`${p.name} Plan`}
            />
            <div>
              <h3 className="text-xl sm:text-lg font-semibold text-primary-800 sm:mt-10">
                {p.name}
              </h3>
              <p className="text-neutral-500">
                {plan.isYearly
                  ? `$${p.priceYearly}/yr`
                  : `$${p.priceMonthly}/mo`}
              </p>
              <p className="text-primary-800 font-light text-sm h-2">
                {plan.isYearly && "2 months free"}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-5 items-center justify-center py-5 w-full bg-neutral-200 rounded-lg">
        <Label
          htmlFor="duration"
          className={getClass(
            "font-semibold",
            !plan.isYearly
              ? "text-primary pointer-events-none"
              : "text-neutral-500"
          )}
        >
          Monthly
        </Label>
        <DoubleSwitch
          id="duration"
          checked={plan.isYearly}
          onCheckedChange={(checked) => {
            updateDuration(checked);
          }}
        />
        <Label
          htmlFor="duration"
          className={getClass(
            "font-semibold",
            plan.isYearly
              ? "text-primary pointer-events-none"
              : "text-neutral-500"
          )}
        >
          Yearly
        </Label>
      </div>

      <PanelNavigation
        panelCompletionStatus={0.2}
        onGoBack={onGoBack}
        onNext={() => {
          updateInfo(plan);
        }}
      />
    </div>
  );
};
export const plans = [
  {
    name: "Arcade",
    id: "arcade",
    priceMonthly: 9,
    priceYearly: 90,
    icon: arcade,
  },
  {
    name: "Advanced",
    id: "advanced",
    priceMonthly: 12,
    priceYearly: 120,
    icon: advanced,
  },
  {
    name: "Pro",
    id: "pro",
    priceMonthly: 15,
    priceYearly: 150,
    icon: pro,
  },
];
export default SelectPlan;
