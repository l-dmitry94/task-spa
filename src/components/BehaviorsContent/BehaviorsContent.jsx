import { useEffect, useState } from 'react';
import Styled from './BehaviorsContent.styled';
import BehaviorsContentItem from './BehaviorsContentItem';
import ContinueButton from 'components/ContinueButton';
const { BehaviorsList } = Styled;
const BehaviorsContent = ({ data }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        setIsSelected(selectedItems.length > 0);
    }, [selectedItems]);

    const handleChooseItem = item => {
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        } else {
            setSelectedItems(
                selectedItems.filter(selectedItem => selectedItem !== item)
            );
        }
    };

    const items = data.map((item, index) => (
        <BehaviorsContentItem
            key={index}
            item={item}
            items={selectedItems}
            handleChooseItem={handleChooseItem}
        />
    ));

    return (
        <>
            <BehaviorsList>{items}</BehaviorsList>
            <ContinueButton text="Continue" to="/step-4" selectedItems={selectedItems} isSelectedItems={isSelected}/>
        </>
    );
};

export default BehaviorsContent;
