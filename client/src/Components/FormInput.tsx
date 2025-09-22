import { TextField } from '@mui/material'

interface Props {
  label: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({ label, value, type, required, onChange }: Props) {
  return (
    <TextField 
      variant="outlined" 
      label={label} 
      value={value}
      type={type || "text"}
      required={required || false}
      onChange={onChange} 
      sx={{
        my: 1,
        width: "100%",
      }} />
  )
}

export default FormInput;
