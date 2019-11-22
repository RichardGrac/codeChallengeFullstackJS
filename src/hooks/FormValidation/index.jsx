import {useState, useEffect} from 'react'

const useFormValidation = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const [error, setFormError] = useState({status: false, message: null})
    const [hasBeenTouch, setHasBeenTouch] = useState(false)

    useEffect(() => {
        let error
        let touched = true

        if (value.trim().length <= 0 && hasBeenTouch) error = 'Length must be greater than 0'
        else if (value.trim().length > 20) error = 'Please, don\'t exceed the 20 characters'

        if (error && touched) setFormError({status: true, message: error})
        else setFormError({status: false, message: null})

        setHasBeenTouch(touched)

    }, [value])

    return [value, setValue, error, setHasBeenTouch]
}

export default useFormValidation
