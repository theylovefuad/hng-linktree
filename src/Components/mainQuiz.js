import React from "react"
import { nanoid } from "nanoid";

export default function Quiz (props) {
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)
    const options = shuffle([...props.incorrect_answers, props.correct_answer])

    var allOptions = options.map(option => ({ value: option, isSelected :false, id: nanoid(),
    isCorrect: option === props.correct_answer ? true : false}));

    const [selectedOption, optionSelect] = React.useState(allOptions)

    function selectOption (id){
        optionSelect(prevOptions => {
            return prevOptions.map((prevOption) =>{
                return prevOption.id === id ? {...prevOption, isSelected : !prevOption.isSelected} : {...prevOption, 
                    isSelected:false}
            })
        })
    }
    
    const optionElements = selectedOption.map((option)=>{
        return (<ul><li><button className={option.isSelected ? `selected` : `optionButton`} onClick={
            ()=>selectOption(option.id)}>{option.value}</button></li></ul>)
    })
    
    const submittedOptionElements = selectedOption.map((option) => {
        return (<ul><li><button className={option.isCorrect ? `correct` : `incorrect`}>{option.value}</button></li></ul>)
    })
    const wrongOptionElements = selectedOption.map((option)=> {
        return(<ul><li><button className={option.isSelected ? (option.value !== props.correct_answer ? `wrong` : `correct`): `optionButton`}>{option.value}</button></li></ul>)
    } )

    function add(){
        for (let i=0;i<5; i++){
            return selectedOption.filter(option => option.isSelected && option.isCorrect).length ++ 
        }
    }
    console.log(add())
    return(
        <main>
            <div className="questions">
                <p className="question" dangerouslySetInnerHTML={{__html:props.question}}></p>
                { !props.answersCheck ? (props.isSubmitted ? wrongOptionElements : optionElements) :
                submittedOptionElements }
            </div>
        </main>
    )
}


