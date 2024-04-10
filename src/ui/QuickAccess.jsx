import { FaBitcoin, FaHandHoldingHeart, FaMoneyBillTransfer, FaMoneyCheck, FaPaypal, FaTicket, FaWallet } from "react-icons/fa6";
import { SiZelle } from "react-icons/si";

const QuickAccess = () => {
 return (
  <div className=" text-slate-500 grid grid-cols-4 gap-2 ">
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaMoneyBillTransfer className=" size-10" />
    <p className=" text-xs font-bold pt-2">Transfer Money</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <SiZelle className=" size-10" />
    <p className=" text-xs font-bold pt-2 text-center ">Send Money with Zelle</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaMoneyCheck className=" size-10" />
    <p className=" text-xs font-bold pt-2">Deposit Check</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaHandHoldingHeart className=" size-10" />
    <p className=" text-xs font-bold pt-2">Donate</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaTicket className=" size-10" />
    <p className=" text-xs font-bold pt-2">Pay Bills</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaWallet className=" size-10" />
    <p className=" text-xs font-bold pt-2">Wallet</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaPaypal className=" size-10" />
    <p className=" text-xs font-bold pt-2">PayPal</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FaBitcoin className=" size-10" />
    <p className=" text-xs font-bold pt-2">Bitcoin</p>
   </div>

  </div>
 );
};

export default QuickAccess;