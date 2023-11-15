// FormAdrressSchema.ts
import * as zod from 'zod'

export const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.string().min(1, 'Selecione uma forma de pagamento')
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

export type ConfirmOrderFormData = OrderData
