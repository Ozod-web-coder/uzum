import {Text, View} from "react-native";
import {Header} from "../components/header";
import {Slider} from "../components/Slider";
import {Enter} from "../animations/enter";


const dummyData = [
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' },
    { id: 3, title: 'Title 3' },
    { id: 4, title: 'Title 4' },
    { id: 5, title: 'Title 5' }
];
export default function Home(){
    return (
        <>
            <Header/>
            <Slider/>
            <Enter/>

        </>
    )
}