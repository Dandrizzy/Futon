
const UserProfile = ({ user }) => {
 const { account, address, email, phoneNumber, name, NOK, maritalStatus, restricted } = user;
 return (
  <div className=" grid gap-4 bg-white p-3 text-slate-700">
   <div className="">
    <p className=" text-neutral-900 font-bold">{account}</p>
    <p className=" text-xs text-slate-500">Account Number</p>
   </div>
   <div className="">
    <p className=" text-neutral-900 font-bold">{name}</p>
    <p className=" text-xs text-slate-500">Account Name</p>
   </div>
   <div className="">
    <p className=" text-green-800 font-bold">{!restricted ? 'Active' : 'Restricted'}</p>
    <p className=" text-xs text-slate-500">Account Status</p>
   </div>
   <div className="">
    <p className=" text-neutral-900 font-bold">{address}</p>
    <p className=" text-xs text-slate-500">Address</p>
   </div>
   <div className="">
    <p className=" text-neutral-900 font-bold">{phoneNumber}</p>
    <p className=" text-xs text-slate-500">Phone Number</p>
   </div>
   <div className="">
    <p className=" text-neutral-900 font-bold">{email}</p>
    <p className=" text-xs text-slate-500">Email Address</p>
   </div>
   <div className="">
    <p className=" text-neutral-900 font-bold">Driver&apos;s License</p>
    <p className=" text-xs text-slate-500">Identification</p>
   </div>
   <div className="">
    <p className=" text-neutral-900 font-bold">{NOK}</p>
    <p className=" text-xs text-slate-500">Next of Kin</p>
   </div>
   <div className="">
    <p className=" text-neutral-900 font-bold">{maritalStatus}</p>
    <p className=" text-xs text-slate-500">Marital Status</p>
   </div>
  </div>
 );
};

export default UserProfile;