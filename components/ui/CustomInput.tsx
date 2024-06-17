import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  //   this way we have to put every type of 'name' that can be assigned to it (like email,password,username, dob, address, mobile no )'s type)
  //   name: "email" | "password";

  //   thus this method is used
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  console.log(name);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        //     Shad cn copy paste form
        //   <FormItem>
        //     <div className="form-item">
        //       <FormLabel>Email</FormLabel>
        //     </div>
        //     <FormControl>
        //       <Input placeholder="email" {...field} />
        //     </FormControl>
        //     <FormDescription>
        //       This is your public display name.
        //     </FormDescription>
        //     <FormMessage />
        //   </FormItem>

        // Custom made form field
        <div className="form-item">
          <FormLabel className="form-label" htmlFor={name}>
            {label}
          </FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                id={name}
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
