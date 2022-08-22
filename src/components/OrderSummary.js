import { useNavigate } from 'react-router-dom';

const Ordersummary = () => {

    const navigate = useNavigate();
    return (
        <>
            <div>
                Order Confirm
            </div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}

export default Ordersummary;