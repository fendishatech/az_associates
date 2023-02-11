import { GoCalendar } from "react-icons/go";
import { TfiAlarmClock, TfiMapAlt } from "react-icons/tfi";
import { SlBriefcase } from "react-icons/sl";
import { Link } from "react-router-dom";
const JobDetail = () => {
  return (
    <div
      className="container mt-5 text-dark portfolio-details"
      id="portfolio-details"
    >
      <div className="row">
        <div className="col-md-8">
          <h2>Job Overview</h2>
          <JobDescription />
        </div>
        <JobOverview />
      </div>
    </div>
  );
};

export default JobDetail;

const JobDescription = () => {
  return (
    <div className="p-2">
      <h5 className="job-highlight">Job Title</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos
        sequi voluptate cumque aliquam quam alias odit eaque ducimus dicta
        explicabo, esse obcaecati quod laudantium soluta magni expedita fugit
        distinctio! Cumque sequi quaerat iure pariatur beatae dolores, possimus
        laboriosam cupiditate non incidunt tempora inventore ducimus quae
        reprehenderit ipsum earum iusto?
      </p>
      <h5 className="job-highlight">Requirement</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos
        sequi voluptate cumque aliquam quam alias odit eaque ducimus dicta
        explicabo, esse obcaecati quod laudantium soluta magni expedita fugit
        distinctio! Cumque sequi quaerat iure pariatur beatae dolores, possimus
        laboriosam cupiditate non incidunt tempora inventore ducimus quae
        reprehenderit ipsum earum iusto?
      </p>
      <h5 className="job-highlight">Deadline</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos
        sequi voluptate cumque aliquam quam alias odit eaque ducimus dicta
        explicabo, esse obcaecati quod laudantium soluta magni expedita fugit
        distinctio! Cumque sequi quaerat iure pariatur beatae dolores, possimus
        laboriosam cupiditate non incidunt tempora inventore ducimus quae
        reprehenderit ipsum earum iusto?
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos
        sequi voluptate cumque aliquam quam alias odit eaque ducimus dicta
        explicabo, esse obcaecati quod laudantium soluta magni expedita fugit
        distinctio! Cumque sequi quaerat iure pariatur beatae dolores, possimus
        laboriosam cupiditate non incidunt tempora inventore ducimus quae
        reprehenderit ipsum earum iusto?
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos
        sequi voluptate cumque aliquam quam alias odit eaque ducimus dicta
        explicabo, esse obcaecati quod laudantium soluta magni expedita fugit
        distinctio! Cumque sequi quaerat iure pariatur beatae dolores, possimus
        laboriosam cupiditate non incidunt tempora inventore ducimus quae
        reprehenderit ipsum earum iusto?
      </p>
    </div>
  );
};

const JobOverview = () => {
  return (
    <div class="col-lg-4">
      <div class="portfolio-info">
        <h3>Job Overview</h3>
        <ul>
          <li>
            <GoCalendar size={18} />
            <strong className="mx-2">Date Posted</strong>: 01 March, 2020
          </li>
          <li>
            <TfiAlarmClock size={18} />
            <strong className="mx-2">Deadline</strong>: 01 March, 2020
          </li>
          <li>
            <TfiMapAlt size={18} />
            <strong className="mx-2">Location</strong>: Addis Ababa, Ethiopia
          </li>
          <li>
            <SlBriefcase size={18} />
            <strong className="mx-2">Job Title</strong>:{" "}
            <a href="#">Web design</a>
          </li>
          <div className="apply-btn-container">
            <Link to="/apply/2" className="apply-btn">
              Apply Now
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

// const JobOverview = () => {
//   return (
//     <div className="bg-brand p-2">
//       <div className="d-flex flex-column">
//         <OverView
//           title="Date Posted"
//           text="2 days ago"
//           icon={<GoCalendar size={32} color={"#fff"} />}
//         />
//         <OverView
//           title="Deadline"
//           text="in 4 days"
//           icon={<TfiAlarmClock size={32} color={"#fff"} />}
//         />
//         <OverView
//           title="Location"
//           text="Addis Ababa"
//           icon={<TfiMapAlt size={32} color={"#fff"} />}
//         />
//         <OverView
//           title="Job Title"
//           text="Job title"
//           icon={<SlBriefcase size={32} color={"#fff"} />}
//         />
//         <div className="container">
//           <div className="row">
//             <Link to="/apply/2" className="apply-btn text-center">
//               Apply Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const OverView = ({ title, icon, text }) => {
//   return (
//     <div className="d-flex p-2 gap-2">
//       <div className="bg-danger p-2 d-flex align-items-center">{icon}</div>
//       <div className="p-2">
//         <h6>{title}:</h6>
//         <p className="p-0">{text}</p>
//       </div>
//     </div>
//   );
// };
