import React from "react";
import { Form } from "react-router";

export default function Listing() {
  return (
    <main className="text-black h-full flex items-center justify-center">
      <style>
        {`
                    main {
                            min-height: 100vh;
                            width: 100vw;
                            background-image: url('/milad-fakurian-GJKx5lhwU3M-unsplash.jpg');
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                            margin: 0;
                            padding: 0;
                    }
            `}
      </style>
      <div>
        <h1 className="lg:text-[30px] text-center mb-[30px]">
          Provide your school info
        </h1>
        <div
          className="lg:w-[480px] w-[350px] p-[20px] lg:p-[100px]"
          style={{
            border: "3px solid #ccc",
            borderRadius: "8px",
            margin: "0 auto",
          }}
        >
          <h2 className="lg:text-[30px] text-blue-600 font-extrabold text-center text-[30px]">
            Upload an Image
          </h2>
          <form>
            <input type="file" accept="image/*" />
            <button
              className="bg-blue-500 text-white p-[10px] rounded-[10px] font-extralight"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Upload
            </button>
          </form>
          <Form>
            <FormSpacer>
              <Label text="Name" />
              <Input type="text" placeholder="Enter school name" />
            </FormSpacer>

            <FormSpacer>
              <Label text="Location" />
              <Input type="text" placeholder="School Location" />
            </FormSpacer>

            <FormSpacer>
              <Label text="Type" />
              <Input type="text" placeholder="Public/Private/International" />
            </FormSpacer>

            <FormSpacer>
              <Label text="Fees per term" />
              <Input type="text" placeholder="School fee per term" />
            </FormSpacer>

            <FormSpacer>
              <Label
                text="Contact
              Details"
              />
              <Input type="text" placeholder="Number or email adress" />
            </FormSpacer>

            <FormSpacer>
              <Label text="School system" />
              <Input type="text" placeholder="CBC ,  8-4-4 etc.." />
            </FormSpacer>
          </Form>
        </div>
      </div>
    </main>
  );
}

export function Label({ htmlFor, text }) {
  return (
    <label className="lg:text-[20px]" htmlFor={htmlFor}>
      {text}
    </label>
  );
}
export function Input({ name, type, placeholder }) {
  return (
    <input
      className="p-[10px] rounded-[10px] bg-transparent border lg:w-[300px] "
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export function FormSpacer({ children }) {
  return <div className="flex flex-col gap-[5px]">{children}</div>;
}
