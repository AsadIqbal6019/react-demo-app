import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Home Page</div>
            <div>Asad Iqbal</div>
            <div>Muhammad Iqbal</div>
            <button onClick={() => navigate('order-summary', { replace: true })}>Place Order</button>
        </>
    )
}


export default Home;