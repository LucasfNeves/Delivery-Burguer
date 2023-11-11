import { MapPinLine } from 'phosphor-react'
import {
  ContainerInput,
  InputWidth200,
  InputComplement,
  InputCity,
  InputSelect,
  SectionFormAddress,
  FillYourRequestContainer,
  TitleSectionFormAddress,
  InputRuaAndCep,
} from './styled'
import { SectionPayment } from '../FormPayment'

export function FormCompledYourRequest() {
  return (
    <FillYourRequestContainer>
      <SectionFormAddress>
        <TitleSectionFormAddress>
          <span>
            <MapPinLine />
            <p>Endereço de Entrega</p>
          </span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </TitleSectionFormAddress>
        <ContainerInput>
          <InputRuaAndCep type="number" placeholder="CEP" />
        </ContainerInput>
        <ContainerInput>
          <InputRuaAndCep type="text" id="rua" placeholder="Rua" />
        </ContainerInput>
        <ContainerInput>
          <InputWidth200 type="number" placeholder="Número" />
          <InputComplement type="text" placeholder="Complemento (Opcional)" />
        </ContainerInput>
        <ContainerInput>
          <InputWidth200 type="text" placeholder="Bairro" />
          <InputCity type="text" placeholder="Cidade" />
          <InputSelect name="selectUF">
            <option value="uf">UF</option>
          </InputSelect>
        </ContainerInput>
      </SectionFormAddress>
      <SectionPayment />
    </FillYourRequestContainer>
  )
}
