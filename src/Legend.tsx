
import './App.css';

function Legend(){


    return( <div className='Legend'>
    <div className='LegendIcon'>25kg <div className='tile' style={{ backgroundColor: 'red' }}></div></div>
    <div className='LegendIcon'>20kg <div className='tile' style={{ backgroundColor: 'blue' }}></div></div>
    <div className='LegendIcon'>  15kg <div className='tile' style={{ backgroundColor: 'Yellow' }}></div></div>
    <div className='LegendIcon'> 10kg <div className='tile' style={{ backgroundColor: 'Green' }}></div></div>
    <div className='LegendIcon'> 5kg <div className='tile' style={{ backgroundColor: 'White' }}></div></div>
    <div className='LegendIcon'> 2.5kg <div className='tile' style={{ backgroundColor: 'Black' }}></div></div>
    <div className='LegendIcon'>  1.25kg <div className='tile' style={{ backgroundColor: 'Silver' }}></div></div>
    <div className='LegendIcon'>  2.5kg<div className='tile' style={{ backgroundColor: 'dimgray' }}></div></div>

  </div>)
}

export default Legend