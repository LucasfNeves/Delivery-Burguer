import {
  ConfirmOrderFormData,
  confirmOrderFormValidationSchema,
} from '../../schemas/FormAdrressSchema'
import { CompleteOrderForm } from './components/FormAddresSection'
import { ShoppingCarSection } from './components/ShoppingCarSection'
import { FormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

export function ShoppingCars() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <FormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <ShoppingCarSection />
      </FormContainer>
    </FormProvider>
  )
}
