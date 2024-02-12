import arcade from "@/assets/images/icon-arcade.svg";
import advanced from "@/assets/images/icon-advanced.svg";
import pro from "@/assets/images/icon-pro.svg";
import { PanelNavigation } from "../section";
import { Label } from "@radix-ui/react-label";
import { DoubleSwitch } from "../ui/DoubleSwitch";
import { getClass } from "@/lib/getClass";

const SelectPlan = ({ defaultState }) => {
  const plan = defaultState.plan ?? {};
  return (
    <div className="grid gap-5">
      <ul className="grid gap-5 items-stretch sm:grid-cols-3">
        {plans.map((plan) => (
          <li
            key={plan.id}
            className="w-full p-5 ring-2 ring-neutral-400 hover:ring-primary-400 ring-offset-0 hover:ring-2 flex sm:grid gap-4 rounded-md
          "
          >
            <img
              className="aspect-square sm:w-10"
              width={50}
              height={50}
              src={plan.icon}
              alt={`${plan.name} Plan`}
            />
            <div>
              <h3 className="text-xl sm:text-lg font-semibold text-primary-800 sm:mt-10">
                {plan.name}
              </h3>
              <p className="text-neutral-500">${plan.priceMonthly}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-5 items-center justify-center py-5 w-full bg-neutral-200 rounded-lg">
        <Label
          htmlFor="duration"
          className={getClass(
            "font-semibold",
            !plan.isYearly ? "text-primary" : "text-neutral-500"
          )}
        >
          Monthly
        </Label>
        <DoubleSwitch id="duration" checked={plan.isYearly} />
        <Label
          htmlFor="duration"
          className={getClass(
            "font-semibold",
            plan.isYearly ? "text-primary" : "text-neutral-500"
          )}
        >
          Yearly
        </Label>
      </div>

      <PanelNavigation panelCompletionStatus={0.2} />
    </div>
  );
};
const plans = [
  {
    name: "Arcade",
    id: "arcade",
    priceMonthly: 9,
    priceYearly: 0,
    icon: arcade,
  },
  {
    name: "Advanced",
    id: "advanced",
    priceMonthly: 12,
    priceYearly: 0,
    icon: advanced,
  },
  {
    name: "Pro",
    id: "pro",
    priceMonthly: 15,
    priceYearly: 0,
    icon: pro,
  },
];
export default SelectPlan;
