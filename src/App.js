import logo from './logo.svg';
import './App.css';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import imagelogo from './assets/login.png';
import CommentForm from './Components/CommentForm';
import ProductForm from './Components/ProductForm';

function App() {
  return (
    <div className="App">
      {/* <div>
      <h1>Додавання коментарів</h1>
      <CommentForm />
      <h1>Додавання товарів</h1>
      <ProductForm />
      </div> */}
      <div className='flexdiv'>
      <div className='onediv'>
      <div className='blocktext'>
      <h1>Sing up</h1>
      <p>if you already have an accound register</p>
      <p >You can <span className='tetspun'>Login here !</span></p>
      </div>
     <Formik
     initialValues={{
      nameuser: '',
      firstname: '',
      numberzalik:'',
      email:'',
      password:'',
     }}
     validate={values =>{
      const errors = {};

      if (!values.nameuser){
        errors.nameuser = 'Заповніть ім’я';
      } else if (values.nameuser < 3){
        errors.nameuser = 'Ім’я, повинно мати більше ніж 3 символа';
      }

      if (!values.firstname){
        errors.firstname = 'Це поле обов’язкове';
      }else if (values.firstname > 10){
        errors.firstname = 'Прізвище не може мати більше 10 символів';
      }

      if (!values.numberzalik){
        errors.numberzalik = 'Це поле обов’язкове';
      }else if (!values.numberzalik.length > 8){
        errors.numberzalik = 'Більше 8';
      }else if (!/^\d+$/.test(values.numberzalik)){
        errors.numberzalik = 'Тільки цифри';
      }

      if (!values.email){
        errors.email = 'Це поле обов’язкове';
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Некорекнта пошта';
      }
      
      if (!values.password){
        errors.password = 'Це поле обов’язкове';
      } else if (!/[A-Z]/.test(values.password)){
        errors.password = 'Пароль має містити хоча б одну велику літеру';
      }else if (!/[^A-Za-z0-9]/.test(values.password)){
        errors.password = 'Пароль має містити хоча б один спеціальний символ'
      }
      return errors;
     }}
     onSubmit={values =>{
      console.log('submit',values);
     }} 
     >
    {({handleSubmit})=>(
      <Form onSubmit={handleSubmit} className="register">
        <label className='labelpoly'>Name</label>
        <Field name="nameuser" className='oposition' placeholder="Enter your Name" />
        <ErrorMessage name='nameuser' component="div" className='error' />

        <label className='labelpoly'>Прізвище</label>
        <Field name="firstname" className='oposition' placeholder="Enter your First Name" />
        <ErrorMessage name="firstname" component="div" className="error" />

        <label className='labelpoly'>Номер заліковки</label>
        <Field name="numberzalik" className='oposition'   placeholder="Enter your number zalik"/>
        <ErrorMessage name="numberzalik" component="div" className="error" />

        <label className='labelpoly'>Email</label>
        <Field name="email" className='oposition' placeholder="Enter your email address" />
        <ErrorMessage name="email" component="div" className="error" />

        <label className='labelpoly'>Пароль</label>
        <Field name="password" type="password" className='oposition' placeholder="Enter your Password"/>
        <ErrorMessage name="password" component="div" className="error" />

        <button type="submit" className='buttonclick'>Register</button>

      </Form>
    )}
    </Formik>
    </div>
    <div className='dvadiv'>
    <img src={imagelogo} alt="register" className='photo'/>
    </div>
    </div>
    </div>
    
  );
  
}

export default App;
