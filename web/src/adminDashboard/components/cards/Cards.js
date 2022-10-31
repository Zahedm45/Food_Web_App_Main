import {CardsData} from "../../data/Data";
import Card from "../card/Card";
import "../cards/Cards.css"

function Cards(){
    return(
        <>
            <div className="Cards">
                {CardsData.map((card,id)=>{
                return(
                    <div className="CardContainer">
                        <Card
                            title ={card.title}
                            description ={card.description}
                            value = {card.value}
                            series = {card.series}
                        />
                    </div>

                )
                })}
            </div>
        </>
    )
}

export default Cards;