import { useRef } from "react";
import { PanelNavigation } from "../section";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const Addon = ({ defaultState, updateInfo }) => {
  const selectedAddons = useRef(new Set(defaultState.addon ?? []));
  return (
    <div>
      <ul className="grid gap-5">
        {addons.map((addon) => (
          <li
            key={addon.id}
            className="flex gap-5 justify-between items-center ring-2 ring-neutral-400 px-5  rounded-lg hover:ring-primary-400"
          >
            <Checkbox
              defaultChecked={defaultState.addon?.has(addon.id)}
              id={addon.id}
              name={addon.id}
              onCheckedChange={(checked) => {
                if (checked) {
                  selectedAddons.current.add(addon.id);
                }
                if (!checked) {
                  selectedAddons.current.delete(addon.id);
                }
              }}
            />
            <Label htmlFor={addon.id} className="w-full py-5">
              <div className="flex gap-5 items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-primary-800">
                    {addon.name}
                  </p>
                  <p className="text-neutral-500">{addon.description}</p>
                </div>
                <p className="text-primary-400">
                  {defaultState.plan?.isYearly
                    ? `$${addon.priceYearly}/yr`
                    : `$${addon.priceMonthly}/mo`}
                </p>
              </div>
            </Label>
          </li>
        ))}
      </ul>
      <PanelNavigation
        panelCompletionStatus={0.4}
        onNext={() => {
          updateInfo(selectedAddons.current);
        }}
      />
    </div>
  );
};

export const addons = [
  {
    id: "online",
    name: "Online service",
    description: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
  },
  {
    id: "storage",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 10,
  },
  {
    id: "custom",
    name: "Customizable profile",
    description: "Custom theme on your profile",
    priceMonthly: 2,
    priceYearly: 10,
  },
];

export default Addon;
