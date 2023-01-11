
const Project = ({name, tech, img, link})=>{
return(
    <div onClick={()=>{window.open(link)}} className="project">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <span>{tech}</span>
    </div>
)
}

export default Project;