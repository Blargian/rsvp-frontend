import Layout from '../components/Layout'
import Container from "../components/Layout/Container";
import LoginSignup from '../components/LoginSignup';

const Loginpage = (): JSX.Element => {
    return(
        <Layout title="Login">
            <div className="min-h-screen flex p-3 lg:p-0" style={{background:"url(/patterns/login.svg) no-repeat center center fixed", backgroundSize:"cover"}}>
                <LoginSignup/>
            </div>  
        </Layout>
    );
}

export default Loginpage;