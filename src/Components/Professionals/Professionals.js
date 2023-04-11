
import professionalsImg from '../../assets/professionals.jpg'
import './Professionals.css'
const Professionals = () => {
  return (
    <div className='pros-container'>
        <div className="pros-left">
            <img src={professionalsImg} alt="" />
        </div>
        <div className="pros-right">
            <h2><span>პროფესიონალები</span>  ზრუნავენ თქვენზე</h2>
            <p>ჩვენ გთავაზობთ პროფესიონალურ სტომატოლოგიურ მოვლას უახლესი ტექნოლოგიების გამოყენებით. ჩვენი გამოცდილი სტომატოლოგებისა და ჰიგიენისტების გუნდი მზად არის უზრუნველყოს განსაკუთრებული ზრუნვა ჩვენს პაციენტებზე.რუტინული გაწმენდა თუ რთული სტომატოლოგიური პროცედურა, ჩვენ გვაქვს გამოცდილება, რომ ჩვენი ოფისი ჯანსაღი, ლამაზი ღიმილით დატოვოთ.</p>
        </div>
    </div>
  )
}

export default Professionals