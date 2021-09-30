import OrdersDropdown from './OrdersDropdown'
import Moment from 'react-moment';
import 'moment-timezone';

const OrderCard = ({ orderData, setUserName, setToasterCount }) => {
    return (
        <div>
            <ul className="space-y-3 mb-3">
                {orderData.map((order) => (
                    <li key={order.id} className="bg-white overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md hover:shadow-md hover:-translate-y-1 transition duration-500 ease-in-out">
                        <div className="flex flex-col items-baseline  md:flex-row flex-wrap justify-between content-center md:items-center " >
                            <div className="flex flex-col">
                                <div className="font-medium text-green-600 text-2xl" >#{order.orderNumber}</div>
                                <div className="text-sm text-gray-400 font-medium" >
                                    <Moment format="DD/MM/YYYY | HH:mm:ss ">
                                        {order.date}
                                    </Moment>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 font-medium  w-28  "><p className="text-left capitalize" >{order.customer.firstName} {order.customer.lastName}</p></div>
                            <div className="text-sm text-gray-500 font-medium w-14 ">{order.lines[0].quantity} Adet</div>
                            <div className="text-base text-gray-600 font-semibold w-3/6 sm:w-2/6 md:w-2/6 truncate" >{order.lines[0].productName} </div>
                            <div className="flex" >
                                <div className="text-base text-gray-600 font-semibold w-32 mr-28 md:mr-0" >{order.grossAmount} TL</div>
                                <OrdersDropdown orderData={orderData} orderNumber={order.orderNumber} orderName={order.customer.firstName + ' ' + order.customer.lastName} setUserName={setUserName} setToasterCount={setToasterCount}  />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default OrderCard
