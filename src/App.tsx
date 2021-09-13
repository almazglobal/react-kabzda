import React, {useState} from 'react';
import './App.css';
import {StarType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";


function App() {

    const [value, setValue] = useState<StarType>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [on, setOn] = useState(false)
    const setStatus = (idStar: StarType) => {
        setValue(idStar)
    }
    return (
        <div>
            <OnOff onClickOnOff={setOn} statusOnOff={on} />
            <OnOff onClickOnOff={setOn} statusOnOff={on} />
            <OnOff onClickOnOff={setOn} statusOnOff={on} />
            {/*<UnControlledAccordion title={"Menu"}/>*/}
            {/*<UnControlledAccordion title={"Users"}/>*/}
            {/*<Rating value={value} setStatus={setStatus}/>*/}
            {/*<Accordion title={"Menu"}*/}
            {/*           collapsed={collapsed}*/}
            {/*           onClickHandler={() => setCollapsed(!collapsed)} />*/}
            {/*<PageTitle title={"Page title"}/>

            Article 1
            <Rating value={3}/>
            Article 2
            <Rating value={4}/>*/}
            {/*<Accordion title={"Menu"} collapsed={false}/>*/}
            {/*<Accordion title={"Users"}/>*/}

        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;
