import {
  ContainerInput,
  InputWidth200,
  InputComplement,
  InputCity,
  InputSelect,
  InputRuaAndCep,
} from './styled'
import { useFormContext } from 'react-hook-form'
import { ConfirmOrderFormData } from '../../../../../../schemas/FormAdrressSchema'

export function FormAddresSection() {
  const { register } = useFormContext<ConfirmOrderFormData>()

  // const { errors } = formState as ErrorsType
  return (
    <>
      <ContainerInput>
        <InputRuaAndCep {...register('cep')} type="number" placeholder="CEP" />
      </ContainerInput>
      <ContainerInput>
        <InputRuaAndCep
          {...register('street')}
          type="text"
          id="rua"
          placeholder="Rua"
        />
      </ContainerInput>
      <ContainerInput>
        <InputWidth200
          {...register('number')}
          type="number"
          placeholder="Número"
        />
        <InputComplement
          {...register('complement')}
          type="text"
          placeholder="Complemento (Opcional)"
        />
      </ContainerInput>
      <ContainerInput>
        <InputWidth200
          {...register('district')}
          type="text"
          placeholder="Bairro"
        />
        <InputCity {...register('city')} type="text" placeholder="Cidade" />
        <InputSelect {...register('uf')} name="selectUF">
          <option value="uf">UF</option>
        </InputSelect>
      </ContainerInput>
    </>
  )
}
