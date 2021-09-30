import React, { useEffect, useState } from 'react'
import OrderTab from '../../components/orders/OrderTab';
import Pagination from '../../components/pagination/Pagination';
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { getOrderList } from "../../refactoredServices/orderRefactoredServices/OrderRefactoredServices"
import OrderCard from '../../components/orders/OrderCard';
import ToasterList from '../../components/toaster/ToasterList';

const Orders = () => {

    const [paginate, setPaginate] = useState();
    const [pageIndex, setPageIndex] = useState(0)
    const [tabData, setTabData] = useState();
    const [picked, setPicked] = useState('New');
    const [orderData, setOrderData] = useState([]);
    const [userName, setUserName]=useState('')
    const [toasterCount, setToasterCount] = useState(0);
    const [startDate,setStartDate]=useState('')
    const [endDate, setEndDate]=useState('');

    useEffect(() => {
        async function loadData() {
            setOrderData((await getOrderList(pageIndex, startDate, endDate, picked, setPaginate, setTabData)))
        }
        loadData();
    }, [pageIndex,picked,startDate,endDate])


    return (
        <div>
            <MainLayout>
                <h1 className="text-3xl font-normal pb-4">Siparişler</h1>
                <OrderTab tabData={tabData} setPicked={setPicked} setStartDate={setStartDate} setEndDate={setEndDate} />
                {orderData && <OrderCard orderData={orderData} setUserName={setUserName} setToasterCount={setToasterCount} setTabData={setTabData} />}
                <ToasterList toasterCount={toasterCount} setToasterCount={setToasterCount} userName={userName} />
                <Pagination paginate={paginate} setPageIndex={setPageIndex} />
            </MainLayout>
        </div>
    )
}
export default Orders
