import { Item, BodyText } from './PublicationsItem.styled';

export const PublicationsItem = ({ title, body }) => {
  return (
    <Item>
      <p>
        <b>Title:</b> {title}
      </p>
      <BodyText>
        <b>Body:</b> {body}
      </BodyText>
    </Item>
  );
};
