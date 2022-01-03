import { useState, useEffect } from "react"

/*


*/

const useForm = (callback, validate = undefined) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmiting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
      setValues({})
    } else {
      setIsSubmiting(false)
    }
  // }, [errors, isSubmitting, callback])
  }, [errors, isSubmitting])

  const handleChange = e => {
    e.persist()
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = event => {
    if (event) event.preventDefault()
    setErrors(validate !== undefined ? validate(values) : {})
    setIsSubmiting(true)
  }

  return {
    values,
    setValues,
    handleChange,
    onSubmit,
    errors,
    isSubmitting,
    setIsSubmiting,
  }
}

export default useForm
