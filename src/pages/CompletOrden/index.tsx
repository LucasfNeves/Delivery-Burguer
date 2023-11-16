import { useNavigate } from 'react-router-dom'
import {
  ConfirmOrderFormData,
  confirmOrderFormValidationSchema,
} from '../../schemas/FormAdrressSchema'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { ShoppingCarSection } from './components/ShoppingCarSection'
import { FormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

export function ShoppingCars() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/CheckoutScreen', {
      state: data,
    })
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
