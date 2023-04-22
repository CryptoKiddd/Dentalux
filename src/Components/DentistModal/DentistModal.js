import { Modal} from "@mantine/core";
import "./DentistModal.css";
import { useState } from "react";

export const DentistModal = ({
  opened,
  onClose,
  title,
  img,
  position,
  courses,
  education
}) => {
  const [modalInfo, setModalInfo] = useState(false)  
 
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        fullScreen
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <div className="modal-wrapper">
        
          <div className="modal-left"> 
          <div className="modal-options">
            <p style={{borderBottom:`${!modalInfo?'1px solid rgb(103, 210, 243)':'none'}`}} onClick={()=>setModalInfo(false)} >განათლება</p>
            <p style={{borderBottom:`${modalInfo?'1px solid rgb(103, 210, 243)':'none'}`}} onClick={()=>setModalInfo(true)} >კურსები და სერთიფიკატები</p>
          </div > 
            <img src={img} alt="fev" />
            <div className="modal-left-text">
            <span className="modal-name">{title}</span>
            <span className="modal-position">{position}</span>
          </div>
         
          </div>
          
    
          <div className="modal-info">
        
          {
            !modalInfo &&  <div className="">
             <h1>განათლება</h1>
            <ol className="course-list">
                   {education?.map(edu=>{
                    return(
                        <li  key={edu}>{edu}</li>
                    )
                    
                                    })}
            </ol>
        </div>
          }
          {
            modalInfo && <div>
            <h1>

            კურსები და სერთიფიკატები
            </h1>
        
          
            <ol className="course-list">
                   {courses?.map(course=>{
                    return(
                        <li key={course}>{course}</li>
                    )
                    
                                    })}
            </ol>
        </div>
          }
           
            
            
            
          </div>
        </div>
      </Modal>
    </>
  );
};
