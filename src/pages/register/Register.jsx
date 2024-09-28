import FormsRegister from '../../ui/forms-register/FormsRegister';
import bac from '../../assets/png/img.png'


const Register = () => {
  return (
    <div style={{backgroundImage: `url(${bac})`, width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <FormsRegister/>
    </div>
  )
}

export default Register
