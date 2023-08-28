import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import "./styles.css";

const Subscription = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <h2 className="subscription-title">Subcribe to promotion</h2>
                        <div className="margin-top margin-botton">
                            <Card title="SUBSCRIPTION page"></Card>
                            <div className="display-flex">
                                <Link to="/promotion">
                                    <Button message={'See Promotions'}></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Subscription;