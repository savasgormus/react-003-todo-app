- component yapımız için klasörlerimizi oluşturarak başlıyoruz:
- AddTask, Task, Tasks, Button, Header.jsx dosyalarını oluşturduk.

- Header.jsx içerisine rafce ile fonksiyonumuzu oluşturduk. ve app.js dosyamıza import ettik. bu componentimizde farklı bişey deneyeceğiz. App.js dosyasındaki header componentine title="TASK TRACKER" yazdık. 
- Header.jsx dosyasında da arrow func içerisine {title} yazarak probs gönderdik. böylece div içerisinde h1 taginde {title} yazdığımızda app.js dosyasında verdiğimiz title ne ise o görüntülenecek.

```jsx
// components/Header.jsx

const Header = ({title}) => {
    return (
        <div>
            <h1> {title} </h1>
        </div>
    )
}

Header.defaultProbs = {
    title: "Task Tracker"
}
// eğer App.js içerisindeki Header componentinden title kısmını tamamen silersek
// probs'umuz bu şekilde de çalışmaya devam eder
// ya da ({title = "Task Tracker"}) şeklinde de kullanabiliriz.

export default Header
```








