import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import "./DentistModal.css";

export const DentistModal = ({
  opened,
  onClose,
  title,
  img,
  position,
  courses,
  education
}) => {
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
            <img src={img} alt="fev" />
            <div className="modal-left-text">
            <span className="modal-name">{title}</span>
            <span className="modal-position">{position}</span>
          </div>
          </div>
          
    
          <div className="modal-info">
            <div className="">
                <h1>განათლება</h1>
            <ul>
                       {education?.map(edu=>{
                        return(
                            <li key={edu}>{edu}</li>
                        )
                        
                                        })}
                </ul>
            </div>
            <div>
                <h1>

                კურსები და სერთიფიკატები
                </h1>
            
              
                <ul>
                       {courses?.map(course=>{
                        return(
                            <li key={course}>{course}</li>
                        )
                        
                                        })}
                </ul>
            </div>
            
            
          </div>
        </div>
      </Modal>
    </>
  );
};
