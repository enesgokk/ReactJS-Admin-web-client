const axios = require('axios');

export async function getOrderList(pageIndex, startDate, endDate, picked, setPaginate, setTabData) {
    try {
        const { data } = await axios.get(`https://localhost:44368/api/Orders/getOrderList?PageIndex=${pageIndex}&PageSize=20&${startDate}&${endDate}&Status=${picked}`);
        setPaginate(data.totalPages)
        setTabData(data)
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export async function createSalesInvoice(orderNumber) {
    await axios.post(`https://localhost:44368/api/Invoices/createSalesInvoice?orderNumber=${orderNumber}`, { orderNumber })
        .then(function (response) {
            console.log(response);
            //setToasterCount(1);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export async function addOrdersFromTrendyol(trendyolPostSize) {
    await axios.post(`https://localhost:44368/api/Orders/addOrdersFromTrendyol?Size=${trendyolPostSize}`, { trendyolPostSize })
        .then(function (response) {
            console.log("trendyol orders:", response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default { getOrderList, createSalesInvoice, addOrdersFromTrendyol }