import { Outlet } from "react-router-dom"


export function Pages ( ){
    return (
        <div className="bg-light py-3">
            <div className="bg-white container">
                <Outlet />
            </div>
        </div>
    )
}