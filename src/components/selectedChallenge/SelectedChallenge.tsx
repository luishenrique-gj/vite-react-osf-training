
import { challengeList } from '../../constants/challengeOptions';
import './SelectedChallenge.css';

const SelectedChallenge = ({selectedChallengeKey}:{selectedChallengeKey: string}) => {
    return ( 
        <div className='SelectedChallenge'>
            <div>
                <h2>Selected Challenge</h2>
            </div>
            {challengeList.map((challenge) => {
                if (challenge.key === selectedChallengeKey) {
                    return challenge.component()
                }
                return null;
            })}
        </div>
    );
}
 
export default SelectedChallenge;