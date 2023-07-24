import tooth5 from '../../assets/tooth5.png'

import './AboutCompany.css'

export const AboutCompany = () => {
  return (
    
    <div className='about-page-container'>
        <div className="about-page-wrapper">
        <h1>ჩვენს შესახებ</h1>
        <p className='about-us-p'>ჩვენი კომპანია შპს დენტალუქსი დაარსდა 2001 წელს ქალაქ ბათუმში, პირველი კერძო სტომატოლოგიური კლინიკა. დღეს უკვე 22 წლიანი გამოცდილების მქონე დაწესებულება აერთიანებს ქალაქ ბათუმში 3 სტომატოლოგიურ კლინიკას და დიპლომის შემდგომ განათლების ცენტრს. ჩვენ ვამაყობთ ჩვენი კლინიკის სპეციალისტთა გუნდის მდიდარი გამოცდილებითა და პროფესიონალიზმით, ასევე უახლოესი ტექნოლოგიებით აღჭურვილი კლინიკების ქსელით.</p>
        <p className='about-us-p'>ჩვენ პაციენტებს ვთავაზობთ  სტომატოლოგიური მომსახურების ფართო სპექტრს, დაწყებული პირის ღრუს პროფილაქტიკური მოვლიდან ესთეტიკურ სტომატოლოგიასა და დენტალურ იმპლანტოლოგიამდე. </p>
        <p className='about-us-p'>ჩვენი პრიორიტეტებია პაციენტთან ინდივიდუალური მიდგომა, მყუდრო და კომფორტული გარემო. ჩვენი გუნდი ყოველთვის მზადაა უპასუხოს პაციენტების შეკითხვებს და გააგებინოს კბილის მკურნალობასთან დაკავშირებული ყველა პროცედურა. ჩვენ ვაფასებთ პაციენტის დროს და ვთავაზობთ ონლაინ ჩაწერებუს მოქნილ სისტემას.</p>
        <p className='about-us-p'>პაციენტებს ვთვაზობთ გრძელვადიან პარტნიორობას და გარანტიას ვაძლევთ ვიზიტი გავხადოთ სასაიამოვნო და მოსახერხებელი, და რაც მთავარია თავი იგრძნონ დაცულად, რის გარანტიასაც იძლევა კლინიკის პროფესიონალი ექსპერტთა გუნდი.</p>
        </div>
        <div className="about-page-stats">
            <div className="about-stat">
                <h2>15</h2>
                <span>სტომატოლოგი</span>
            </div>
            <div className="about-stat">
                <h2>3</h2>
                <span>ფილიალი</span>
            </div>
            <div className="about-stat">
                <h2>5000+</h2>
                <span>კმაყოფილი მომხმარებელი</span>
            </div>
            {/* <img src={tooth5} alt="tooths" className='tooth5' /> */}
        </div>
        <div className='about-filler'></div>

    </div>
  )
}

