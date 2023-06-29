import BackofficeLayout from "@/Layouts/BackofficeLayout";
import {OrderTable} from "@/Pages/Backoffice/Order/OrderTable";
import {OrderDetailProvider} from "@/Pages/Backoffice/Order/OrderDetailProvider";
import {OrderDetailModal} from "@/Pages/Backoffice/Order/OrderDetailModal";

const List = () => {
    return (
        <BackofficeLayout>
            <OrderDetailProvider>
                <OrderTable/>
                <OrderDetailModal/>
            </OrderDetailProvider>
        </BackofficeLayout>
    );
};
export default List;
