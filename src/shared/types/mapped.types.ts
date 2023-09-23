interface FormFieldValues {
  firstName: string;
  lastName: string;
  age: null;
}

type MapKeyPropertyType<T, V> = {
  [Key in keyof T]: V extends "key" ? Key : V;
};

type FormFieldNames = MapKeyPropertyType<FormFieldValues, "key">;
type FormFieldErrors = Partial<MapKeyPropertyType<FormFieldValues, string>>;

const fieldNames: FormFieldNames = {
  firstName: "firstName",
  lastName: "lastName",
  age: "age",
};

const formErrors: FormFieldErrors = {};

console.log(fieldNames);

console.log(formErrors);
