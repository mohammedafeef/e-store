import TextField from "@mui/material/TextField";

export default function TextInput({ formik, ...props }) {
  return (
    <TextField
      {...props}
      onChange={formik.handleChange}
      value={formik.values[props.name]}
      error={formik.errors[props.name] ? true : false}
      helperText={formik.errors[props.name] ? formik.errors[props.name] : null}
    />
  );
}
