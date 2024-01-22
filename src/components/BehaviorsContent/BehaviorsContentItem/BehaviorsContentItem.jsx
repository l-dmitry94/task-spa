import Styled from "./BehaviorsContentItem.styled";

const {BehaviorItem, BehaviorText} = Styled;
const BehaviorsContentItem = ({item, items, handleChooseItem}) => {
    return (
        <BehaviorItem onClick={() => handleChooseItem(item.text)} selected={items.includes(item.text)}>
            <img src={item.image} alt={item.text} />
            <BehaviorText>{item.text}</BehaviorText>
        </BehaviorItem>
    )
}

export default BehaviorsContentItem;