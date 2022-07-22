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

- npm install react-icons --save / yarn add react-icons --save ile react iconsu yükledik.

- header'ın altındaki button'u ekleyeceğiz. rafce ile button.jsx'de oluşturduk ve header.jsx'e import edip componentimizi kapsayıcı div'imizin içerisine koyduk.

- button tag'i için bir onclick verelim ve çalışıp çalışmadığını görmek için onclick={() => console.log("click")} yazıp test edelim.
- diğer bir yöntem ise Button componentinin içerisine handleClick diye bir değişken tanımlayalım ve arrow function ile clg verelim:

```jsx
const handleClick = () => {
        console.log("click with handle");
}
``` 

- fakat biz Header.jsx'den button.jsx'e probs göndererek yapacağız. amacımız button'ı reusable hale getirmek. böylece bir component içerisinde button varsa sadece probs göndererek aynı button componentini değiştirmeden kullanabileceğiz.

'''jsx
<!-- button.jsx -->

<button 
        className="btn"
        style={{backgroundColor: color}}
        onClick={handleClick}
            >
            {text}
        </button>
```









