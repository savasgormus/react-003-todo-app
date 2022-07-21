
const Header = ({title}) => {
    return (
        <div>
            <h1> {title} </h1>
            {/* app.js dosyasından gelen probs */}
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