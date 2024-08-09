
import './BoxAnimation.scss';

//colors: purple, blue, white
//sizes: lg, md, sm

export default function BoxAnimation ({color, size}) {


    return (
    <div className={`box-container ${color} ${size}`}>
        <div className="box op0 smNoShow"></div>
        <div className="box d3 smNoShow"></div>
        <div className="box d4 smNoShow"></div>
        <div className="box medium-color d4 smNoShow mdNoShow"></div>
        <div className="box op0 smNoShow"></div>
        <div className="box op0 smNoShow"></div>
        <div className="box op0 smNoShow"></div>
        <div className="box op0 smNoShow"></div>
        <div className="box medium-color d3 smNoShow"></div>
        <div className="box medium-color d3 smNoShow"></div>
        <div className="box dark-color d4 smNoShow"></div>
        <div className="box dark-color d4 smNoShow"></div>
        <div className="box dark-color d5 smNoShow mdNoShow"></div>
        <div className="box op0 smNoShow"></div>
        <div className="box medium-color d2 smNoShow"></div>
        <div className="box dark-color d2 smNoShow"></div>
        <div className="box dark-color d3 smNoShow"></div>
        <div className="box dark-color d3 smNoShow"></div>
        <div className="box dark-color d4 smNoShow mdNoShow"></div>
        <div className="box dark-color d4 smNoShow"></div>
        <div className="box medium-color d5 smNoShow mdNoShow"></div>
        <div className="box dark-color d1 smNoShow mdNoShow"></div>
        <div className="box dark-color d2 smNoShow"></div>
        <div className="box dark-color d2 smNoShow"></div>
        <div className="box dark-color d3 smNoShow"></div>
        <div className="box dark-color d3 smNoShow"></div>
        <div className="box medium-color d4 smNoShow mdNoShow"></div>
        <div className="box op0 smNoShow mdNoShow"></div>
        <div className="box op0 smNoShow mdNoShow"></div>
        <div className="box dark-color d1"></div>
        <div className="box dark-color d2"></div>
        <div className="box dark-color d2 mdNoShow"></div>
        <div className="box medium-color d3 mdNoShow"></div>
        <div className="box op0 mdNoShow"></div>
        <div className="box op0 mdNoShow"></div>
        <div className="box op0 mdNoShow"></div>
        <div className="box op0 mdNoShow"></div>
        <div className="box op0 mdNoShow"></div>
        <div className="box medium-color d2 mdNoShow"></div>
        <div className="box d2 smNoShow mdNoShow"></div>
        <div className="box op0 mdNoShow"></div>
        <div className="box op0 mdNoShow"></div>
    </div>
    )
}