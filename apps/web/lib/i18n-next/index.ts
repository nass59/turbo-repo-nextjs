import messages from "@/locales/en.json"
import { createTranslator } from "next-intl"

// This creates the same function that is returned by `useTranslations`.
// Since there's no provider, you can pass all the properties you'd
// usually pass to the provider directly here.
export const t = createTranslator({ locale: "en", messages })
