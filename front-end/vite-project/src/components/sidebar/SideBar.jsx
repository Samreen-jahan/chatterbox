import SearchInput from "../SearchInput";
import LogoutButton from "./LogoutButton";
import Conversations from "./Conversations";
const Sidebar = ()=>{
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchInput/>
            <div className='divider px-3'></div>
            <Conversations/>
            <LogoutButton/>
            {/* <Conversations/>
            <LogoutButton/> */}
        </div>
    )
}



// starter code for sidebar
 export default Sidebar;

// import SearchInput from "../SearchInput";
// import LogoutButton from "./LogoutButton";
// import Conversations from "./Conversations";
// const Sidebar = ()=>{
//     return (
//         <div className='border-r border-slate-500 p-4 flex flex-col'>
//             <SearchInput/>
//             <div className='divider px-3'></div>
//             <Conversations/>
//             <LogoutButton/>
//             {/* <Conversations/>
//             <LogoutButton/> */}
//         </div>
//     )
// }
// export default Sidebar;