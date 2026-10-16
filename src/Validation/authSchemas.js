import { Password } from "@mui/icons-material"
import * as yup from "yup"
export const registerSchema =yup.object ({
    fullName: yup.string().required('Full Name is required..').min(3,'Full Name must be at least 3 char'),
    userName: yup.string().required('User Name is required..').min(6,'User Name must be at least 6 char'),
    email: yup.string().required('Email Is Required').email('Invalid Emal Format'),
    password: yup.string().required('Password Is Required').min(6,'Password must be at least 6 char')
    .matches('/[A-Z]/','Must contain an uppercase letter')

})