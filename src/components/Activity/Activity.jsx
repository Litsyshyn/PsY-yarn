import React from "react";
import "./Activity.scss";
import "/home/kea/Downloads/psycounseling-front/src/components/App/App.css";
import trauma from "/home/kea/Downloads/psycounseling-front/src/assets/img/trauma.png";
import family from "/home/kea/Downloads/psycounseling-front/src/assets/img/family.png";
import child from "/home/kea/Downloads/psycounseling-front/src/assets/img/child.png";


const Activity = () => {
    return (
        <div className="activity">
            <h1 className="activity-h1">Сфери діяльності Асоціації</h1>
            <div className="grid-container">
                <div className="grid-container-element">
                    <img className="activity-pic-trauma" src={trauma} alt=""/>
                </div>
                <div className="grid-container-element">
                    <img className="activity-pic-family" src={family} alt=""/>
                </div>
                <div className="grid-container-element">
                    <img className="activity-pic-child" src={child} alt=""/>
                </div>
                <div className="grid-container-element">
                    <p className="activity-under-pics">Травмотерапія</p>
                </div>
                <div className="grid-container-element">
                    <p className="activity-under-pics">Сімейне консультування</p>
                </div>
                <div className="grid-container-element">
                    <p className="activity-under-pics">Консультування дітей та підлітків</p>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
};

export default Activity;
