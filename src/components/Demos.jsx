import { Card } from "./Card";
import logoAE86 from '../assets/alexestudio86.svg';
import { dataDemos } from './dataDemos.js'


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
                { dataDemos.map( (demo, index) => (
                    <Card
                        key         =   {index}
                        title       =   {demo.title}
                        description =   {demo.description}
                        link        =   {demo.link}
                    />
                )) }
            </div>
        </div>
    )
}