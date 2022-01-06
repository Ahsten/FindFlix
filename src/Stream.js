
export default function StreamProvider(props){

    const imgURL = "https://image.tmdb.org/t/p/original";


    return(
        <div className="service">
            <img src={imgURL+props.logo} alt="Movie"/>
        </div>
    )
}