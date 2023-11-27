import './header.css';
import { Demos } from './Demos';


export function Header ( ){
    return (
        <header className='w3-row parallax'>
            <div className='black-transparent-medium' style={ {width:'100%', height:'100%'} }>
                <div className="container">
                    <div className='w3-display-container' style={ {height: '100vh'} }>
                        <Demos />
                    </div>
                </div>
            </div>
        </header>
    )
}