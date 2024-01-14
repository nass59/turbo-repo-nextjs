import { type Control } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@shared/ui"

type Props = {
  labels: {
    name: string
    label: string
    placeholder: string
  }
  loading?: boolean
  control: Control<any>
}

export const InputField = ({ labels, loading, control }: Props) => {
  return (
    <FormField
      control={control}
      name={labels.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{labels.label}</FormLabel>
          <FormControl>
            <Input
              disabled={loading}
              placeholder={labels.placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
