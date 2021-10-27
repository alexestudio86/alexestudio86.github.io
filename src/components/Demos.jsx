import { Card } from "./Card";
import logoAE86 from '../assets/alexestudio86.svg';


export function Demos ( ) {
    return (
        <div className='w3-display-middle bg-white' style={ {width: '80%'} }>
            <div className="row m-0 p-2">
                <div className="col-md-2">
                    { /* For image use height */}
                    <img className="w3-left" src={logoAE86} alt="Logo AE86" width='auto' height='50px' />
                </div>
                <div className="col-md-10">
                    <h1 className="w3-center bg-secondary rounded-pill p-1 text-white">My Work</h1>
                </div>
            </div>
            <div className="row m-0">
                <Card
                    title       =   "CAD Grupo Constructor"
                    description =   'x'
                    link        =   'CADGrupoConstructor'
                />
                <Card
                    title       =   'Nortathem'
                    description =   'x'
                    link        =   'nortathem' 
                />
                <Card
                    title       =   'Offer Online'
                    description =   'x'
                    link        =   'offerOnline'
                />
                <Card
                    title       =   'Restaurantes'
                    description =   'x'
                    link        =   'restaurantes'
                />
            </div>
        </div>
    )
}