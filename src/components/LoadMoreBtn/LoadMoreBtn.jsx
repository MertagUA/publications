import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonStyled } from '../Form/Form.styled';

export const LoadMoreBtn = ({ onLoadMoreBtnClick, isLoadMoreDisabled }) => {
  return (
    <ButtonStyled
      type="button"
      onClick={onLoadMoreBtnClick}
      disabled={isLoadMoreDisabled}
    >
      Load more
    </ButtonStyled>
  );
};
