import { useUser } from 'hooks/UserContext';
import Styled from './UserInfo.styled';

const { UserInfoList, UserInfoItem } = Styled;

const UserInfo = () => {
    const { userInfo } = useUser();
    const {
        goal,
        heightFt,
        weightFt,
        heightCm,
        weightCm,
        selectedItems,
        exercise,
    } = userInfo;

    return (
        <>
            <UserInfoList>
                <UserInfoItem>
                    <b>Goal: </b>
                    {goal}
                </UserInfoItem>

                <UserInfoItem>
                    <b>Height: </b>
                    {`${heightFt || heightCm} ${heightFt ? 'ft' : 'cm'}`}
                </UserInfoItem>

                <UserInfoItem>
                    <b>Weight: </b>
                    {`${weightFt || weightCm} ${weightFt ? 'ft' : 'cm'}`}
                </UserInfoItem>

                <UserInfoItem>
                    <b>Behaviors: </b>
                    {selectedItems.join(', ')}
                </UserInfoItem>

                <UserInfoItem>
                    <b>Exercises: </b>
                    {exercise}
                </UserInfoItem>
            </UserInfoList>
        </>
    );
};

export default UserInfo;
