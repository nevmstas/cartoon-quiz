import React from 'react'
import { Difficulty } from '../API'

import { useFormik } from 'formik';
import { SelectContainer } from '../App.styles'

type Props = {
    condition: boolean
    startTrivia: (difficulty: Difficulty)=>void
}

export const StartForm: React.FC<Props> = ({condition, startTrivia}) =>{
    const formik = useFormik({
        initialValues: {
          difficulty: '',
        },
        onSubmit: values => {
          startTrivia(values.difficulty as Difficulty)
        },
      });
    return (
        <form onSubmit={formik.handleSubmit}>
            <SelectContainer>
            {condition ? (
              <select 
                name="difficulty"
                value={formik.values.difficulty}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="custom-select">
                  <option value="" selected>All difficulties</option>
                  {Object.values(Difficulty).map(d => <option value={d}>{d}</option>)}
              </select>): null}
            </SelectContainer>
            
            {condition ? (
              <button type="submit" className="start">
                start
              </button>
             ) : null } 
        </form>
    )
}

export default StartForm
