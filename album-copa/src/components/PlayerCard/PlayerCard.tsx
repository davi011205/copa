import type {Player}  from "../../models/Player";
import "./PlayerCard.css";

interface Props {
  player: Player;
}
const PlayerCard = ({ player }: Props) => {
    return (
        <div className='card'>
            <div className="card-header">
                <div className="player-position">{player.position}</div> 
            </div>

            <div className="card-image-container">
                <img src={player.image} alt="Jogador" className="card-image" />
            </div>

            <div className="card-footer">
                <div className="player-name">{player.name}</div>
                <div className="player-team">{player.country}</div>
            </div>
        </div>
    );
};

export default PlayerCard;