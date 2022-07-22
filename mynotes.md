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

```jsx
<!-- button.jsx -->

<button 
        className="btn"
        style={{backgroundColor: color}}
        onClick={handleClick}
            >
            {text}
        </button>
```

- app.js dosyasına bakalım. burada useState snippet'ını kullanarak ile tasklarımızı oluşturacağız. 

```jsx
// app.js
import {useState} from "react";

  // useState'i yukarıda import ediyoruz ve tasklarımızı ekliyoruz.
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      day: "Dec 12th at 2:30pm"
    },
    {
      id: 2,
      text: "Task 2",
      day: "Dec 12th at 2:30pm "
    },
    {
      id: 3,
      text: "Task 3",
      day: "Dec 12th at 2:30pm"
    },
    {
      id: 4,
      text: "Task 4",
      day: "Dec 12th at 2:30pm"
    },
  ]);
``` 

- Tasks.jsx dosyamızda componentimizi oluşturup görüntüleyeceğiz. tasklarımızı oluşturduğumuza göre şimdi Tasks.jsx dosyasına dönüp componentimizi şekillendirip app.js dosyamıza ekleyebiliriz. eklediğimiz Tasks componentine app.js dosyamızdan az önce tasklar için oluşturduğumuz state'i probs olarak göndereceğiz: ```<Tasks task={tasks}/>```

- tasks.jsx dosyamızın probs alanına {tasks}'ı girdik ve map işlemi ile bunu console'da önce sergileyelim:

```jsx
const Tasks = ({tasks}) => {
  return (
    <div>
        {
            tasks.map((task) => console.log(task.text))
        }
    </div>
  )
}
```

- ya da p tagi ile sergileyip sayfamızda görelim. ``` {tasks.map((task) => (<p>{task.text}</p>))} ```

- tekrar parçalama işlemi yapacağız. Task.jsx dosyamıza girip rafce ile componentimizi oluşturalım ve yukarıda sergilediğimiz her bir öğeyi burada manüpile edelim. başlangıç olarak şu şekilde basit bir yapı oluşturalım ve bunu tasks.jsx içerisinde çağırıp görelim.

```jsx
//task.jsx

import {FaTimesCircle} from "react-icons/fa";
// react iconsdan çektiğimiz X ikonu

const Task = () => {
  return (
    <div>
        <h3>Text <FaTimesCircle/></h3>
        <p>Day time</p>
    </div>
  )
}

export default Task
```

- task.jsx'imizdeki h3 ve p taglarne {task.text} ve {task.day} ekleyerek probumuzu göndereceğimiz alanı oluşturabiliriz.

- fakat tasks.jsx'de yazdığımız map işlemini şimdi değiştireceğiz: ``` {tasks.map((task) => ( <Task tasks={task} /> ) )} ``` böylece component'e vereceğimiz her prob için bize map işlemiyle görüntüleyecek. 

```jsx
// task.jsx son hali

import {FaTimesCircle} from "react-icons/fa";
// react iconsdan çektiğimiz X ikonu

const Task = ({task}) => {
  return (
    <div>
        <h3>{task.text} <FaTimesCircle style={{color:"red", cursor:"pointer"}}/></h3>
        <p> {task.day}</p>
    </div>
  )
}

export default Task
// -------------------------------------------
// tasks.jsx son hali

import Task from './Task'

const Tasks = ({tasks}) => {
  return (
    <div>
        {
            tasks.map((task) => (
                <Task task={task} />
            ))
        }
    </div>
  )
}

export default Tasks
```













