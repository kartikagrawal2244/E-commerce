import * as yup from "yup";

export const loginvalidation = () => {
    return yup.object().shape({
        username: yup.string().min(3).max(25).required("username is required"),
        password: yup.string()
            .required('No password provided.')
            .min(3, 'Password is too short - should be 8 chars minimum.')
        // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must be eight characters including one uppercase letter, one special character and alphanumeric characters.')
        ,
        check: yup.boolean().oneOf([true], 'You must agree to the terms and conditions')
    })
}

export const signupvalidation = () => {
    return yup.object().shape({
        username: yup.string().min(3).max(25).required("username is required"),
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must be eight characters including one uppercase letter, one special character and alphanumeric characters.'),
        confirmpassword: yup.string()
            .required('Please retype your password.').oneOf([yup.ref('password')], 'Passwords must match')

    })
}