import Header from '../Header/header';
import './Landing.css';
import PieChartWithCustomizedLabel from './Piechart/piechart';
import TriggerFocusTextarea from './TextArea/textArea';

const Landing=()=>{
    return (
        <div>
        <Header/>
        <div className='discharge-summary'>
                        <p className='discharge-summary-title'><strong>Overall Satisfaction</strong></p>
                        <div className='discharge-summary-data-div-1'>
                            <PieChartWithCustomizedLabel/>
                        </div>

                    </div>
                    <div className='discharge-summary'>
                        <p className='discharge-summary-title'><strong>Remarks*</strong></p>
                        <div className='text-area-data-div'>
                            <TriggerFocusTextarea/>
                        </div>

                    </div>
        </div>
    );

}
export default Landing;