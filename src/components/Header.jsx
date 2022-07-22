import Button from "./Button"

const Header = ({title}) => {
    const handleClick = () => {
        console.log("click with handle");
    }
    return (
        <div className="header">
            <h1> {title} </h1>
            {/* app.js dosyasından gelen probs */}
            <Button 
                handleClick={handleClick} 
                color="purple" 
                text="Show Add Task Bar"/>
        </div>
    )
}


// Header.defaultProbs = {
//     title: "Task Tracker"
// }
// eğer App.js içerisindeki Header componentinden title kısmını tamamen silersek
// probs'umuz bu şekilde de çalışmaya devam eder
// ya da ({title = "Task Tracker"}) şeklinde de kullanabiliriz.

export default Header