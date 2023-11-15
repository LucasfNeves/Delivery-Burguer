import {
  ContainerInput,
  InputWidth200,
  InputComplement,
  InputCity,
  InputSelect,
  InputRuaAndCep,
  InputWrapper,
} from './styled'
import { useFormContext } from 'react-hook-form'
import { ConfirmOrderFormData } from '../../../../../../schemas/FormAdrressSchema'

export function FormAddresSection() {
  const { register, formState } = useFormContext<ConfirmOrderFormData>()

  const { errors } = formState
  return (
    <>
      <ContainerInput>
        <InputWrapper>
          <InputRuaAndCep
            {...register('cep')}
            type="number"
            placeholder="CEP"
          />
          {errors.cep && <p>{errors.cep.message}</p>}
        </InputWrapper>
      </ContainerInput>
      <ContainerInput>
        <InputWrapper>
          <InputRuaAndCep
            {...register('street')}
            type="text"
            id="rua"
            placeholder="Rua"
          />
          {errors.street && <p>{errors.street.message}</p>}
        </InputWrapper>
      </ContainerInput>
      <ContainerInput>
        <InputWrapper>
          <InputWidth200
            {...register('number')}
            type="number"
            placeholder="Número"
          />
          {errors.number && <p>{errors.number.message}</p>}
        </InputWrapper>
        <InputComplement
          {...register('complement')}
          type="text"
          placeholder="Complemento (Opcional)"
        />
      </ContainerInput>
      <ContainerInput>
        <InputWrapper>
          <InputWidth200
            {...register('district')}
            type="text"
            placeholder="Bairro"
          />
          {errors.district && <p>{errors.district.message}</p>}
        </InputWrapper>
        <InputWrapper>
          <InputCity {...register('city')} type="text" placeholder="Cidade" />
          {errors.city && <p>{errors.city.message}</p>}
        </InputWrapper>
        <InputWrapper>
          <InputSelect {...register('uf')} type="text" placeholder="UF" />
          {errors.uf && <p>{errors.uf.message}</p>}
        </InputWrapper>
      </ContainerInput>
    </>
  )
}
