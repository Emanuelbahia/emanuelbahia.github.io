
import { Formik, Form, Field } from "formik"
import "./register.css"
import * as yup from "yup"

function Register() {

     // const auroraPicture =  new URL("../../assets/images/lago.jpg", import.meta.url) 

    const validationSchema = yup.object().shape({
          name: yup
                .string()
                .min(2, "too short!")
                .max(30, "too long!")
                .required("required"), 
          surname: yup
                .string()
                .min(2, "too short!")
                .max(30, "too long!")
                .required("required"), 
          email: yup
                .string()
                .email("format invalid"),
          password: yup
                .string()
                .min(8, 'Password must be 8 characters long')
                .matches(/[0-9]/, 'Password requires a number')
                .matches(/[a-z]/, 'Password requires a lowercase letter')
                .matches(/[A-Z]/, 'Password requires an uppercase letter')
                .matches(/[^\w]/, 'Password requires a symbol'),
          confirmPassword: yup
                .string()
                .oneOf([yup.ref('password'), null], 'Must match "password" field value'),
                //esto lo hago para q coincidan las 2 contraseñas
    })


    return ( 

        <div className="register-body">
              
           
            <Formik 

            initialValues={{
                name: "",
                surname: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            //el validateOnChange sirve para q validacion la haga cuando apretas afuera del input y no cuando lo estas completando
            validateOnChange

            validationSchema={validationSchema}

            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
                {({ errors, touched }) => (
                  <Form className="form-register"  >
                        <div className="flex-labels">
                              <div className="width-labels">
                                    <label className="label-register" htmlFor="name" >Name: </label>
                                    <Field className="field-register" type="text" id="name" name="name" placeholder="juan" />
                                    { errors.name && touched.name && <p className="p-error">{ errors.name }</p> }
                              </div>
                              <div className="width-labels">
                                    <label className="label-register" htmlFor="surname" >Surname: </label>
                                    <Field className="field-register" type="text" id="surname" name="surname" placeholder="garcia" />
                                    { errors.surname && touched.surname && <p className="p-error">{ errors.surname }</p> }
                              </div>
                              <div className="width-labels">
                                    <label className="label-register" htmlFor="email" >Email: </label>
                                    <Field className="field-register" type="email" id="email" name="email" placeholder="juangarcia@gmail.com" />
                                    { errors.email && touched.email && <p className="p-error">{ errors.email }</p>  }
                              </div>
                              <div className="width-labels">
                                    <label className="label-register" htmlFor="password" >Password:</label>
                                    <Field className="field-register" type="password" id="password" name="password" />
                                    { errors.password && touched.password && <p className="p-error">{ errors.password }</p>  }
                              </div>
                              <div className="width-labels">
                                    <label className="label-register" htmlFor="confirmPassword" >Confirm password:</label>
                                    <Field className="field-register" type="password" id="confirmPassword" name="confirmPassword" />
                                    { errors.confirmPassword && touched.confirmPassword && <p className="p-error">{ errors.confirmPassword }</p>  }
                              </div>
                        </div>
                        <button className="button-register" type="submit">Register</button>
                  </Form>
                )}
               
            </Formik>   
            <img className="img-aurora" src= { "https://ipparaguay.com.py/wp-content/uploads/2022/10/Islas-Maldivas-donde-queda.jpg" } />   
      </div>
     );
}

export default Register;