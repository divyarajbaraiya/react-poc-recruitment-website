import { FC } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import "./assets/style.scss";

import { AppFormInput } from "../AppFormInput";
import { AppButton } from "../AppButton";

type SearchBoxFormType = {
  jobTitle: string;
  skill: string;
  salaryRange: string;
  experience: string;
  certificate: string;
};

const schema = yup.object().shape({
  jobTitle: yup.string().required("job title is a required field"),
  skill: yup.string().required(),
  salaryRange: yup.string().required("salary range is a required field"),
  experience: yup.string().required(),
});

export const AppSearchBox: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SearchBoxFormType>({
    resolver: yupResolver(schema),
  });

  const skillValue = watch("skill");
  const salaryRangeValue = watch("salaryRange");
  const experienceValue = watch("experience");

  const onSubmitHandler = (formData: SearchBoxFormType) => {
    reset();
    navigate("/dummy");
  };

  return (
    <div className="search-box-container">
      <form onSubmit={handleSubmit(onSubmitHandler)} className="row px-4">
        <div className="col-6">
          <AppFormInput
            className="mt-5"
            name={"jobTitle"}
            label={"Enter Job Title"}
            placeholder={"E.g. Web developer"}
            required
            errorMessage={errors?.jobTitle?.message as string}
            register={register}
          />
        </div>

        <div className="col-6">
          <AppFormInput
            className="mt-5 w-100"
            type="select"
            name={"skill"}
            label={"Select additional Skill(s)"}
            placeholder={"E.g. AngularJS"}
            errorMessage={errors?.skill?.message as string}
            register={register}
            options={[
              { label: "React", value: "React" },
              { label: "Vue", value: "Vue" },
              { label: "Angular", value: "Angular" },
              { label: "Node", value: "Node" },
            ]}
            value={skillValue}
          />
        </div>

        <div className="col-3">
          <AppFormInput
            className="mt-5 w-100"
            type="select"
            name={"salaryRange"}
            label={"Salary Range"}
            placeholder={"Select salary range"}
            required
            errorMessage={errors?.salaryRange?.message as string}
            register={register}
            options={[
              { label: "10k - 20k", value: "10k - 20k" },
              { label: "20k - 40k", value: "20k - 40k" },
              { label: "30k - 90k", value: "30k - 90k" },
            ]}
            value={salaryRangeValue}
          />
        </div>

        <div className="col-3">
          <AppFormInput
            className="mt-5 w-100"
            type="select"
            name={"experience"}
            label={"Relevant Experience"}
            placeholder={"0 - 3 Yrs"}
            required
            errorMessage={errors?.experience?.message as string}
            register={register}
            options={[
              { label: "1 - 3 Yrs", value: "1 - 3 Yrs" },
              { label: "4 - 5 Yrs", value: "4 - 5 Yrs" },
            ]}
            value={experienceValue}
          />
        </div>

        <div className="col-6 ml-auto">
          <AppFormInput
            className="mt-5 w-100"
            name={"certificate"}
            label={"Certification(s)"}
            placeholder={"AWS"}
            errorMessage={errors?.certificate?.message as string}
            register={register}
          />
        </div>

        <div className="search-box-action mt-4">
          <AppButton type="submit" variant="secondary" className="search-btn">
            Search
          </AppButton>
        </div>
      </form>
    </div>
  );
};
