import React from "react"

export default function Cards({formData,handleChange,handleSkills,handleSubmit,clear}){
    
    
    return(
        <form className="enrollForm">
            <label>Name :<input type="text" name="name" value={formData.name} onChange={handleChange} id="name"/></label><br/>
            <label>Email :<input type="email" name="email" value={formData.email} onChange={handleChange} id="email" /></label><br/>
            <label>Website :<input type="text" name="website" value={formData.website}onChange={handleChange} id="website"/></label><br/>
            <label>Image Link : <input type="text" name = "imageLink" value={formData.imageLink}onChange={handleChange} id="image"/></label><br/>
            <label>Gender : 
                <input type="radio" name="gender" onChange={handleChange} value="Male"/><label>Male</label>
                <input type="radio" name="gender" onChange={handleChange} value="Female"/><label>Female</label>
            </label><br/>
            <label>Skills : 
                <input type="checkbox" name="skills" onChange={handleSkills} value="HTML" className="skills"/><label>HTML</label>
                <input type="checkbox" name="skills" onChange={handleSkills} value="CSS" className="skills"/><label>CSS</label>
                <input type="checkbox" name="skills" onChange={handleSkills} value="Java" className="skills"/><label>Java</label>
            </label><br/>
            <button type="submit" onClick={handleSubmit} className="submit">Submit</button>
            <button type="submit" onClick={clear} className="clear">Clear</button>

        </form>
    )
}