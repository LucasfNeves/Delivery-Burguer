import { useNavigate } from 'react-router-dom'
import {
  ConfirmOrderFormData,
  confirmOrderFormValidationSchema,
} from '../../schemas/FormAdrressSchema'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { ShoppingCarSection } from './components/ShoppingCarSection'
import { Container, FormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function ShoppingCars() {
  const { clearCart } = useContext(CartContext)
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/CheckoutScreen', {
      state: data,
    })

    clearCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <Container>
        <FormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
          <CompleteOrderForm />
          <ShoppingCarSection />
        </FormContainer>
      </Container>
    </FormProvider>
  )
}
