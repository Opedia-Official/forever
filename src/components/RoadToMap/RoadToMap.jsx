import "./RTM.css";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function RoadToMap() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <>
      <div className="maptoRoad_area wow fadeInUp" id="Roadmap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mapToRoad">
            <h3 className="text-center">Our Roadmap</h3>
            <VerticalTimeline>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
              {timelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
                return (
                  <VerticalTimelineElement
                    key={element.id}
                  //   date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {element.title}
                    </h3>
                  
                    <p id="description">{element.description}</p>
                  
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default RoadToMap;