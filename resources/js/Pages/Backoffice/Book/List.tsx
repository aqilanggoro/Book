import BackofficeLayout from "@/Layouts/BackofficeLayout";
import {BookTable} from "@/Pages/Backoffice/Book/book-table";
import {BookFilter} from "@/Pages/Backoffice/Book/book-filter";

const List = () => {
    return (
        <BackofficeLayout>
            <BookFilter/>
            <BookTable/>
        </BackofficeLayout>
    );
};
export default List;
