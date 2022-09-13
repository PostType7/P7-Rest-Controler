# P7-State-Form
Ultra light form helper based on pure react methods (0.1Kb)

# Instal

`yarn add p7-state-form`

# Usage 

InputComponent.tsx
```
import { formGet, formSet } from "p7-state-form";
interface Props {
  form?: any;
  type?: string;
}
export const InputComponent: React.FC<Props> = ({
  form,
  type = "text",
}) => {
  return (
      <input
        id={form[0]}
        onChange={(e) => formSet(form, e )}
        defaultValue={formGet(form)}
        type={type}
      />
  );
};
```

Page.tsx

```
interface FormDataType {
    identifier: string;
    password: string;
}

const [formData, setFormData] = useState<FormDataType>({
    identifier: "",
    password: "",
});

const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('formData', formData)
}

return (
    <form onSubmit={onSubmitHandler}>

        <label>Identifier</label>
        <InputComponent form={["identifier", formData, setFormData]} />

        <label>Identifier</label>
        <InputComponent form={["password", formData, setFormData]} />

    </form>
)
```

#NPM
https://www.npmjs.com/package/@dadmor/p7-state-form

module created by:
https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/


