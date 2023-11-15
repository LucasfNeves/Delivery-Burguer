import { PaymentMethodInput } from '../PaymentInput'
import { useFormContext } from 'react-hook-form'
import { ConfirmOrderFormData } from '../../../../../../schemas/FormAdrressSchema'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { ContainerButton } from './styled'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PayamentMethodOptions() {
  const { register } = useFormContext<ConfirmOrderFormData>()

  return (
    <ContainerButton>
      {/* object.entries pega a chave e o valor de um objeto e transforma em um array */}
      {Object.entries(paymentMethods).map(([key, { icon, label }]) => (
        <PaymentMethodInput
          id={key}
          icon={icon}
          label={label}
          key={key}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
    </ContainerButton>
  )
}
