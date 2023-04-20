import { dentists } from "../../constants";
import Dentist from "../Dentist/Dentist";
import "./Dentists.css";

const Dentists = () => {
  return (
    <div className="dentists-container">
      <div className="dentists-wrapper">
        <div className="dentists-header">
          <h1>ჩვენი გუნდი</h1>
          <p>
            ჩვენი სპეციალისტები ყოველწლიურად მონაწილეობენ და ცოდნას იმაღლებენ
            სხვადასხვა ადგილობრივ თუ საერთაშორისო კონგრესებზე და მასტერკლასებზე,
            საიდანაც მიღებული დარგის სიახლეები სწრაფადვე ინერგება ჩვენს
            ყოველდღიურ საქმიანობაში.
          </p>
        </div>
        
      </div>
      <div className="dentists-list">
          <div className="dentists-list-wrapper">
            {dentists.map((dentist) => {
              return <Dentist key={dentist.name} {...dentist} />;
            })}
          </div>
        </div>
    </div>
  );
};

export default Dentists;
