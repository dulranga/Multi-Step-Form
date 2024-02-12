import { useForm } from "react-hook-form";
import { PanelNavigation } from "../section";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PersonalInfo = ({ defaultState, updateInfo }) => {
  const { register, handleSubmit } = useForm();

  const personal = defaultState.personal ?? {};

  return (
    <form onSubmit={handleSubmit(updateInfo)}>
      <div className="grid">
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            {...register("name", { required: true, value: personal.name })}
            className="my-1"
            type="text"
            id="name"
            placeholder="eg: James Bond"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            {...register("email", { required: true, value: personal.email })}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tele"
            id="phone"
            {...register("phone", { required: true, value: personal.phone })}
          />
        </div>
      </div>
      <PanelNavigation panelCompletionStatus={0} />
    </form>
  );
};

export default PersonalInfo;
