import { Plus, Minus } from 'phosphor-react'
import { Container, IconWrapper } from './styled'

interface QuantityInputProps {
  onIncrise: () => void
  onDecrise: () => void
  quantity: number
}
export function QuantityInput({
  onIncrise,
  onDecrise,
  quantity,
}: QuantityInputProps) {
  return (
    <Container>
      <IconWrapper disabled={quantity === 1} onClick={onDecrise}>
        <Minus weight="bold" />
      </IconWrapper>
      <span>{quantity}</span>
      <IconWrapper onClick={onIncrise}>
        <Plus weight="bold" />
      </IconWrapper>
    </Container>
  )
}
