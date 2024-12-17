import { useNavigate } from 'react-router-dom'

const Landing = () => {

    const navigate = useNavigate();
    const handleGetStarted = () => {
        return navigate('/register');
    }


  return (
<>
        <div >
            <p>Welcome to kambere</p>
        </div>

        <button
        className=''
        onClick={handleGetStarted}
        >Get started</button>

        </>
  )
}

export default Landing

