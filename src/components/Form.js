import React, { useEffect, useState } from "react"
import Cards from "./Cards";
import Datas from "./Datas";


export default function EnrollmentForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        imageLink: "",
        gender: "",
        skills: []
    })
    const [card, setCard] = useState([])
    const [s, setS] = useState([])
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, [name]: value
        }), formData)
    }

    function handleSkills(e) {
        const { name, value } = e.target;
        setS([...s, value])
        console.log("updatedOBJ", formData)
    }

    useEffect(() => {
        const updateObj = { ...formData, ["skills"]: s }
        setFormData((updateObj), formData)
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [s])

    function handleSubmit(e) {
        e.preventDefault()

        const newCard = [...card, formData]
        setCard(newCard)
        setFormData({
            name: "",
            email: "",
            website: "",
            imageLink: "",
            gender: "",
            skills: []
        })
        setS([])

        const x = document.getElementsByClassName("skills");
        x[0].checked = false;
        x[1].checked = false;
        x[2].checked = false;


        document.querySelector('input[name="gender"]:checked').checked = false;
    }
    function clear(e) {
        e.preventDefault()
        setFormData({
            name: "",
            email: "",
            website: "",
            imageLink: "",
            gender: "",
            skills: []
        })
        setS([])

        const x = document.getElementsByClassName("skills");
        x[0].checked = false;
        x[1].checked = false;
        x[2].checked = false;


        document.querySelector('input[name="gender"]:checked').checked = false;

    }

    return (
        <>
            <Cards formData={formData} handleChange={handleChange} handleSkills={handleSkills} handleSubmit={handleSubmit} clear={clear} />
            <div className="card-Div">
                <Datas cards={card} />
            </div>

        </>

    )


}