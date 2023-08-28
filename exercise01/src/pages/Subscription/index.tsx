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
                                    <Button message={'See Promotions'}></Button>
                                </div>                          
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Subscription;