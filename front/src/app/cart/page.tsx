import CartDetail from "../components/CartDetail/CartDetail";
import AuthProtected from "../components/AuthProtected/AuthProtected";

const cartPage = () => {
    return (
        <AuthProtected>
            <CartDetail/>
        </AuthProtected>
    );
};

export default cartPage;